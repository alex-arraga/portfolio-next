"use client"

import { baseURL } from "@/libs/baseURL";
import { createContext, useContext, useState } from "react";

export const CarsContext = createContext()

export const useCarsContext = () => {
    const context = useContext(CarsContext)
    if (!context) { console.log('useCarsContext must be inside of a context') }
    return context
}

export const CarsProvider = ({ children }) => {
    const [sectionLikes, setSectionLikes] = useState(false)

    const newCar = async (car) => {
        try {
            const response = await fetch(`${baseURL}/cars-store`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(car)
            })

            const newCar = await response.json()
            return newCar

        } catch (error) {
            console.log(error)
        }
    }

    return <CarsContext.Provider value={{
        sectionLikes,
        setSectionLikes,
        newCar,
    }}>
        {children}
    </CarsContext.Provider>
}

export default CarsContext

// make, class, combination_mpg, cylinders, displacemen, drive, fuel_type, highway_mpg, make, model, transmission, year