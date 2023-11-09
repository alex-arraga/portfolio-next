"use client"

import Image from "next/image"
import Link from "next/link"
import { NavBarProps } from "@/types/cars-store"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

function Navbar({ otherClasses }: NavBarProps) {
    const [path, setPath] = useState('')

    const pathDashboard = '/projects/cars-store/dashboard';
    const pathRents = '/projects/cars-store/rents';
    const pathProfile = '/projects/cars-store/profile';

    useEffect(() => {
        const currentPath = window.location.pathname
        setPath(currentPath)
    }, [])

    return (
        <header className={`w-full z-10 ${otherClasses}`}>
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center pl-4 h-14 sm:h-16">

                <Link href={"/projects/cars-store"} className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="app logo"
                        width={116}
                        height={18}
                        className="object-contain w-[90px] h-[16px] md:w-[116px] md:h-[18px]"
                    />

                </Link>

                <div className="relative flex items-center justify-center pr-4 gap-3 md:gap-6">

                    <Link href={pathRents}
                        onClick={() => setPath(pathRents)}
                        className={`${path === pathRents ? 'bg-indigo-200 p-2 rounded-full' : 'bg-gray-100 p-1.5 md:bg-white rounded-full hover:bg-sky-200 duration-300'}`}>
                        <Image src='/car-icon.svg'
                            alt="dashboard"
                            height={25}
                            width={25}
                            className="w-[20px] h-[20px] md:h-[25px] md:w-[25px]"
                        />
                    </Link>

                    <Link href={pathDashboard}
                        onClick={() => setPath(pathDashboard)}
                        className={`${path === pathDashboard ? 'bg-indigo-200 p-2 rounded-full' : 'bg-gray-100 p-1.5 md:bg-white rounded-full hover:bg-sky-200 duration-300'}`}>
                        <Image src='/shopping-cart.svg'
                            alt="shopping cart"
                            height={25}
                            width={25}
                            className="w-[20px] h-[20px] md:h-[25px] md:w-[25px]"
                        />
                    </Link>

                    <Link href={pathProfile}
                        onClick={() => setPath(pathProfile)}
                        className={`${path === pathProfile ? 'bg-indigo-200 p-2 rounded-full' : 'bg-gray-100 p-1.5 md:bg-white rounded-full hover:bg-sky-200 duration-300'}`}>
                        <Image src='/user.svg'
                            alt="profile icon"
                            height={25}
                            width={25}
                            className="w-[20px] h-[20px] md:h-[25px] md:w-[25px]"
                        />
                    </Link>

                </div>

            </nav>
        </header>
    )
}

export default Navbar