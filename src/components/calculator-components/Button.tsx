import React from 'react'

export function Button({ children, onClick, isNumber }: { isNumber?: boolean, children: React.ReactNode, onClick: (value: string | React.ReactNode) => void }) {
    return (
        <button
            tabIndex={0}
            onClick={() => onClick(children)}
            className={`flex justify-center items-center text-base sm:text-lg md:text-xl cursor-pointer 
            w-full h-9 
            sm:w-14 sm:h-10
            md:w-16
            mx-1.5 my-1.5 rounded-md duration-200 border-2 border-opacity-40 bg-opacity-20 text-white
            ${isNumber ? 'bg-sky-400 bg-opacity-20 border-indigo-200 hover:bg-indigo-600'
                    :
                    'bg-white active:bg-indigo-600 sm:hover:bg-indigo-600 border-gray-400 '}`
            }>
            {children}
        </button>
    )
}
