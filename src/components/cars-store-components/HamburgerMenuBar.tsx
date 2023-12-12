"use client"

import { HamburgerMenuBarProps } from '@/types/cars-store';
import { HiMenuAlt1 } from 'react-icons/hi';


function HamburgerMenuBar({ handleClick, searchParams, styleMenu }: HamburgerMenuBarProps) {
    return (
        <>
            {
                styleMenu === 'dashboard' ?

                    <div className="relative flex justify-start items-center mx-4 sm:mx-6 md:mx-10 my-6 h-0 w-full">
                        <HiMenuAlt1
                            onClick={() => handleClick()}
                            className={`h-6 w-6 md:h-8 md:w-8 cursor-pointer`}
                        />

                        <div className="relative justify-start items-center w-full hidden sm:block text-xs sm:text-sm md:text-sm">
                            <ul className="flex flex-1 justify-center gap-x-[calc(2%)] w-full rounded-full">
                                <li className="px-2 border-b-2 border-sky-100">
                                    Year: <span className="font-semibold">
                                        {
                                            searchParams?.year ? searchParams?.year : '2015'
                                        }
                                    </span>
                                </li>

                                {/* <li className="px-2 border-b-2 border-sky-100">
                                    Type: <span className="font-semibold">
                                        {
                                            searchParams.class
                                        }
                                    </span>
                                </li> */}

                                <li className="px-2 border-b-2 border-sky-100">
                                    Make by: <span className="font-semibold capitalize">
                                        {
                                            searchParams?.manufacturer ? searchParams?.manufacturer : 'All Brands'
                                        }
                                    </span>
                                </li>
                                <li className="px-2 border-b-2 border-sky-100">
                                    Model: <span className="font-semibold capitalize">
                                        {
                                            searchParams?.model ? searchParams?.model : 'All Models'
                                        }
                                    </span>
                                </li>
                                <li className="px-2 border-b-2 border-sky-100">
                                    Transmission: <span className="font-semibold capitalize">
                                        {
                                            searchParams?.transmission === 'm' ? 'Manual'
                                                : searchParams?.transmission === 'a' ? 'Automatic'
                                                    : 'M/A'
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    :

                    <div className="relative flex justify-start items-center mx-4 sm:mx-6 md:mx-10 my-6 h-0 w-full">
                        <HiMenuAlt1
                            onClick={() => handleClick()}
                            className={`h-6 w-6 md:h-8 md:w-8 cursor-pointer`}
                        />
                    </div>
            }
        </>
    )
}

export default HamburgerMenuBar