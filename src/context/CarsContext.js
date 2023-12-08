"use client"

import { baseApiProjectsUrl } from "@/libs/baseURL";
import { createContext, useContext, useState } from "react";
import { useHomeContext } from "./HomeContext";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation"

export const CarsContext = createContext()

export const useCarsContext = () => {
    const context = useContext(CarsContext)
    if (!context) { console.log('useCarsContext must be inside of a context') }
    return context
}

export const CarsProvider = ({ children }) => {
    const { dataUser, getUserId } = useHomeContext()

    const isBrowser = !typeof window === undefined

    const [sectionLikes, setSectionLikes] = useState(false);
    const router = useRouter()
    const pathname = usePathname()
    const paramsLinkApi = window.location.href.includes('?http');

    let searchParams
    if (isBrowser) {
        searchParams = new URLSearchParams(window);
    }
    const hasManufacturer = searchParams.get('manufacturer')
    const hasModel = searchParams.get('model')

    const keysToDelete = [];


    const updateSearchParams = (model, manufacturer) => {
        if (!searchParams) return

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathName = `${pathname}?${searchParams.toString()}`
        router.push(newPathName)
    }


    const resetAllFilters = () => {
        if (!searchParams) return
        if (searchParams.keys().next().done) {
            toast.message('No filters have been applied');
        }
        else if (`${paramsLinkApi}`) {
            router.push(pathname)
        }

        else {
            searchParams.forEach((_value, key) => {
                keysToDelete.push(key);
            });

            keysToDelete.forEach(key => {
                searchParams.delete(key);
            });

            const clearPath = `${window.location.pathname}?${searchParams.toString()}`;
            router.push(clearPath);

            toast.success('You can see all cars again!');
        }
    }


    // Async functions
    const loadCars = async () => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/cars-store`, {
                method: 'GET',
                credentials: 'include'
            })

            const cars = await response.json()
            return cars
        } catch (error) {
            console.log(error)
        }
    };


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


    const newCarLiked = async (car) => {
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
                rented: car.rented = false,
                user_id: await getUserId(),
                user_clerk: dataUser().id_clerk
            };

            console.log(data)

            await newCar(data);
            toast.success(`This car was added to the section 'The cars I Liked'`)
        } catch (error) {
            toast.error('Oops...Could not add a like, please try again')
        }
    };


    return <CarsContext.Provider value={{
        sectionLikes,
        setSectionLikes,
        newCar,
        newCarLiked,
        resetAllFilters,
        updateSearchParams,
        searchParams,
        hasManufacturer,
        hasModel
    }}>
        {children}
    </CarsContext.Provider>
}

export default CarsContext