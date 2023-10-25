import Image from "next/image"
import Link from "next/link"

function Navbar() {
    return (
        <header className="w-full z-10 absolute">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4">

                <Link href={"/"} className="flex justify-center items-center">

                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />

                </Link>

            </nav>
        </header>
    )
}

export default Navbar