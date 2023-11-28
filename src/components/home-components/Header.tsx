"use client"

import Image from 'next/image'
import { UserButton, useUser } from "@clerk/nextjs";

export function Header() {
    const user = useUser();
    const firstNameUser = user.user?.firstName;
    const userName = user.user?.username;

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

                    <div className='flex bg-gradient-to-r from-indigo-900 to-transparent justify-center items-center rounded-full pl-2 md:pl-4 xl:pl-6 h-full gap-2 md:gap-4'>
                        <p className='text-[12px] md:text-[14px] xl:text-[16px] text-white capitalize'>{firstNameUser ? firstNameUser : userName?.replace(/[0-9-_]+/g, ' ')}</p>
                        <UserButton afterSignOutUrl="/sign-in" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header