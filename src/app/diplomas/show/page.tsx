"use client"

import Image from "next/image"
import { myHost } from "@/libs/baseURL";
import { useHomeContext } from "@/context/HomeContext";

function Show() {
    const { image } = useHomeContext()
    const diploma = `/${image}.jpg`;

    return (
        <main className='bg-gradient-to-b from-blue-950 to-black'>
            <section className="flex justify-center items-center w-screen h-screen bg-[url('/bg-main-blur-30.png')]">
                <Image
                    onClick={() => window.location.href = `${myHost}/diplomas`}
                    src={'/arrow-switch.svg'}
                    alt="back"
                    width={50}
                    height={50}
                    priority
                    className="absolute left-5 w-[26px] h-[26px] md:w-[36px] md:h-[36px] xl:w-[50px] xl:h-[50px] top-5 hover:scale-125 duration-300 cursor-pointer"
                />

                <div className='relative flex w-[90vw] h-[60vh] md:w-[80vw] md:h-[80vh] xl:w-[70vw] xl:h-[90vh] select-none cursor-default rounded-2xl bg-teal-100 bg-opacity-10'>
                    <Image
                        src={diploma}
                        alt="diploma"
                        fill
                        sizes="1500px"
                        priority
                        className="object-contain max-w-[90vw] max-h-[90vh]"
                    />
                </div>
            </section>
        </main>
    )
}

export default Show

