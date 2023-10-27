"use client"

import Image from "next/image"
import { CarCardProps } from "@/types/cars-store"
import { useState } from 'react'
import { calculateCarRent } from "@/app/utils"
import { CustomButton, CarDetails } from ".."

interface CarProps {
    car: CarCardProps
}

function CarCard({ car }: CarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { city_mpg, year, make, model, transmission, drive } = car

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title capitalize">
                    {make} {model}
                </h2>

                <p className="flex mt-6 text-[32px]">
                    <span className="self-start text-[14px] font-semibold">
                        $
                    </span>
                    {carRent}
                    <span className="self-end text-[14px] font-medium">
                        /day
                    </span>
                </p>

                <div className="relative w-full h-40 my-3 object-contain">
                    <Image src="/hero.png"
                        fill
                        alt="cars"
                        className="object-contain"
                    />
                </div>

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

                <div>
                    <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
                </div>

            </div>
        </div>
    )
}

export default CarCard;