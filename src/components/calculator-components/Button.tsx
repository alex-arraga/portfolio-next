import React from 'react'

export function Button({ children, onClick }: { children: React.ReactNode, onClick: (value: string | React.ReactNode) => void }) {
    return (
        <button
            tabIndex={0}
            onClick={() => onClick(children)}
            className={`flex justify-center items-center cursor-pointer px-4 py-2 mx-1 my-2 rounded-md bg-slate-800`}>
            {children}
        </button>
    )
}
