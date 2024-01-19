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

        setImage(imageParam ?? '')
        router.push(`/diplomas/show?image=${imageParam}`)
    }

    return (

        <div className='grid grid-cols-1 xl:grid-cols-2 w-full h-full gap-4 xl:gap-6'>
            {diplomas.map((diploma) => (
                <div
                    onClick={() => handleImage(diploma.name)}
                    className='relative rounded-2xl border-2 h-[35vh] sm:h-[40vh] md:h-[45vh] xl:h-[55vh] w-full hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'
                    key={diploma.name}>

                    <Image
                        src={diploma.src}
                        alt={diploma.alt}
                        fill
                        sizes="1000px"
                        priority
                        className="object-contain p-4"
                    />
                </div>
            ))}
        </div>
    )
}

export default Diplomas

