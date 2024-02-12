"use client"

import Image from "next/image"
import { useCarsContext } from '@/context/CarsContext'

function NavSelect() {
    const context = useCarsContext()

    if (context) {
        const { sectionLikes, setSectionLikes } = context;

        return (
            <div className={`flex justify-center items-center bg-white border-2 border-gray-200 gap-2 sm:gap-4 md:gap-6 xl:gap-8 h-16`}>

                {/* Btn rent */}
                <div className="flex justify-center items-center w-full max-w-[150px] sm:max-w-[150px] md:max-w-[200px]">
                    <button
                        onClick={() => setSectionLikes(false)}
                        className={`flex justify-center gap-2 items-center text-xs sm:text-sm md:text-base h-8 w-full rounded-md ${sectionLikes === true ? 'bg-gray-200 text-gray-400' : 'bg-primary-blue text-white'}`}>
                        My rented cars

                        <Image
                            src='/coin.svg'
                            alt="like"
                            width={16}
                            height={16}
                            className={`md:h-[20px] ${sectionLikes === false ? 'opacity-100' : 'hidden'}`}
                        />
                    </button>
                </div>

                {/* Btn likes */}
                <div className='flex justify-center items-center w-full max-w-[150px] sm:max-w-[150px] md:max-w-[200px]'>
                    <button
                        onClick={() => setSectionLikes(true)}
                        className={`flex justify-center items-center text-xs sm:text-sm md:text-base gap-2 h-8 w-full rounded-md ${sectionLikes === false ? 'bg-gray-200 text-gray-400' : 'bg-primary-blue text-white'}`}>
                        The cars I liked

                        <Image
                            src='/heart-gray-filled.svg'
                            alt="like"
                            width={16}
                            height={16}
                            className={`md:h-[20px] ${sectionLikes === true ? 'opacity-100' : 'hidden'}`}
                        />
                    </button>
                </div>
            </div>
        )
    }
}


export default NavSelect