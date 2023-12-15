"use client"

import { updateSearchParams, deleteParam } from "@/app/utils"
import { useRouter } from "next/navigation"

function TransmissionFilter() {
    const router = useRouter()

    const clearSearch = () => {
        deleteParam({ param: 'transmission' })
    }

    const setTransmissionParam = (typeTransmission: string) => {
        const newTransmission = updateSearchParams({ params: [{ type: 'transmission', value: typeTransmission }] })
        router.push(newTransmission)
    }

    return (
        <div className='relative grid grid-cols-1 gap-4 md:grid-cols-3 w-full h-full text-xs md:text-sm'>
            <button
                onClick={() => clearSearch()}
                className='flex items-center hover:bg-gray-300 duration-200 justify-center bg-gray-200 w-full h-[24px] md:h-[32px] xl:h-[40px] rounded-md md:rounded-xl'>
                Any
            </button>
            <button
                onClick={() => setTransmissionParam('m')}
                className='flex items-center justify-center hover:bg-sky-300 duration-200 bg-sky-200 w-full h-[24px] md:h-[32px] xl:h-[40px] rounded-md md:rounded-xl'>
                Manual
            </button>
            <button
                onClick={() => setTransmissionParam('a')}
                className='flex items-center hover:bg-sky-300 duration-200 justify-center bg-sky-200 w-full h-[24px] md:h-[32px] xl:h-[40px] rounded-md md:rounded-xl'>
                Automatic
            </button>
        </div>
    )
}

export default TransmissionFilter