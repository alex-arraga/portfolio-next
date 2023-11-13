"use client"

import Image from "next/image"
import { CarCardProps, RentedCarCardProps } from "@/types/cars-store"
import { useState } from 'react'
import { calculateCarRent, generateCarImageAPI, renameClasses } from "@/app/utils"
import { CustomButton, CarDetails } from ".."
import { PiEngine } from 'react-icons/pi'

interface CarProps {
    car: CarCardProps,
    styleCard?: string,
}

function CarCard({ car, styleCard }: CarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [like, setLike] = useState(false)
    const { city_mpg, year, make, model, transmission, drive, cylinders } = car

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <>
            {
                styleCard === 'dashboard' ?
                    <div className="car-card group">
                        <div className="car-card__content">
                            <div className="flex justify-between items-center">

                                {/* Car name */}
                                <h1 className="car-card__content-title capitalize">
                                    {make} {model}
                                </h1>

                                {/* Like */}
                                <div className="cursor-pointer">
                                    {
                                        !like ? (
                                            <Image
                                                onClick={() => setLike(true)}
                                                src={'/heart-outline.svg'}
                                                width={22}
                                                height={22}
                                                alt="like icon"
                                                className="heart-icon duration-200"
                                            />
                                        ) : (
                                            <Image
                                                onClick={() => setLike(false)}
                                                src={'/heart-filled.svg'}
                                                width={22}
                                                height={22}
                                                alt="like icon"
                                                className="heart-icon duration-200"
                                            />
                                        )
                                    }
                                </div>
                            </div>

                            {/* Class */}
                            <h2 className="mt-1 capitalize text-gray-500">
                                {renameClasses(car.class)}
                            </h2>

                            {/* Main image */}
                            <div className="relative w-full h-40 my-2 object-contain">
                                <Image src={generateCarImageAPI(car, '23')}
                                    fill
                                    alt="cars"
                                    className="object-contain"
                                />
                            </div>

                            {/* Icons */}
                            <div className="relative flex w-full">
                                <div className="flex w-full justify-between items-center text-gray">

                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <Image src="/steering-wheel.svg"
                                            width={20}
                                            height={20}
                                            alt="wheel"
                                        />
                                        <p className="text-[14px]">
                                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-2 w-full ">
                                        <PiEngine className='text-blue-900 w-6 h-6 ' />
                                        <p className="text-[14px]">
                                            {cylinders + ' Cylinders'}
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Price rent */}
                            <div className="flex w-full justify-between items-center max-h-8 mt-6">
                                <h3 className="flex justify-start items-center  w-full  text-base">
                                    <span className="font-semibold text-[20px]">${carRent} /</span>day
                                </h3>

                                <CustomButton
                                    title="Rent car"
                                    handleClick={() => setIsOpen(true)}
                                    containerStyle="max-h-8 w-full bg-blue-300 rounded-md hover:bg-primary-blue hover:text-white duration-300"
                                />
                            </div>

                            {/* Details car modal */}
                            <div>
                                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} styleDetails='rent' />
                            </div>

                        </div>
                    </div>

                    :

                    <div className="car-card group">
                        <div className="car-card__content">

                            {/* Car name */}
                            <h2 className="car-card__content-title capitalize">
                                {make} {model}
                            </h2>

                            {/* Price rent */}
                            <p className="flex mt-6 text-[32px]">
                                <span className="self-start text-[14px] font-semibold">
                                    $
                                </span>
                                {carRent}
                                <span className="self-end text-[14px] font-medium">
                                    /day
                                </span>
                            </p>

                            {/* Main image */}
                            <div className="relative w-full h-40 my-3 object-contain">
                                <Image src={generateCarImageAPI(car)}
                                    fill
                                    alt="cars"
                                    className="object-contain"
                                />
                            </div>

                            {/* Icons */}
                            <div className="relative flex w-full mt-6 md:mt-8">
                                <div className="flex group-hover:invisible w-full justify-between text-gray">

                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <Image src="/steering-wheel.svg"
                                            width={20}
                                            height={20}
                                            alt="wheel"
                                        />
                                        <p className="text-[14px]">
                                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <Image src="/tire.svg"
                                            width={20}
                                            height={20}
                                            alt="tire"
                                        />
                                        <p className="text-[14px]">
                                            {drive.toUpperCase()}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-2 w-full">
                                        <Image src="/gas.svg"
                                            width={20}
                                            height={20}
                                            alt="fuel type"
                                        />
                                        <p className="text-[14px]">
                                            {city_mpg} MPG
                                        </p>
                                    </div>
                                </div>

                                {/* View more btn */}
                                <div className="car-card__btn-container">
                                    <CustomButton
                                        title="View more"
                                        containerStyle="w-full py-[16px] rounded-full bg-primary-blue"
                                        textStyle="text-white text-[14px] leading-[18px] font-bold"
                                        rightIcon="/right-arrow.svg"
                                        handleClick={() => setIsOpen(true)}
                                    />
                                </div>
                            </div>

                            {/* Details car modal */}
                            <div>
                                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
                            </div>

                        </div>
                    </div>
            }
        </>
    )
}

export default CarCard;