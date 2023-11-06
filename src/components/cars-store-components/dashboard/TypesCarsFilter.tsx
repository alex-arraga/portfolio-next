"use client"

import { TypesCars as TypesCarsFilter } from "@/types/cars-store"
import { useState } from "react"

function TypesCarsFilter({ classCars, classCounter }: TypesCarsFilter) {
    const [isVisible, setIsVisible] = useState(false)

    return (

        <div key={Math.random()} className="flex gap-2 items-center">
            <input type="checkbox" className={'checked:accent-sky-600 w-4 h-4 rounded-sm'} />

            <h2 className="capitalize text-[14px] text-gray-400 py-1">
                {classCars} <span className="text-[12px] font-medium opacity-50">({classCounter[classCars]})</span>
            </h2>
        </div>

    )
}

export default TypesCarsFilter