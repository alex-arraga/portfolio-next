import React from 'react'

export function CalculatorContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex-col justify-center items-center rounded-xl h-fit w-fit mt-4 sm:mt-0 p-4 md:p-6 bg-indigo-950 bg-opacity-70 border-white border-2 border-opacity-30'>
            {children}
        </div>
    )
}

export default CalculatorContainer