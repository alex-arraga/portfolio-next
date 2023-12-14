import React from 'react'

export function CalculatorContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex-col justify-center items-center rounded-xl h-fit mt-4 sm:mt-0 p-4 md:p-6 bg-cyan-900 bg-opacity-30 border-white border-2 border-opacity-30'>
            {children}
        </div>
    )
}

export default CalculatorContainer
// md:max-h-[calc(100vh-5rem)]