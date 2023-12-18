"use client"
import React from 'react'

export function Screen({ value }: { value: string }) {
    return (
        <form className='flex justify-center items-center mx-1 sm:mx-2'>
            <input className='flex justify-end items-center px-3 h-14 md:h-16 rounded-md mt-3 mb-3 md:mb-5 overflow-auto bg-black bg-opacity-50 text-right text-xl sm:text-txt_24 md:text-txt_30 border-white border-2 border-opacity-30'
                placeholder='0'
                type='text'
                readOnly={true}
                value={value}>
            </input>
        </form>
    )
}

export default Screen