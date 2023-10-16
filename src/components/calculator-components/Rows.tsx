import React from 'react'

export function Rows({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex items-center justify-center my-1 bg-red-950'>
            {children}
        </div>
    )
}

export default Rows