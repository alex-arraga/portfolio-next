import Image from "next/image"
import Link from "next/link"

function Navbar() {
    return (
        <header className="w-full z-10 absolute ">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center pl-4 py-4 md:pl-8 md:py-8">

                <Link href={"/"} className="flex justify-center items-center">

                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />

                </Link>

                <div className="relative flex items-center justify-center pr-4 gap-3 md:gap-6">
                    <Link href={''} className="bg-gray-100 p-1.5 md:bg-white rounded-full hover:bg-sky-200 duration-300">
                        <Image src='/shopping-cart.svg'
                            alt="shopping cart"
                            height={25}
                            width={25}
                        />
                    </Link>

                    <Link href={''} className=" bg-gray-100 p-1.5 md:bg-white rounded-full hover:bg-sky-200 duration-300">
                        <Image src='/user.svg'
                            alt="profile icon"
                            height={25}
                            width={25}
                        />
                    </Link>
                </div>

            </nav>
        </header>
    )
}

export default Navbar