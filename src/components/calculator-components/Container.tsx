import React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex-col justify-center items-center rounded-md w-96 h-2/3 p-6 bg-gray-500'>
            {children}
        </div>
    )
}

export default Container