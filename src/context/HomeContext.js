"use client"

import { createContext, useContext, useState } from "react";

export const HomeContext = createContext()

export const useHomeContext = () => {
    const context = useContext(HomeContext)
    if (!context) {
        throw new Error('HomeContext must be inside of a context')
    } return context
}

export function HomeProvider({ children }) {
    const [codeProjects, setCodeProjects] = useState(true);
    const [image, setImage] = useState('');

    return <HomeContext.Provider value={{
        codeProjects,
        setCodeProjects,
        image,
        setImage
    }}>
        {children}
    </HomeContext.Provider>
}

export default HomeContext