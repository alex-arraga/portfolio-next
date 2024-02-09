import Image from "next/image"
import { footerLinks } from "@/constants"
import Link from "next/link"
import { FooterProps } from "@/types/cars-store-types"

function Footer({ otherClasses }: FooterProps) {
    return (
        <div className="flex justify-center w-full">
            <footer className={`padding-x max-w-[2000px] w-full flex flex-col justify-center text-black-100 border-t border-b-gray-100 ${otherClasses}`} >
                <section className='flex max-md:flex-col flex-wrap justify-between gap-5 p-4 sm:p-6 md:p-8 xl:p-10'>
                    <div className='hidden md:flex flex-col justify-start items-start gap-6 h-fit'>
                        <Image src="/logo.svg"
                            alt="logo"
                            width={118}
                            height={18}
                            className="object-contain"
                        />
                        <p className="font-normal text-xs sm:text-sm md:text-base text-gray-500">
                            CarHub 2023 <br />
                            All rights reserved &copy;
                        </p>
                    </div>

                    <div className="flex flex-1 w-full justify-between md:justify-end flex-wrap p-4 sm:p-6 gap-10 sm:gap-14 md:gap-16">
                        {
                            footerLinks.map((link) => (
                                <div key={link.title} className="flex flex-col gap-4 md:gap-6 w-full max-w-[120px] md:max-w-[190px] xl:max-w-[250px]">
                                    <h3 className="text-xs sm:text-sm md:text-base font-bold">{link.title}</h3>
                                    {link.links.map((item) => (
                                        <Link href={item.url}
                                            as=''
                                            key={item.title}
                                            className="text-xs sm:text-sm md:text-base text-gray-500">{item.title}
                                        </Link>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </section>


                <section className="flex flex-col sm:flex-row justify-between items-center flex-wrap border-t border-gray-100 p-4 sm:p-6">
                    <p className="text-xs sm:text-sm md:text-base">@2023 CarHub. All rights reserved</p>

                    <div className="flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                        <Link href={""} as='' className="text-xs sm:text-sm md:text-base text-gray-500">
                            Privacy Policy
                        </Link>
                        <Link href={""} as='' className="text-xs sm:text-sm md:text-base text-gray-500">
                            Terms of use
                        </Link>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer