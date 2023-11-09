"use client"

import { HamburgerMenuBarProps } from '@/types/cars-store';
import { HiMenuAlt1 } from 'react-icons/hi';


function HamburgerMenuBar({ handleClick, searchParams }: HamburgerMenuBarProps) {
    return (
        <div className="relative flex justify-start items-center mx-4 sm:mx-6 md:mx-10 my-6 h-0 w-full">
            <HiMenuAlt1
                onClick={() => handleClick()}
                className={`h-6 w-6 md:h-8 md:w-8 cursor-pointer`}
            />

            <div className="relative justify-start items-center w-full hidden sm:block text-[12px] sm:text-[14px] md:text-[14px]">
                <ul className="flex flex-1 justify-center gap-x-[calc(2%)] w-full rounded-full">
                    <li className="px-2 border-b-2 border-sky-100">
                        Year: <span className="font-semibold">
                            {
                                !searchParams.year ? '2015' : searchParams.year
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
                                !searchParams.manufacturer ? 'All Brands' : searchParams.manufacturer
                            }
                        </span>
                    </li>
                    <li className="px-2 border-b-2 border-sky-100">
                        Model: <span className="font-semibold capitalize">
                            {
                                !searchParams.model ? 'All Models' : searchParams.model
                            }
                        </span>
                    </li>
                    <li className="px-2 border-b-2 border-sky-100">
                        Transmission: <span className="font-semibold capitalize">
                            {
                                !searchParams.transmission ? 'M/A' : searchParams.transmission === 'm' ? 'Manual' : 'Automatic'
                            }
                        </span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default HamburgerMenuBar