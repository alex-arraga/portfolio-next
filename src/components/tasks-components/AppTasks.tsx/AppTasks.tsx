"use client"

import { Navbar } from '@/components/tasks-components/Navbar/Navbar'

export function App({ params, children }: { params: { id: string | undefined }; children: React.ReactNode | any }) {
    return (
        <div className='container mx-auto mb-10'>
            <Navbar />
            {children}
        </div>
    )
}

export default App

