"use client"

import Image from "next/image"
import { SearchManufacturerProps } from "@/types/cars-store-types"
import { Combobox, Transition } from "@headlessui/react"
import { useState, Fragment } from 'react'
import { manufacturers } from "@/constants"
import { useCarsContext } from "@/context/CarsContext"


function SearchManufacturer({ manufacturer, setManufacturer, styleSearchbar }: SearchManufacturerProps) {
    const [query, setQuery] = useState('');

    const context = useCarsContext()
    const hasManufacturer = context?.hasManufacturer

    const filterManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => (
        item.toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
    ))

    return (
        <>
            {
                styleSearchbar === 'aside-filters' ?

                    <div className="flex w-full">
                        <Combobox value={manufacturer} onChange={setManufacturer}>
                            <div className="relative w-full">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={"/toyota-logo.svg"}
                                        width={20}
                                        height={20}
                                        alt="Car Logo"
                                        className="object-contain ml-4 opacity-30 absolute"
                                    />

                                    <Combobox.Input
                                        placeholder={hasManufacturer ? 'Last search: ' + hasManufacturer : 'Toyota'}
                                        displayValue={(manufacturer: string) => manufacturer}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="bg-gray-100 w-full h-8 capitalize rounded-full text-xs font-light px-12"
                                    />
                                </div>


                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                >
                                    <Combobox.Options className={'absolute z-10 bg-gray-100 w-full my-2 rounded-xl border-2 border-gray-200'}>
                                        {
                                            filterManufacturers.length === 0 && query !== '' ?
                                                (
                                                    <Combobox.Option
                                                        value={query}
                                                        className={'search-manufacturer__option'}>
                                                        No results &#34;{query}&#34;
                                                    </Combobox.Option>
                                                )
                                                : (
                                                    filterManufacturers.map((item) => (
                                                        <Combobox.Option
                                                            key={item}
                                                            value={item}
                                                            className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                                        >
                                                            {item}
                                                        </Combobox.Option>
                                                    ))
                                                )

                                        }
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>

                    :

                    <div className="search-manufacturer">
                        <Combobox value={manufacturer} onChange={setManufacturer}>
                            <div className="relative w-full">
                                <Combobox.Button className={'absolute top-[14px]'} >
                                    <Image
                                        src={"/car-logo.svg"}
                                        width={20}
                                        height={20}
                                        alt="Car Logo"
                                        className="object-contain ml-4"
                                    />
                                </Combobox.Button>

                                <Combobox.Input
                                    className={'search-manufacturer__input'}
                                    placeholder={hasManufacturer ? 'Last search: ' + hasManufacturer : 'Volkswagen'}
                                    displayValue={(manufacturer: string) => manufacturer}
                                    onChange={(e) => setQuery(e.target.value)}
                                />

                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                >
                                    <Combobox.Options className={'absolute z-10 bg-gray-100 w-full my-2 rounded-xl border-2 border-gray-200'}>
                                        {
                                            filterManufacturers.length === 0 && query !== '' ?
                                                (
                                                    <Combobox.Option
                                                        value={query}
                                                        className={'search-manufacturer__option'}>
                                                        No results &#34;{query}&#34;
                                                    </Combobox.Option>
                                                )
                                                : (
                                                    filterManufacturers.map((item) => (
                                                        <Combobox.Option
                                                            key={item}
                                                            value={item}
                                                            className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                                        >
                                                            {item}
                                                        </Combobox.Option>
                                                    ))
                                                )

                                        }
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>
            }
        </>

    )
}

export default SearchManufacturer