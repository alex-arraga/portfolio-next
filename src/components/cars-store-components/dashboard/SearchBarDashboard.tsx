"use client"

import Image from "next/image"

function SearchBarDashboard() {
    return (
        <>
            <Image src={'/search.svg'}
                alt="magnifyng glass"
                width={20}
                height={20}
                className="absolute left-4 opacity-30"
            />
            <input type="text"
                placeholder="Search by brand"
                className="bg-gray-100 w-full h-8 rounded-full text-[12px] font-light px-12" />
        </>
    )
}

export default SearchBarDashboard