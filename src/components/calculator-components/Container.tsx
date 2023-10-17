import React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex-col justify-center items-center rounded-xl h-[calc(100vh-5rem)] p-6 bg-cyan-900 bg-opacity-30 border-white border-2 border-opacity-30'>
            {children}
        </div>
    )
}

export default Container