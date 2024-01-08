"use client"

import { baseApi, baseApiProjectsUrl } from "@/libs/baseURL";
import { createContext, useContext, useState, useEffect } from "react";
import { useHomeContext } from "./HomeContext";
import { toast } from "sonner";

export const CarsContext = createContext();

export const useCarsContext = () => {
    const context = useContext(CarsContext)
    if (!context) { console.log('useCarsContext must be inside of a context') }
    return context
};

export const CarsProvider = ({ children }) => {
    const { dataUser, getUserId } = useHomeContext();
    const [sectionLikes, setSectionLikes] = useState(false);
    const [isClientLoaded, setIsClientLoaded] = useState(false);

    useEffect(() => {
        if (dataUser) {
            setIsClientLoaded(true)
        }
    }, [isClientLoaded])

    const searchParams = isClientLoaded ? new URLSearchParams(window.location.href) : '';

    const hasManufacturer = searchParams ? searchParams.get('manufacturer') : '';
    const hasModel = searchParams ? searchParams.get('model') : '';

    const newCar = async (car) => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/cars-store`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(car)
            })

            const newCar = await response.json()
            return newCar

        } catch (error) {
            console.log(error)
        }
    };


    const newPendingCar = async (car, orderId) => {
        if (isClientLoaded) {
            try {
                const dataNewCar = {
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

                    liked: car.liked = false,
                    rented: car.rented = false,

                    order_id: orderId,
                    user_id: await getUserId(),
                    user_clerk: dataUser().id_clerk
                };

                // Create car in db
                await newCar(dataNewCar);
            } catch (error) {
                console.log(error)
            }
        }
    };


    // Corregir para que valide si existe el auto o no
    const newCarLiked = async (car) => {
        if (isClientLoaded) {
            try {
                const data = {
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
                    liked: car.liked = true,
                    user_id: await getUserId(),
                    user_clerk: dataUser().id_clerk
                };

                console.log(data)

                await newCar(data);
                toast.success(`This car was added to the section 'The cars I Liked'`)
            } catch (error) {
                console.log(error)
            }
        }
    };


    const getOrder = async (id) => {
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


    const newOrder = async (car, orderId, durationRented, costRent, suscription) => {
        if (isClientLoaded) {
            try {
                const priceRent = costRent * durationRented;

                // Objeto que se enviara como datos para la orden
                const orderData = {
                    order_id: orderId,
                    duration_rented: durationRented,
                    price: suscription ? suscription : priceRent,
                    user_id: await getUserId(),
                    user_clerk: dataUser().id_clerk
                };

                // POST - Create order
                await fetch(`${baseApi}/payment/order`, {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(orderData)
                })

                // POST - Create "pending" car to connect bot tables
                await newPendingCar(car, orderId)

                // GET - Obtengo los datos de la orden creada para enviarlo a la "MP preference"
                const obtainOrder = await getOrder(orderId)
                const response = await obtainOrder.json()
                const data = response.infoOrder

                return data
            } catch (error) {
                console.log(error)
                return null
            }
        }
    };


    return <CarsContext.Provider value={{
        sectionLikes,
        setSectionLikes,
        newCar,
        isClientLoaded,
        newCarLiked,
        newPendingCar,
        searchParams,
        hasManufacturer,
        newOrder,
        hasModel
    }}>
        {children}
    </CarsContext.Provider>
}

export default CarsContext