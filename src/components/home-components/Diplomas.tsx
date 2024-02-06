"use client"

import Image from "next/image"
import Link from "next/link";
import { diplomas } from "@/constants";


function Diplomas() {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 w-full h-full gap-4 xl:gap-6'>
            {diplomas.map((diploma) => (
                <Link href={`/diplomas/show?diploma=${diploma.name}`}
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
                </Link>
            ))}
        </div>
    )
}

export default Diplomas

