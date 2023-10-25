"use client"

import { SearchManufacturerProps } from "@/interfaces/cars-store"
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import { useState, Fragment } from 'react'
import { manufacturers } from "@/constants"


function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
    const [query, setQuery] = useState('')

    const filterManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => (
        item.toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
    ))

    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className={'absolute top-[14px]'} >
                        <Image
                            src={"/car-logo.svg"}
                            width={20}
                            height={20}
                            alt="Car Logo"
                            className="ml-4"
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className={'search-manufacturer__input'}
                        placeholder="Volkswagen"
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
                        <Combobox.Options>
                            {
                                filterManufacturers.length === 0 && query !== '' ?
                                    (
                                        <Combobox.Option
                                            value={query}
                                            className={'search-manufacturer__option'}>
                                            No results "{query}"
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
    )
}

export default SearchManufacturer