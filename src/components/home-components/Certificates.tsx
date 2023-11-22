"use client"

import { baseClientURL } from "@/libs/baseURL"
import { useRouter } from "next/navigation"
import Image from "next/image"

function Certificates() {
    const router = useRouter()
    return (
        <>
            <Image
                onClick={() => router.push(`${baseClientURL}/diplomas`)}
                src={'/certificate.gif'}
                alt="certicate"
                fill
                className="object-cover rounded-2xl cursor-pointer hover:brightness-125 duration-200"
            />
        </>
    )
}

export default Certificates