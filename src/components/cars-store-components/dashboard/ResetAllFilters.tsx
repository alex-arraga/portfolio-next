"use client"

import { useCarsContext } from "@/context/CarsContext"

function ResetAllFilters() {
    const { resetAllFilters } = useCarsContext()

    return (
        <>
            <button
                onClick={() => resetAllFilters()}
                className="w-full bg-indigo-200 hover:bg-indigo-300 duration-200 rounded-md text-black h-10 text-[12px] md:text-[14px]">
                Reset all filters
            </button>
        </>
    )
}

export default ResetAllFilters