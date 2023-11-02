"use client"

import { useState, Fragment, useEffect } from 'react'
import { Transition, Listbox } from '@headlessui/react'
import { yearsOfProduction } from '@/constants'
import Image from 'next/image'

export function YearFilter() {
    const [selected, setSelected] = useState('2015')

    return (
        <div className='mt-5'>

            <div className={'flex justify-start relative items-center bg-gray-100 w-full h-8 rounded-full text-[12px] font-light text-gray-400'}>
                <span className='pl-12'>{selected}</span>

                <Listbox
                    value={selected}
                    onChange={setSelected}
                >
                    <Image src={'/calendar-search.svg'}
                        alt='year car'
                        width={20}
                        height={20}
                        className='absolute left-4 opacity-30'
                    />
                    <Listbox.Button className={'relative flex items-center justify-end w-full h-full'}>
                        <Image src={'/chevron-up-down.svg'}
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

                        <Listbox.Options className={'absolute z-10 w-full top-10 bg-white'}>
                            {
                                yearsOfProduction.map((year) => (
                                    <Listbox.Option
                                        key={Math.random()}
                                        value={year.value}
                                        onChange={() => setSelected(year.value)}
                                        className={({ active }) => `search-manufacturer__option flex justify-end text-sm ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
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