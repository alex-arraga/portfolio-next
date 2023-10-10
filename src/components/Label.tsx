import React from 'react'

export function Label({ children }: { children: String }) {
    return (
        <label className='text-sm text-white'>{children}</label>
    )
}

export default Label