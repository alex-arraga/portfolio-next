"use client"

import { Navbar } from '@/components/Navbar/Navbar'

export function App({ params, children }: { params: { id: string | undefined }; children: React.ReactNode | any }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default App
