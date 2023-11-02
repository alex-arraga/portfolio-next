"use client"

import { TypesCars } from "@/types/cars-store"

function TypesCars({ classCars, classCounter }: TypesCars) {
    return (
        <div key={Math.random()} className="flex gap-2 items-center">
            <input type="checkbox" className={'checked:accent-sky-600 w-4 h-4 rounded-sm'} />

            <h2 className="capitalize text-gray-500 font-light py-1">
                {classCars} <span className="text-sm font-medium opacity-50">({classCounter[classCars]})</span>
            </h2>
        </div>
    )
}

export default TypesCars