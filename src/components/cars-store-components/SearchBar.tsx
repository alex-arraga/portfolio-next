"use client"

import { SearchManufacturer } from ".."
import { useState } from "react"
import Image from "next/image"
import { searchBarProps } from "@/types/cars-store"
import { toast } from "sonner"
import { useCarsContext } from "@/context/CarsContext"

function SearchBar({ styleSearchbar }: searchBarProps) {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const { updateSearchParams, hasModel } = useCarsContext()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer === '' && model === '') {
            return toast.error('Error: You are required to fill in the field in the search bar in order to complete the search.')
        }

        updateSearchParams(
            model.toLocaleLowerCase(),
            manufacturer.toLocaleLowerCase())
    }


    const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
        return (
            <>
                {
                    otherClasses === 'aside-btn' ?
                        <div className="relative">
                            <button type="submit" className={`flex items-center justify-center w-full h-full ${otherClasses}`}>
                                <Image
                                    src='/magnifying-glass.svg'
                                    alt="magnifiying glass"
                                    width={40}
                                    height={40}
                                    className="object-contain bg-sky-100 rounded-full" />
                            </button>
                        </div>

                        :

                        <div className="relative">
                            <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
                                <Image
                                    src='/magnifying-glass.svg'
                                    alt="magnifiying glass"
                                    width={40}
                                    height={40}
                                    className="object-contain" />
                            </button>
                        </div>
                }
            </>
        )
    }

    return (
        <>
            {
                styleSearchbar === 'aside-filters' ?

                    <form className='relative w-full h-full' onSubmit={handleSearch}>
                        <div className="flex flex-col md:flex-1 w-full gap-4 justify-between items-center">
                            <SearchManufacturer
                                manufacturer={manufacturer}
                                setManufacturer={setManufacturer}
                                styleSearchbar='aside-filters'
                            />


                            {/* Search Model */}
                            <div className="flex relative flex-1 items-center w-full">
                                <Image src={'/model-icon.png'}
                                    alt="magnifyng glass"
                                    width={20}
                                    height={20}
                                    className="absolute ml-4 opacity-50"
                                />
                                <input type="text"
                                    name="model"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    placeholder={hasModel ? 'Last search: ' + hasModel : 'Corolla'}
                                    className="bg-gray-100 w-full h-8 rounded-full capitalize text-[12px] font-light px-12"
                                />
                            </div>

                            <div className="flex justify-start w-full items-center mt-4 h-10">
                                <div className="flex justify-between items-center w-1/2 px-4 border-2 rounded-full text-[12px] text-gray-400 border-indigo-200 border-opacity-50 h-full">
                                    <p>Search!</p>
                                    <SearchButton otherClasses="aside-btn w-[26px] p-1 rounded-full bg-sky-200 h-[26px]" />
                                </div>
                            </div>
                        </div>

                    </form>

                    :

                    <form className='searchbar' onSubmit={handleSearch}>
                        <div className="searchbar__item">
                            <SearchManufacturer
                                manufacturer={manufacturer}
                                setManufacturer={setManufacturer}
                            />
                            <SearchButton otherClasses="sm:hidden" />
                        </div>

                        {/* Search Model */}
                        <div className="searchbar__item">
                            <Image
                                src='/model-icon.png'
                                alt="car model"
                                width={25}
                                height={25}
                                className="absolute ml-4"
                            />
                            <input type="text"
                                name="model"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                placeholder={hasModel ? 'Last search: ' + hasModel : 'Tiguan'}
                                className="searchbar__input"
                            />
                            <SearchButton otherClasses="sm:hidden" />
                        </div>
                        <SearchButton otherClasses="max-sm:hidden" />
                    </form>
            }
        </>
    )
}

export default SearchBar