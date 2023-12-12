"use client"

import Image from "next/image"
import Link from "next/link"

function SocialNetworks() {
    return (
        <>
            <Link href={'https://github.com/alex-arraga'}
                target="_blank"
                className="bg-gradient-to-b from-slate-900 to-transparent hover:brightness-150 cursor-pointer duration-300 flex items-center rounded-xl w-full h-full max-h-[25%]">
                <div className="relative w-full h-full max-h-[calc(40%)] md:max-h-[calc(50%)] xl:max-h-[calc(60%)]">
                    <Image
                        src={'/github-white.svg'}
                        alt="github"
                        fill
                        className="object-contain"
                    />
                </div>
            </Link>

            <Link href={'https://www.linkedin.com/in/alexarraga/'}
                target="_blank"
                className="bg-gradient-to-b from-blue-900 to-transparent hover:brightness-150 cursor-pointer duration-300 flex items-center rounded-xl w-full h-full max-h-[25%]">
                <div className="relative w-full h-full max-h-[calc(40%)] md:max-h-[calc(50%)] xl:max-h-[calc(60%)]">
                    <Image
                        src={'/linkedin.svg'}
                        alt="linkedin"
                        fill
                        className="object-contain"
                    />
                </div>
            </Link>

            <Link href={'mailto:arraga.alex@gmail.com'}
                target="_blank"
                className="bg-gradient-to-b from-red-900 to-transparent hover:brightness-150 cursor-pointer duration-300 flex items-center rounded-xl w-full h-full max-h-[25%]">
                <div className="relative w-full h-full max-h-[calc(40%)] md:max-h-[calc(50%)] xl:max-h-[calc(60%)]">
                    <Image
                        src={'/email.svg'}
                        alt="email"
                        fill
                        className="object-contain"
                    />
                </div>
            </Link>

            <Link href={'https://api.whatsapp.com/send/?phone=543482314388'}
                target="_blank"
                className="bg-gradient-to-b from-emerald-900 to-transparent hover:brightness-150 cursor-pointer duration-300 flex items-center rounded-xl w-full h-full max-h-[25%]">
                <div className="relative w-full h-full max-h-[calc(40%)] md:max-h-[calc(50%)] xl:max-h-[calc(60%)]">
                    <Image
                        src={'/wsp.svg'}
                        alt="whatsapp"
                        fill
                        className="object-contain"
                    />
                </div>
            </Link>
        </>
    )
}

export default SocialNetworks