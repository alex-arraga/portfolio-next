"use client"

import { deleteAllParams } from "@/app/utils"

function ResetAllFilters() {
    return (
        <>
            <button
                onClick={() => deleteAllParams()}
                className="w-full bg-indigo-200 hover:bg-indigo-300 duration-200 rounded-md text-black h-10 text-xs md:text-sm">
                Reset all filters
            </button>
        </>
    )
}

export default ResetAllFilters