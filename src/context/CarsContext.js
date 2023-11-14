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

    return <CarsContext.Provider value={{
        sectionLikes,
        setSectionLikes,
    }}>
        {children}
    </CarsContext.Provider>
}

export default CarsContext