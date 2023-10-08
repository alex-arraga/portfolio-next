import { privateRoutes } from "./index"
import Link from "next/link"

export function Navbar() {
    return (
        <nav className="flex justify-between items-center py-5">
            <Link href={'/tasks'} className="cursor-pointer">
                <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-400">NEXT Tasks</h2>
            </Link>
            <ul>
                <li className="flex">
                    {privateRoutes.map(item =>
                        <Link href={item.path}>
                            <div className="flex items-center gap-1 px-3">
                                {item.icon}
                                <p>{item.name}</p>
                            </div>
                        </Link>

                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar