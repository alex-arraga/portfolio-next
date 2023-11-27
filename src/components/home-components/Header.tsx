"use client"

import React from 'react'
import Image from 'next/image'
import { HiMenuAlt1 } from 'react-icons/hi';

export function Header() {
    return (
        <header className='fixed top-0 z-10 w-full border-b-2 border-indigo-500 border-opacity-20 h-10 md:h-12 xl:h-14'>
            <div className='flex justify-center bg-gradient-to-r from-slate-950 to-slate-900 items-center w-full h-full'>
                <div className='flex relative justify-between items-center w-full px-4 md:px-6 xl:px-8'>
                    <Image
                        src={'/header-icon.svg'}
                        alt='page logo'
                        width={36}
                        height={36}
                        className='object-contain w-[22px] h-[22px] md:w-[30px] md:h-[30px] xl:w-[36px] xl:h-[36px]'
                    />

                    <HiMenuAlt1 className='object-contain w-6 h-6 xl:w-8 xl:h-8 text-white' />
                </div>
            </div>
        </header>
    )
}

export default Header