import React from 'react'

export function Screen({ value }: { value: string }) {

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
    };

    return (
        <form className='flex justify-end items-center'
            onSubmit={() => handleSubmit}>
            <input className='flex justify-end items-center px-3 h-14 rounded-md w-full max-w-xs mt-3 mb-6 overflow-auto bg-black bg-opacity-50 text-right text-3xl border-white border-2 border-opacity-30'
                placeholder='0'
                type='text'
                readOnly
                value={value}>
            </input>
        </form>
    )
}

export default Screen