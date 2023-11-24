"use client"

import Image from "next/image"
import { baseClientURL } from "@/libs/baseURL";
import { useHomeContext } from "@/context/HomeContext";
import { useEffect } from "react";

function Show() {
    const { image } = useHomeContext()
    const diploma = `/${image}.jpg`;

    return (
        <main className='flex justify-center bg-gradient-to-b from-blue-950 to-black items-center w-screen h-screen'>
            <Image
                onClick={() => window.location.href = `${baseClientURL}/diplomas`}
                src={'/arrow-switch.svg'}
                alt="volver"
                width={50}
                height={50}
                className="absolute left-5 top-5 hover:scale-125 duration-300 cursor-pointer"
            />

            <div className='relative flex w-[70vw] h-[90vh] rounded-2xl bg-teal-100 bg-opacity-10'>
                <Image
                    src={diploma}
                    alt="diploma"
                    fill
                    className="object-contain max-w-[90vw] max-h-[90vh]"
                />
            </div>
        </main>
    )
}

export default Show

