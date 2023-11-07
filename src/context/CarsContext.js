"use client"

import { createContext, useContext } from "react";

const CarsContext = createContext()

export const useCarsContext = () => {
    const context = useContext(CarsContext)
    if (!context) { console.log('useCarsContext must be inside of a context') }
    return context
}

export const CarsProvider = ({ children }) => {

    const filterTypes = ({ typesCars }) => {
        if (typesCars) {
            const types = [...typesCars]
            return console.log(types)

        } else {
            console.log('No hay types')
        }

    }

    return <CarsContext.Provider value={{
        filterTypes
    }}>
        {children}
    </CarsContext.Provider>
}

export default CarsContext