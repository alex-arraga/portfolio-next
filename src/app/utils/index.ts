import { CarCardProps, FilterProps } from "@/types/cars-store";

export async function fetchCarsAPI(filters: FilterProps) {
    let time = performance.now()
    const { manufacturer, model, year, limit, fuel, city_mpg, highway_mpg, transmission } = filters;

    const headers = {
        'X-RapidAPI-Key': `${process.env.RAPID_SECRET_KEY}`,
        'X-RapidAPI-Host': `${process.env.RAPID_HOST}`
    }

    let url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}&min_city_mpg=${city_mpg}&max_hwy_mpg=${highway_mpg}transmission=${transmission}`;
    const response = await fetch(url, {
        headers: headers
    })

    const result = await response.json()
    console.log('😸', performance.now() - time)
    return result
};

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

export const generateCarImageAPI = (car: CarCardProps, angle?: string, color?: string) => {
    const url = new URL(`${process.env.IMAGIN_URL}`);
    const { make, model, year } = car;

    url.searchParams.append('customer', `${process.env.IMAGIN_SECRET_KEY}`);
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
    url.searchParams.append('color', `${color}`);

    return `${url}`;
};

// I have to check if I am using it, otherwise delete it.
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
};

// Move to CarsContext
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