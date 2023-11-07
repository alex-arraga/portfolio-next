"use client"

import { updateSearchParams } from "@/app/utils"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function TransmissionFilter() {
    const [transmission, setTransmission] = useState('')
    const router = useRouter()
    const searchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        const newTransmission = updateSearchParams('transmission', transmission)
        router.push(newTransmission)
    }, [transmission])

    useEffect(() => {
        if (transmission) {
            searchParams.set('transmission', transmission)
        } else {
            searchParams.delete('transmission')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathName)
    }, [])

    return (
        <div className='relative flex justify-center items-center gap-2 w-full h-10'>
            <button
                onClick={() => searchParams.delete('transmission')}
                className='flex items-center hover:bg-gray-300 duration-200 justify-center bg-gray-200 w-full h-full rounded-xl'>
                Any
            </button>
            <button
                onClick={() => setTransmission('m')}
                className='flex items-center justify-center hover:bg-sky-300 duration-200 bg-sky-200 w-full h-full rounded-xl'>
                Manual
            </button>
            <button
                onClick={() => setTransmission('a')}
                className='flex items-center hover:bg-sky-300 duration-200 justify-center bg-sky-200 w-full h-full rounded-xl'>
                Automatic
            </button>
        </div>
    )
}

export default TransmissionFilter