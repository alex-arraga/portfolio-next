"use client"

import { baseURL } from "@/libs/baseURL";
import { createContext, useContext } from "react";

const CarsContext = createContext()

export const useCarsContext = () => {
    const context = useContext(CarsContext)
    if (!context) { console.log('useCarsContext must be inside of a context') }
    return context
}

export const CarsProvider = ({ children }) => {

    const getAllCars = async () => {
        try {
            const response = await fetch(`${baseURL}/cars-store`, {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            return data.getAllCars
        } catch (error) {
            console.log(error)
        }
    }

    return <CarsContext.Provider value={{
        getAllCars
    }}>
        {children}
    </CarsContext.Provider>
}

export default CarsContext