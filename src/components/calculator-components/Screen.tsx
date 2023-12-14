"use client"
import React from 'react'

export function Screen({ value }: { value: string }) {
    return (
        <form className='flex justify-end items-center'>
            <input className='flex justify-end items-center px-3 h-12 md:h-14 rounded-md w-full max-w-xs mt-3 mb-3 md:mb-5 overflow-auto bg-black bg-opacity-50 text-right text-base sm:text-txt_20 md:text-txt_30 border-white border-2 border-opacity-30'
                placeholder='0'
                type='text'
                readOnly={true}
                value={value}>
            </input>
        </form>
    )
}

export default Screen