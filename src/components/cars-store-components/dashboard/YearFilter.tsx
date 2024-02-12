"use client"

import { useState, Fragment, useEffect } from 'react'
import { Transition, Listbox } from '@headlessui/react'
import { yearsOfProduction } from '@/constants'
import { updateSearchParams } from "@/app/utils";


import Image from 'next/image'
import { useRouter } from 'next/navigation';

export function YearFilter() {
    const [selected, setSelected] = useState('')

    const router = useRouter()
    const searchParams = new URLSearchParams(window.location.search)
    const hasYearParam = searchParams.get('year')

    const setYearParam = (yearSelected: string) => {
        setSelected(yearSelected)

        const newYear = updateSearchParams({ params: [{ type: 'year', value: yearSelected }] })
        router.push(newYear)
    }

    return (
        <div className='mt-5'>

            <div className='flex justify-start relative items-center bg-gray-100 w-full h-8 rounded-full text-xs font-medium cursor-pointer text-gray-400'>
                <span className='pl-12'>
                    {
                        selected ? selected
                            : hasYearParam ? hasYearParam
                                : '2015'
                    }
                </span>

                <Listbox
                    value={selected}
                    onChange={setYearParam}
                >
                    <Image src='/calendar-search.svg'
                        alt='year car'
                        width={20}
                        height={20}
                        className='absolute left-4 opacity-30'
                    />
                    <Listbox.Button className='relative flex items-center justify-end w-full h-full'>
                        <Image src='/chevron-up-down.svg'
                            alt='year car'
                            width={20}
                            height={20}
                            className='relative mr-4 opacity-30'
                        />
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >

                        <Listbox.Options className='absolute z-10 w-full border-2 border-gray-200 rounded-xl top-10 bg-white h-max-[calc(3rem)]'>
                            {
                                yearsOfProduction.map((year) => (
                                    <Listbox.Option
                                        key={Math.random()}
                                        value={year.value}
                                        onChange={() => setYearParam(year.value)}
                                        className={({ active }) => `flex justify-end text-xs sm:text-sm select-none py-2 pl-10 pr-4 cursor-pointer ${active ? 'bg-primary-blue text-white' : 'text-gray-600'}`}
                                    >
                                        <p>{year.value}</p>
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>

        </div>
    )
}

export default YearFilter