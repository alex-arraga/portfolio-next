import { CarsResponse, CarsResponseSchema, CarImagesSchema } from "@/schemas/zod-schemas";
import { CarCardProps, DeleteParamProps, FilterProps, UpdateSearchParamsProps } from "@/types/cars-store-types";
import { toast } from "sonner";
import { prisma } from "@/libs/prisma";
import { SettingOrderParams } from "@/types/payment-types";


// Obtain cars information
export async function fetchCarsAPI(filters: FilterProps): Promise<CarsResponse | undefined> {
    const { manufacturer, model, year, limit, fuel, city_mpg, highway_mpg, transmission } = filters;

    const rapidHost = process.env.RAPID_HOST;
    const rapidKey = process.env.RAPID_SECRET_KEY;

    if (rapidHost && rapidKey) {
        const headers = {
            'X-RapidAPI-Key': rapidKey,
            'X-RapidAPI-Host': rapidHost
        }

        let url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}&min_city_mpg=${city_mpg}&max_hwy_mpg=${highway_mpg}transmission=${transmission}`;

        const response = await fetch(url, {
            headers: headers
        })

        if (!response.ok) {
            console.error(await response.text())
            return []
        } else {
            // Zod check
            const result = await response.json() as CarsResponse
            const check = CarsResponseSchema.safeParse(result)

            if (check.success) {
                return result
            } else {
                console.log(check.error)
                return []
            }
        }
    }
};


// Update params to filter cars info
export const updateSearchParams = ({ params }: UpdateSearchParamsProps) => {
    const searchParams = new URLSearchParams(window.location.search);
    params.map(({ type, value }) => {
        searchParams.set(type, value)
    })

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    toast.success('Filters applicated')
    return newPathName
};


// Clear a filter
export const deleteParam = ({ param, value }: DeleteParamProps) => {
    try {
        const searchParams = new URLSearchParams(window.location.search);
        const existingParams = Object.fromEntries(searchParams.entries())

        if (value) {
            if (existingParams[param] === value) {
                delete existingParams[param]

                const newSearchParam = new URLSearchParams(existingParams)
                const clearPathName = `${window.location.pathname}?${newSearchParam.toString()}`
                window.location.href = clearPathName
            }
        } else {
            existingParams[param]
            delete existingParams[param]

            const newSearchParam = new URLSearchParams(existingParams)
            const clearPathName = `${window.location.pathname}?${newSearchParam.toString()}`
            window.location.href = clearPathName
        }
    } catch (error) {
        console.log('Error in the function to delete specific parameters', error)
    }
}


// Clear all filters
export const deleteAllParams = () => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.size === 0) {
        toast.message('Search parameters not found')
    } else {
        const keysToDelete: { param: string }[] = []

        searchParams.forEach((_value, param) => {
            keysToDelete.push({ param })
        })

        keysToDelete.forEach(({ param }) => {
            searchParams.delete(param)
        })

        window.location.href = `${window.location.pathname}?${searchParams.toString()}`

        if (searchParams.keys().next().done) {
            toast.success('All search params have been deleted')
        } else {
            toast.error('Error: searchParams cant deleted')
        }
    }
}


// Obtain cars images
export const generateCarImageAPI = (car: CarCardProps, angle?: string, color?: string) => {
    const { make, model, year } = car;

    const apiUrl = process.env.NEXT_PUBLIC_IMAGIN_URL!;
    const secretKey = process.env.NEXT_PUBLIC_IMAGIN_SECRET_KEY!;

    let url = new URL(apiUrl);

    // Zod
    const check = CarImagesSchema.safeParse({
        customer: secretKey,
        make: make,
        modelFamily: car.model.split(" ")[0],
        zoomType: 'fullscreen',
        modelYear: year.toString(),
        angle: angle || '',
        color: color || '',
    });

    if (check.success) {
        url.searchParams.append('customer', secretKey);
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(" ")[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', year.toString());
        url.searchParams.append('angle', angle || '');
        url.searchParams.append('color', color || '');

        return url.toString()
    } else {
        console.error(check.error)
    }
};


// Rename classes and calculate rent
export const renameClasses = (nameClass: string) => {
    // An array of objects with equivalencies
    const classEquivalences = [
        { original: 'subcompact car', renamed: 'Sport' },
        { original: 'compact car', renamed: 'Hatchback' },
        { original: 'minicompact car', renamed: 'Hatchback' },
        { original: 'midsize station wagon', renamed: 'Hatchback' },
        { original: 'minivan', renamed: 'MPV' },
        { original: 'two seater', renamed: 'Sport' },
        { original: 'small station wagon', renamed: 'Sedan' },
        { original: 'midsize car', renamed: 'Sedan' },
        { original: 'large car', renamed: 'Sedan' },
        { original: 'small sport utility vehicle', renamed: 'SUV' },
        { original: 'standard sport utility vehicle', renamed: 'SUV' },
        { original: 'standard pickup truck', renamed: 'Pickup' },
        { original: 'small pickup truck', renamed: 'Pickup' }
    ];

    // Search the equivalency
    const equivalency = classEquivalences.find(item => item.original === nameClass);

    // If an equivalence is found, the renamed name is returned; otherwise, the original name is returned.
    const result = equivalency ? equivalency.renamed : nameClass;

    return result
}


// Calculate the price per day of renting a car
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


// Update rents orders data and the corresponding car
export const settingOrder = async ({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount }: SettingOrderParams) => {
    if (status === 'approved' || status === 'paid') {
        try {
            // Update order to "sucess" and "rented" prop of cars to "true"
            await prisma.order.update({
                where: {
                    order_id: orderId
                },
                data: {
                    payment_id: paymentId,
                    pay_status: status,
                    pay_resource: payResource,
                    pay_status_detail: statusDetail,
                    installments: installments,
                    fee: fee,
                    net_received_amount: netAmount,
                    pay_method: typeService
                }
            })

            // Update car to change "rented = true"
            await prisma.cars.update({
                where: {
                    order_id: orderId
                },
                data: {
                    rented: true
                }
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            // If payment status isn't approved, update status order to "rejected" and delete de created car
            await prisma.order.update({
                where: {
                    order_id: orderId
                },
                data: {
                    payment_id: paymentId,
                    pay_status: status,
                    pay_resource: payResource,
                    pay_status_detail: statusDetail,
                    installments: installments,
                    fee: fee,
                    net_received_amount: netAmount,
                    pay_method: typeService
                }
            })

            // Delete created car
            await prisma.cars.delete({
                where: {
                    order_id: orderId,
                    liked: false
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
};