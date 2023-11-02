"use client"

import { PriceFilterProps } from '@/types/cars-store'
import { useEffect, useState } from 'react'


export function PriceRangeFilter({ minAutonomy, maxAutonomy }: PriceFilterProps) {
    const [minPrice, setMinPrice] = useState(0)

    const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(parseInt(e.target.value))
    }

    return (
        <div className="relative w-full mt-10">
            <h2 className="text-gray-400 uppercase font-medium text-[12px]">Price</h2>

            <div className="flex justify-center items-center gap-4 mt-5">
                <div className="flex flex-col w-full gap-2 items-start">
                    <label htmlFor="min-mpg" className="text-sky-400 uppercase font-medium text-[12px]">
                        Min / mpg
                    </label>
                    <div className="flex items-center w-full h-8 pl-2 rounded-md border-2 border-gray-200 text-sm">
                        <p>{`$${minAutonomy}`}</p>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-2 items-start">
                    <label htmlFor="max-mpg" className="text-sky-400 uppercase font-medium text-[12px]">
                        Max / mpg
                    </label>
                    <div className="flex items-center w-full h-8 pl-2 rounded-md border-2 border-gray-200 text-sm">
                        <p>{`$${maxAutonomy}`}</p>
                    </div>
                </div>
            </div>

            <div className=''>
                <input type="range"
                    min={minAutonomy}
                    max={maxAutonomy}
                    value={minPrice}
                    onChange={handleRange}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setMinPrice(parseInt(e.target.value))}
                    className="mt-5 w-full appearance-none bg-sky-300 h-1.5 rounded-full"
                />

                <div className='flex items-center justify-start mt-5'>
                    <output id='output-price-mpg'
                        className={`flex items-center px-2 bg-sky-200 w-1/2 h-8 rounded-md text-sm font-medium text-gray-700`}>
                        USD$ {minPrice}
                    </output>
                </div>
            </div>

        </div>
    )
}

export default PriceRangeFilter