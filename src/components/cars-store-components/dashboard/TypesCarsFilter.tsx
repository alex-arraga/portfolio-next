"use client"

import { TypesCars as TypesCarsFilter } from "@/types/cars-store"
import { useState } from "react";
import { useCarsContext } from "@/context/CarsContext";

function TypesCarsFilter({ classCars, classCounter }: TypesCarsFilter) {
    return (
        <div key={Math.random()} className="flex gap-2 items-center">
            <input
                type="checkbox"
                className={'checked:accent-sky-600 w-4 h-4 rounded-sm'}
                onClick={() => console.log('lala')}
            />

            <h2 className="capitalize text-sm text-gray-400 py-1">
                {classCars} <span className="text-xs font-medium opacity-50">({classCounter[classCars]})</span>
            </h2>
        </div>

    )
}

export default TypesCarsFilter