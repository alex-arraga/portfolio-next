"use client"

import React from 'react'
import Image from 'next/image'
import { HiMenuAlt1 } from 'react-icons/hi';

export function Header() {
    return (
        <header className='fixed top-0 z-10 w-full h-14'>
            <div className='flex justify-center bg-gradient-to-r from-slate-950 to-slate-900 items-center w-full h-full'>
                <div className='flex relative justify-between items-center w-full px-8'>
                    <Image
                        src={'/header-icon.svg'}
                        alt='page logo'
                        width={36}
                        height={36}
                        className='object-contain'
                    />

                    <HiMenuAlt1 className='object-contain w-8 h-8 text-white' />
                </div>
            </div>
        </header>
    )
}

export default Header