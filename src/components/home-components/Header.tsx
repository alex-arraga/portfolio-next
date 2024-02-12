"use client"

import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import { useHomeContext } from '@/context/HomeContext';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export function Header() {
    const [loadData, setLoadData] = useState(false)
    const { loadPage, dataUser } = useHomeContext()

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
    const userDialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (loadPage) {
            setLoadData(true)
        }
    }, [loadPage])


    useEffect(() => {
        console.log(isDialogOpen)
    }, [isDialogOpen])

    const handleDialog = () => {
        if (!isDialogOpen) {
            setIsDialogOpen(true)
            userDialogRef.current?.showModal()
        } else {
            setIsDialogOpen(false)
            userDialogRef.current?.close()
        }
    }

    return (
        <>
            {
                loadData === true ?
                    <header className='fixed top-0 z-10 w-full border-b-2 border-indigo-500 border-opacity-20 h-10 md:h-12 xl:h-14'>
                        <div className='flex justify-center bg-gradient-to-r from-slate-950 to-slate-900 items-center w-full h-full'>
                            <div className='flex justify-between items-center w-full px-4 md:px-6 xl:px-8'>
                                <Image
                                    src='/header-icon.svg'
                                    alt='page logo'
                                    width={36}
                                    height={36}
                                    className='object-contain w-[22px] h-[22px] md:w-[30px] md:h-[30px] xl:w-[36px] xl:h-[36px]'
                                />

                                <div className='flex justify-center items-center bg-gradient-to-r from-indigo-900 to-transparent rounded-full pl-2 md:pl-4 xl:pl-6 h-full gap-2 md:gap-4'>
                                    <p className='text-xs md:text-sm xl:text-base text-white capitalize'>
                                        {
                                            dataUser()?.name ? dataUser()?.name
                                                : dataUser()?.username ? dataUser()?.username?.replace(/[0-9-_]+/g, ' ')
                                                    : 'Internauta'
                                        }
                                    </p>
                                    {
                                        dataUser()?.name === undefined || dataUser()?.username === undefined ?
                                            <div className='w-full h-full'>
                                                <button onClick={handleDialog} className='align-middle select-none'>
                                                    <Image
                                                        src='/internauta.svg'
                                                        alt='internauta logo'
                                                        height={28}
                                                        width={28}
                                                        className='object-contain '
                                                    />
                                                </button>

                                                <dialog
                                                    className='bg-white left-auto right-5 select-none mt-4 cursor-default rounded-lg'
                                                    open={isDialogOpen}
                                                >
                                                    <section className='flex justify-end p-4 md:p-6 w-full max-w-[18rem] md:max-w-xs rounded-lg mr-2 sm:mr-4 md:mr-6 bg-slate-50' >
                                                        <div className='flex flex-col gap-2 rounded-lg w-full max-w-[18rem] md:max-w-xs'>
                                                            <div className='flex items-center w-full mb-2'>
                                                                <div className='rounded-full bg-black'>
                                                                    <Image
                                                                        src='/internauta.svg'
                                                                        alt='internauta logo'
                                                                        height={45}
                                                                        width={45}
                                                                        className='object-contain p-1.5'
                                                                    />
                                                                </div>

                                                                <p className='text-sm sm:text-base md:text-lg w-full text-center font-semibold'>Internauta <span className='text-xs sm:text-sm font-medium text-gray-500'>(Invitado)</span></p>
                                                            </div>
                                                            <Link
                                                                href='/sign-in'
                                                                className='text-xs sm:text-sm 2xl:text-base font-medium px-4 py-2 text-blue-700 border-2 border-gray-200 hover:bg-indigo-100 hover:border-blue-500 duration-200 w-full text-right rounded-md'>
                                                                Ingresar con mi cuenta
                                                            </Link>
                                                            <Link
                                                                href='/sign-up'
                                                                className='text-xs sm:text-sm 2xl:text-base font-medium px-4 py-2 text-blue-700 border-2 border-gray-200 hover:bg-indigo-100 hover:border-blue-500 duration-200 w-full text-right rounded-md'>
                                                                Registrarme
                                                            </Link>
                                                        </div>
                                                    </section>
                                                </dialog>
                                            </div>
                                            :
                                            <UserButton afterSignOutUrl="/sign-in" />
                                    }
                                </div>
                            </div>
                        </div>
                    </header>

                    :

                    <header className='fixed top-0 z-10 w-full border-b-2 border-gray-500 border-opacity-20 h-10 md:h-12 xl:h-14'>
                        <div className='flex justify-center bg-gradient-to-r from-slate-950 to-slate-900 items-center w-full h-full'>
                            <div className='flex relative justify-between items-center w-full px-4 md:px-6 xl:px-8'>

                                <div className='w-8 h-8 bg-slate-800 rounded-lg animate-pulse' />
                                <div className='w-14 h-8 bg-slate-800 rounded-lg animate-pulse' />

                            </div>
                        </div>
                    </header>
            }
        </>
    )
}

export default Header