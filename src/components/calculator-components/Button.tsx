import React from 'react'

export function Button({ children }: { children: React.ReactNode }) {
    return (
        <button
            tabIndex={0}
            onClick={() => console.log('Click en ' + children)}
            className={`flex justify-center items-center cursor-pointer p-3 mx-1 my-2 rounded-md`}>
            {children}
        </button>
    )
}