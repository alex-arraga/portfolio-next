"use client"

import { SearchManufacturer } from ".."
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { searchBarProps } from "@/types/cars-store"

function SearchBar({ styleSearchbar }: searchBarProps) {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer === '' && model === '') {
            return alert('Please fill in the search bar')
        }

        updateSearchParams(
            model.toLocaleLowerCase(),
            manufacturer.toLocaleLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathName)
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
                                    width={90}
                                    height={90}
                                    className="object-contain bg-sky-100 p-1 rounded-full" />
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

                    <form className='relative' onSubmit={handleSearch}>
                        <div className="flex flex-1 w-full gap-2 justify-between items-center">
                            <SearchManufacturer
                                manufacturer={manufacturer}
                                setManufacturer={setManufacturer}
                                styleSearchbar='aside-filters'
                            />

                            <SearchButton otherClasses="aside-btn" />

                            {/* Search Model */}
                            <div className="flex relative items-center w-full">
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
                                    placeholder="Corolla"
                                    className="bg-gray-100 w-full h-8 rounded-full text-[12px] font-light px-12"
                                />
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
                                placeholder="Tiguan"
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