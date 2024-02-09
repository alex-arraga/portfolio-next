"use client"

import { Navbar } from '@/components/tasks-components/Navbar/Navbar'

export function AppTasks({ children }: { params: { id: string | undefined }; children: React.ReactNode | any }) {
    return (
        <div className='max-w-[2000px] mx-auto px-2 sm:px-4 xl:px-10 mb-10'>
            <Navbar />
            {children}
        </div>
    )
}

export default AppTasks

