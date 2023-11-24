"use client"

import Image from "next/image"

import { diplomas } from "@/constants";
import { useRouter } from "next/navigation";

import { useHomeContext } from "@/context/HomeContext";

function Diplomas() {
    const router = useRouter()
    const { setImage } = useHomeContext()

    const handleImage = (diploma: string) => {
        const setParams = new URLSearchParams(window.location.href)
        setParams.set('image', diploma)
        const imageParam = setParams.get('image')

        setImage(imageParam)
        router.push(`/diplomas/show?image=${imageParam}`)
    }

    return (

        <div className='grid grid-cols-2 w-full h-full gap-6'>
            {diplomas.map((diploma) => (
                <div
                    onClick={() => handleImage(diploma.name)}
                    className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'
                    key={diploma.name}>

                    <Image
                        src={diploma.src}
                        alt={diploma.alt}
                        fill
                        className="object-contain w-[500px] h-[300px]"
                    />
                </div>
            ))}
        </div>
    )
}

export default Diplomas

