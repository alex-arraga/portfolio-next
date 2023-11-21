"use client"

import { useRouter } from "next/navigation"
import { PillsProps } from "@/types/home"
import Image from "next/image"

function Pills({ className,
    urlImage,
    altImage,
    styleImage,
    title,
    text,
    urlClick,
    type,
    altIcon,
    styleIcon,
    urlIcon,
    relevantDescription }: PillsProps) {
    const router = useRouter()

    return (
        <>
            {type === 'projects' ?

                <div onClick={() => router.push(`${urlClick}`)} className={`relative flex justify-between items-center w-full h-full p-8 border-2 border-gray-300 bg-gray-900 rounded-2xl cursor-pointer hover:brightness-125 duration-300 ${className}`}>

                    <div className="flex flex-col w-3/4 gap-6">
                        <div className="flex items-center justify-start gap-4 w-full">
                            <Image
                                src={`${urlIcon}`}
                                alt={`${altIcon}`}
                                height={50}
                                width={50}
                                className={`${styleIcon}`}
                            />
                            <h3 className="text-3xl font-medium text-white">{title}</h3>
                        </div>

                        <p className="text-gray-200 mb-4">{text}</p>
                        <p className="text-white font-semibold">{relevantDescription}</p>
                    </div>
                    <div className="absolute right-0 w-1/4 h-full bg-emerald-200 rounded-2xl">
                        <Image
                            src={`${urlImage}`}
                            alt={`${altImage}`}
                            fill
                            className={`object-cover rounded-r-2xl ${styleImage}`}
                        />
                    </div>
                </div>

                :

                <div onClick={() => router.push(`${urlClick}`)}
                    className={`relative flex justify-between items-center w-full h-full p-8 rounded-2xl ${className}`}>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
                        <p className="text-gray-200">{text}</p>
                    </div>
                    <Image
                        src={`${urlImage}`}
                        alt={`${altImage}`}
                        width={100}
                        height={100}
                        className={`object-contain ${styleImage}`}
                    />
                </div>
            }
        </>
    )
}

export default Pills