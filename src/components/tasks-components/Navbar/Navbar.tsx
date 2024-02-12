"use client"

import { UserButton } from "@clerk/nextjs"
import { privateRoutes } from "./index"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
    const [path, setPath] = useState('')

    useEffect(() => {
        let currentPath = window.location.pathname
        setPath(currentPath)
    }, [])

    return (
        <nav className="flex justify-between items-center py-5">
            <Link href='/projects/tasks' className="cursor-pointer">
                <h2 className="px-5 hidden md:block text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-400">NEXT Tasks</h2>
            </Link>
            <ul className="flex w-full md:max-w-xl h-full justify-center">
                <li className="flex gap-4">
                    {privateRoutes.map(item =>
                        <Link onClick={() => setPath(item.path)}
                            className={`flex items-center px-3 mr-4 ${path === item.path ? 'bg-sky-600 duration-200 rounded-full' : 'bg-gray-600 bg-opacity-40 rounded-full hover:bg-opacity-80 hover:scale-110 duration-200'}`}
                            href={item.path}
                            key={item.path}
                        >
                            <div className="flex items-center gap-2" key={item.path}>
                                {item.icon}
                                <p className="hidden sm:block">{item.name}</p>
                            </div>
                        </Link>
                    )}
                    <div className="p-1 bg-gray-400 cursor-pointer rounded-full hover:bg-sky-200 active:bg-indigo-200 duration-200">
                        <UserButton afterSignOutUrl="/sign-in" />
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar