"use client"

import Image from "next/image"
import { myHost } from "@/libs/baseURL";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Show() {
    const router = useRouter()
    const [diploma, setDiploma] = useState<null | string>(null)
    const [loadingImage, setLoadingImage] = useState(true)

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const hasDiploma = searchParams.get('diploma')

        if (hasDiploma !== '' || hasDiploma !== null) {
            setDiploma(hasDiploma)
            setLoadingImage(false)
        } 
    }, [diploma])

    return (
        <main className='bg-gradient-to-b from-blue-950 to-black'>
            <section className="flex justify-center items-center w-screen h-screen bg-[url('/bg-main-blur-30.png')]">
                <Image
                    onClick={() => router.push(`${myHost}/diplomas`)}
                    src='/arrow-switch.svg'
                    alt="back"
                    width={50}
                    height={50}
                    priority
                    className="absolute left-5 w-[26px] h-[26px] md:w-[36px] md:h-[36px] xl:w-[50px] xl:h-[50px] top-5 hover:scale-125 duration-300 cursor-pointer"
                />

                <div className='relative flex w-[90vw] h-[60vh] md:w-[80vw] md:h-[80vh] xl:w-[70vw] xl:h-[90vh] select-none cursor-default rounded-2xl bg-teal-100 bg-opacity-10'>
                    {
                        loadingImage ?
                            <div className="flex justify-center items-center w-full h-full bg-transparent gap-2 md:gap-4 rounded-xl">
                                <h2 className="text-sm md:text-xl font-medium">Cargando imagen...</h2>
                                <div className="bg-gradient-to-r from-indigo-400 to-pink-400 animate-spin w-3 h-3 md:w-5 md:h-5" />
                            </div>

                            :

                            <Image
                                src={`/${diploma}.jpg`}
                                alt="diploma"
                                fill
                                sizes="1500px"
                                priority
                                className="object-contain max-w-[90vw] max-h-[90vh]"
                            />
                    }
                </div>
            </section>
        </main>
    )
}

export default Show

