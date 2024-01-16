"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { updateSearchParams } from "@/app/utils"
import { SearchManufacturer } from ".."
import { useState } from "react"
import { searchBarProps } from "@/types/cars-store"
import { toast } from "sonner"
import { useCarsContext } from "@/context/CarsContext"

function SearchBar({ styleSearchbar }: searchBarProps) {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const { hasModel } = useCarsContext()
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer !== '' && model === '') {
            const newManufacturer = updateSearchParams({ params: [{ type: 'manufacturer', value: manufacturer.toLocaleLowerCase() }] })
            router.push(newManufacturer)
        }
        else if (manufacturer && model !== '') {
            const newManufacturerAndModel = updateSearchParams({
                params: [
                    { type: 'manufacturer', value: manufacturer.toLocaleLowerCase() },
                    { type: 'model', value: model.toLocaleLowerCase() }
                ]
            });

            router.push(newManufacturerAndModel)
        } else {
            return toast.error('Error: You are required to fill in the field in the search bar in order to complete the search.')
        }
    }


    const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
        return (
            <>
                {
                    // ES
                    otherClasses === 'aside-btn' ?

                        <div className="relative w-full h-full">
                            <div className="bg-transparent border-2 border-sky-100 rounded-full w-1/2 items-center mt-4 h-10">
                                <button className={`flex items-center p-4 rounded-full justify-between w-full h-full ${otherClasses}`}>
                                    <p className="text-txt_10 sm:text-xs md:text-sm text-black text-opacity-50">Search!</p>
                                    <Image
                                        src='/magnifying-glass.svg'
                                        alt="magnifiying glass"
                                        width={30}
                                        height={30}
                                        className="object-contain bg-sky-200 p-0.5 rounded-full" />
                                </button>
                            </div>
                        </div>


                        : otherClasses === 'home-bar' ?
                            <div className="relative w-full sm:hidden">
                                <div className="w-[calc(60%)] px-4 py-2 rounded-full bg-blue-100">
                                    <button className={`flex justify-between items-center right-2 w-full h-full ${otherClasses}`}>
                                        <p className="font-medium text-sm text-black-100 text-opacity-70">Search!</p>
                                        <Image
                                            src='/magnifying-glass.svg'
                                            alt="magnifiying glass"
                                            width={30}
                                            height={30}
                                            className="object-contain rounded-full" />
                                    </button>
                                </div>
                            </div>

                            :

                            <div className="relative">
                                <button type="submit" className={`m-1 w-auto h-fit z-10 ${otherClasses}`}>
                                    <Image
                                        src='/magnifying-glass.svg'
                                        alt="magnifiying glass"
                                        width={40}
                                        height={40}
                                        className="object-contain h-10 w-10" />
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
                                    className="bg-gray-100 w-full h-8 rounded-full capitalize text-xs font-light px-12"
                                />
                            </div>

                            <SearchButton otherClasses="aside-btn" />
                        </div>
                    </form>

                    :

                    <form className='searchbar' onSubmit={handleSearch}>
                        <div className="searchbar__item">
                            <SearchManufacturer
                                manufacturer={manufacturer}
                                setManufacturer={setManufacturer}
                            />
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
                        </div>
                        <SearchButton otherClasses="home-bar" />
                        <SearchButton otherClasses="hidden sm:block" />
                    </form>
            }
        </>
    )
}

export default SearchBar