import React from 'react'

export function Rows({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex items-center justify-center my-2'>
            {children}
        </div>
    )
}

export default Rows