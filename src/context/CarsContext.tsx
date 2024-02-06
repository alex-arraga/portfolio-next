"use client"

import { baseApi, baseApiProjectsUrl } from "@/libs/baseURL";
import { createContext, useContext, useState, useEffect } from "react";
import { useHomeContext } from "@/context/HomeContext";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import { DefaultContextProviderProps } from "@/types/context-types";
import { CarsContextType } from "@/types/context-types";
import { CarCardProps, DataNewCar, RentedCarCardProps } from "@/types/cars-store-types";


const CarsContext = createContext<CarsContextType | null>(null);


// Hook
export const useCarsContext = () => {
    const context = useContext(CarsContext)
    if (!context) { console.log('useCarsContext must be inside of a context') }
    return context
};


// Provider
export const CarsProvider = ({ children }: DefaultContextProviderProps) => {
    const { dataUser, getUserId } = useHomeContext();

    const uuid = uuidv4();
    const router = useRouter()

    const [sectionLikes, setSectionLikes] = useState(false);
    const [isClientLoaded, setIsClientLoaded] = useState(false);


    useEffect(() => {
        setIsClientLoaded(true)
    }, [isClientLoaded])


    const searchParams = isClientLoaded ? new URLSearchParams(window.location.href) : '';
    const hasManufacturer = searchParams ? searchParams.get('manufacturer') : '';
    const hasModel = searchParams ? searchParams.get('model') : '';


    const newCar = async (car: DataNewCar) => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/cars-store`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(car)
            })

            const data = await response.json()
            return data

        } catch (error) {
            console.log(error)
        }
    };


    const getCar = async (carId: string) => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/cars-store/${carId}`, {
                method: 'GET',
                credentials: 'include',
            })

            const body = await response.json()
            const data = body.infoCar

            return data
        } catch (error) {
            console.log(error)
        }
    };


    const updateCar = async (car: DataNewCar | RentedCarCardProps | CarCardProps, isLikeChange: boolean, dataToUpdate?: {}) => {
        if (isLikeChange) {
            // Case 1 - If the car have a LIKE and is RENTED, it will remove the LIKE
            if (car.liked && car.rented) {
                try {
                    const likeUpdated = { liked: false };

                    const response = await fetch(`${baseApiProjectsUrl}/cars-store/${car.car_id}`, {
                        method: 'PUT',
                        credentials: 'include',
                        body: JSON.stringify(likeUpdated)
                    });

                    if (response.ok) {
                        router.refresh()
                        return toast.message(`The like of ${car.make.toUpperCase()} ${car.model.toUpperCase()} has been removed`);
                    };
                } catch (error) {
                    console.log(error)
                    return toast.error('Oops, an error occurred')
                }

                // Case 2 - If the car NOT have a LIKE and is RENTED, it will have a LIKE.
            } else if (!car.liked && car.rented) {
                try {
                    const likeUpdated = { liked: true };

                    const response = await fetch(`${baseApiProjectsUrl}/cars-store/${car.car_id}`, {
                        method: 'PUT',
                        credentials: 'include',
                        body: JSON.stringify(likeUpdated)
                    });

                    if (response.ok) {
                        router.refresh()
                        return toast.message(`${car.make.toUpperCase()} ${car.model.toUpperCase()} added to the section 'The cars I Liked'`);
                    };
                } catch (error) {
                    console.log(error)
                    return toast.error('Oops, an error occurred')
                }
            }

            // Case 3 - If the car have a LIKE and HAS NOT BEEN RENTED, it will be DELETED.
            else if (car.liked && !car.rented) {
                try {
                    await deleteCar(car.car_id!);
                    router.refresh();

                    return toast.message(`${car.make.toUpperCase()} ${car.model.toUpperCase()} removed from the cars you like`);
                } catch (error) {
                    console.log(error)
                    return toast.error('Oops, an error occurred')
                }
            }
        } else {
            try {
                // Update any type of data
                await fetch(`${baseApiProjectsUrl}/cars-store/${car.car_id}`, {
                    method: 'PUT',
                    credentials: 'include',
                    body: JSON.stringify(dataToUpdate)
                });

            } catch (error) {
                console.log(error)
                return toast.error('Oops, an error occurred')
            }
        }
    };


    const deleteCar = async (carId: string) => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/cars-store/${carId}`, {
                method: 'DELETE',
                credentials: 'include',
            })

            if (response.ok) {
                router.refresh()
            }

        } catch (error) {
            console.log(error)
            return toast.error('Oops, an error occurred')
        }
    };


    const manageLikes = async (car: RentedCarCardProps | CarCardProps) => {
        if (isClientLoaded) {
            try {
                const existCar = await getCar(car.car_id!)

                if (!existCar) {
                    const data = {
                        car_id: `${uuid}${new Date().getTime()}`,
                        city_mpg: car.city_mpg,
                        class: car.class,
                        combination_mpg: car.combination_mpg,
                        cylinders: car.cylinders,
                        displacement: car.displacement,
                        drive: car.drive,
                        fuel_type: car.fuel_type,
                        highway_mpg: car.highway_mpg,
                        make: car.make,
                        model: car.model,
                        transmission: car.transmission,
                        year: car.year,
                        liked: true,
                        user_id: await getUserId(),
                        user_clerk: dataUser()?.id_clerk
                    };

                    await newCar(data);
                    toast.success(`This car was added to the section 'The cars I Liked'`)
                } else {
                    await updateCar(existCar, true)
                }
            } catch (error) {
                console.log(error)
            }
        }
    };


    const newPendingCar = async (car: CarCardProps, orderId: string) => {
        if (isClientLoaded) {
            try {
                const dataNewCar = {
                    car_id: `${uuid}${new Date().getTime()}`,
                    city_mpg: car.city_mpg,
                    class: car.class,
                    combination_mpg: car.combination_mpg,
                    cylinders: car.cylinders,
                    displacement: car.displacement,
                    drive: car.drive,
                    fuel_type: car.fuel_type,
                    highway_mpg: car.highway_mpg,
                    make: car.make,
                    model: car.model,
                    transmission: car.transmission,
                    year: car.year,

                    rented: false,

                    order_id: orderId,
                    user_id: await getUserId(),
                    user_clerk: dataUser()?.id_clerk
                };

                // Create car in db
                await newCar(dataNewCar);
            } catch (error) {
                console.log(error)
            }
        }
    };


    const getOrder = async (id: string) => {
        try {
            const getOrder = await fetch(`${baseApi}/payment/order/${id}`, {
                method: 'GET',
                credentials: 'include',
            })

            return getOrder
        } catch (error) {
            console.log(error)
        }
    };


    const newOrder = async (car: RentedCarCardProps | CarCardProps, orderId: string, durationRented: number, costRent?: number, suscription?: number) => {
        if (isClientLoaded) {
            try {
                const priceRent = costRent ? costRent * durationRented : '';

                // Object that will send to create new order
                const orderData = {
                    order_id: orderId,
                    duration_rented: durationRented,
                    price: suscription ? suscription : priceRent,
                    user_id: await getUserId(),
                    user_clerk: dataUser()?.id_clerk
                };

                // POST - Create order
                await fetch(`${baseApi}/payment/order`, {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(orderData)
                })

                // GET - Chek if the car exist
                const existCar = await getCar(car.car_id!)

                if (!existCar) {
                    // POST - If the car not exist, create "pending" car to connect bot tables
                    await newPendingCar(car, orderId)
                } else {
                    // PUT - If the car exist, it will have a new "order_id"
                    await updateCar(car, false, { order_id: orderId })
                }

                // GET - Obtain the created order data to send to the "MP preference"
                const response = await getOrder(orderId)

                if (response && response.ok) {
                    const body = await response.json()
                    const data = body.infoOrder

                    return data
                } else {
                    toast.error('An error was ocurred... Please try again')
                    return null
                }
            } catch (error) {
                console.log(error)
                return null
            }
        }
    };


    return <CarsContext.Provider value={{
        isClientLoaded,
        sectionLikes,
        setSectionLikes,
        searchParams,
        hasManufacturer,
        hasModel,
        newCar,
        manageLikes,
        newPendingCar,
        newOrder
    }}>
        {children}
    </CarsContext.Provider>
}
