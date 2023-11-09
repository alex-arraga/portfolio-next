"use client"

import { privateRoutes } from "./index"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
    const [path, setPath] = useState('')

    useEffect(() => {
        const currentPath = window.location.pathname
        setPath(currentPath)
    }, [])

    return (
        <nav className="flex justify-between items-center py-5">
            <Link href={'/projects/tasks'} className="cursor-pointer">
                <h2 className="px-5 text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-400">NEXT Tasks</h2>
            </Link>
            <ul>
                <li className="flex">
                    {privateRoutes.map(item =>
                        <Link onClick={() => setPath(item.path)}
                            className={`mr-5 md:mr-0 px-3 py-1 ${path === item.path ? 'bg-sky-600 duration-200 rounded-full' : ''}`} href={item.path} key={item.path}>
                            <div className="flex items-center gap-1">
                                {item.icon}
                                <p className="hidden sm:block">{item.name}</p>
                            </div>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar