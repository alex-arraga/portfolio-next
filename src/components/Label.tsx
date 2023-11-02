import React from 'react'

export function Label({ title }: { title: string }) {
    return (
        <label className='text-sm text-white'>{title}</label>
    )
}

export default Label