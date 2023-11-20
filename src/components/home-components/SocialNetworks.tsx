"use client"

import Image from "next/image"

function SocialNetworks() {
    return (
        <>
            <div className="box-social_networks__github hover:bg-gray-700 cursor-pointer duration-300 border-2 border-white border-opacity-20 flex items-center rounded-xl w-full h-full max-h-[160px]">
                <div className="relative w-full h-full max-h-[calc(60%)]">
                    <Image
                        src={'/github-white.svg'}
                        alt="github"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="box-social_networks__linkedin hover:bg-blue-700 cursor-pointer duration-300 border-2 border-sky-500 border-opacity-20  flex items-center rounded-xl w-full h-full max-h-[160px]">
                <div className="relative w-full h-full max-h-[calc(60%)]">
                    <Image
                        src={'/linkedin.svg'}
                        alt="linkedin"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="box-social_networks__email hover:bg-red-700 cursor-pointer duration-300 border-2 border-red-500 border-opacity-20  flex items-center rounded-xl w-full h-full max-h-[160px]">
                <div className="relative w-full h-full max-h-[calc(60%)]">
                    <Image
                        src={'/email.svg'}
                        alt="email"
                        fill
                        className="object-contain max-h-[calc(100%)]"
                    />
                </div>
            </div>
            <div className="box-social_networks__wsp hover:bg-emerald-700 cursor-pointer duration-300 border-2 border-emerald-500 border-opacity-20 flex items-center rounded-xl w-full h-full max-h-[160px]">
                <div className="relative w-full h-full max-h-[calc(60%)]">
                    <Image
                        src={'/wsp.svg'}
                        alt="whatsapp"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default SocialNetworks