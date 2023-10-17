import React from 'react'

export function Button({ children, onClick }: { children: React.ReactNode, onClick: (value: string | React.ReactNode) => void }) {
    return (
        <button
            tabIndex={0}
            onClick={() => onClick(children)}
            className={`flex justify-center items-center text-xl cursor-pointer w-16 h-10 mx-1.5 my-1.5 rounded-md bg-white bg-opacity-20 hover:bg-cyan-700 duration-200 border-2 border-gray-400 border-opacity-40`}>
            {children}
        </button>
    )
}
