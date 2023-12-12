"use client"

import { PriceFilterProps } from '@/types/cars-store'
import { useEffect, useState } from 'react'
import { updateSearchParams } from '@/app/utils'
import { useRouter } from 'next/navigation'


export function PriceRangeFilter({ minAutonomy, maxAutonomy }: PriceFilterProps) {
    const [minPrice, setMinPrice] = useState(minAutonomy)
    const [maxPrice, setMaxPrice] = useState(maxAutonomy)
    const router = useRouter()

    useEffect(() => {
        const searchCityAutonomy = updateSearchParams('min_city_mpg', `${minPrice}`)
        router.push(searchCityAutonomy)
    }, [minPrice])

    useEffect(() => {
        const searchHwyAutonomy = updateSearchParams('max_hwy_mpg', `${maxPrice}`)
        router.push(searchHwyAutonomy)
    }, [maxPrice])


    const handleMinRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(parseInt(e.target.value))
    }

    const handleMaxRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(parseInt(e.target.value))
    }


    return (
        <>
            <div className="flex justify-center items-center gap-4 mt-5">
                <div className="flex flex-col w-full gap-2 items-start">
                    <label htmlFor="min-mpg" className="text-sky-400 uppercase font-medium text-xs">
                        Min / mpg
                    </label>
                    <div className="flex items-center w-full h-8 pl-2 rounded-md border-2 select-none border-gray-200 text-xs">
                        <p>{`$${minAutonomy}`}</p>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-2 items-start">
                    <label htmlFor="max-mpg" className="text-sky-400 uppercase font-medium text-xs">
                        Max / mpg
                    </label>
                    <div className="flex items-center w-full h-8 pl-2 rounded-md border-2 select-none border-gray-200 text-xs">
                        <p>{`$${maxAutonomy}`}</p>
                    </div>
                </div>
            </div>

            <div>
                <input
                    type="range"
                    min={minAutonomy}
                    max={maxAutonomy}
                    value={minPrice}
                    onChange={handleMinRange}
                    onInput={handleMinRange}
                    className="mt-5 w-full appearance-none bg-sky-300 h-1.5 rounded-full"
                />

                <input
                    type="range"
                    min={minAutonomy}
                    max={maxAutonomy}
                    value={maxPrice}
                    onChange={handleMaxRange}
                    onInput={handleMaxRange}
                    className="mt-5 w-full appearance-none bg-sky-300 h-1.5 rounded-full"
                />

                <div className='flex items-center gap-2 justify-start mt-5'>
                    <output id='output-price-mpg'
                        className={`flex items-center justify-center px-2 bg-sky-100 w-1/2 h-8 rounded-md text-xs text-gray-700`}>
                        Min USD: ${minPrice}
                    </output>
                    <output id='output-price-mpg'
                        className={`flex items-center justify-center px-2 bg-sky-100 w-1/2 h-8 rounded-md text-xs text-gray-700`}>
                        Max USD: ${maxPrice}
                    </output>
                </div>
            </div>

        </>
    )
}

export default PriceRangeFilter