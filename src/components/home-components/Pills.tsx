"use client"

import { useRouter } from "next/navigation"
import { PillsProps } from "@/types/home"
import Image from "next/image"

function Pills({ className, urlImage, altImage, styleImage, title, text, urlClick }: PillsProps) {
    const router = useRouter()

    return (
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
    )
}

export default Pills