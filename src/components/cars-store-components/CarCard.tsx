"use client"

import Image from "next/image"
import { Price } from "@/types/payment"
import { CarCardProps } from "@/types/cars-store"
import { useState } from 'react'
import { calculateCarRent, generateCarImageAPI, renameClasses } from "@/app/utils"
import { CustomButton, CarDetails } from ".."
import { useCarsContext } from "@/context/CarsContext"

interface CarProps {
    car: CarCardProps,
    styleCard?: string,
    stripePrices: Price[]
}

function CarCard({ car, styleCard, stripePrices }: CarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [like, setLike] = useState(false);

    const { city_mpg, year, make, model, transmission, drive, cylinders } = car;
    const carRent = calculateCarRent(city_mpg, year);

    const context = useCarsContext()

    if (context) {
        const { manageLikes } = context

        return (
            <>
                {
                    styleCard === 'dashboard' ?
                        <div className="car-card group hover:bg-white duration-200">
                            <div className="car-card__content">
                                <div className="flex justify-between items-center">

                                    {/* Car name */}
                                    <h1 className="text-lg sm:text-xl md:text-txt_22 font-bold capitalize truncate text-ellipsis">
                                        {make} {model}
                                    </h1>

                                    {/* Like */}
                                    <div className="cursor-pointer">
                                        {
                                            !like ? (
                                                <Image
                                                    onClick={() => {
                                                        setLike(true)
                                                        manageLikes(car)
                                                    }}
                                                    src={'/heart-outline.svg'}
                                                    width={22}
                                                    height={22}
                                                    alt="like icon"
                                                    className="heart-icon duration-200"
                                                />
                                            ) : (
                                                <Image
                                                    onClick={() => {
                                                        setLike(false)
                                                    }}
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
                                    <Image src={generateCarImageAPI(car, '23') ?? ''}
                                        fill
                                        sizes="500px"
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
                                            <p className="text-xs">
                                                {transmission === 'a' ? 'Automatic' : 'Manual'}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center gap-2 w-full ">
                                            <Image
                                                src={'/engine.svg'}
                                                width={24}
                                                height={24}
                                                alt="engine"
                                                className='text-blue-900 w-6 h-6'
                                            />
                                            <p className="text-xs">
                                                {cylinders + ' Cylinders'}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* Price rent */}
                                <div className="flex w-full justify-between items-center max-h-8 mt-6">
                                    <h3 className="flex justify-start items-center w-full text-base">
                                        <span className="font-semibold text-xl">${carRent} /</span>day
                                    </h3>

                                    <CustomButton
                                        title="Rent car"
                                        handleClick={() => setIsOpen(true)}
                                        containerStyle="max-h-8 w-full bg-blue-300 rounded-md hover:bg-primary-blue hover:text-white duration-300"
                                    />
                                </div>

                                {/* Details car modal */}
                                <div>
                                    <CarDetails stripePrices={stripePrices} isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} styleDetails='rent' />
                                </div>

                            </div>
                        </div>

                        :

                        <div className="car-card group hover:bg-indigo-100 duration-200">
                            <div className="car-card__content">

                                {/* Car name */}
                                <h1 className="text-lg sm:text-xl md:text-txt_22 font-bold capitalize truncate text-ellipsis">
                                    {make} {model}
                                </h1>

                                {/* Price rent */}
                                <p className="flex mt-6 text-txt_28 font-medium">
                                    <span className="self-start text-txt_14">
                                        $
                                    </span>
                                    {carRent}
                                    <span className="self-end text-txt_14">
                                        /day
                                    </span>
                                </p>

                                {/* Main image */}
                                <div className="relative w-full h-40 my-3 object-contain">
                                    <Image src={generateCarImageAPI(car) ?? ''}
                                        fill
                                        sizes="300px"
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
                                            <p className="text-xs">
                                                {transmission === 'a' ? 'Automatic' : 'Manual'}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <Image src="/tire.svg"
                                                width={20}
                                                height={20}
                                                alt="tire"
                                            />
                                            <p className="text-xs">
                                                {drive.toUpperCase()}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                                            <Image src="/gas.svg"
                                                width={20}
                                                height={20}
                                                alt="fuel type"
                                            />
                                            <p className="text-xs">
                                                {city_mpg} MPG
                                            </p>
                                        </div>
                                    </div>

                                    {/* View more btn */}
                                    <div className="car-card__btn-container">
                                        <CustomButton
                                            title="View more"
                                            containerStyle="w-full p-4 rounded-full bg-primary-blue"
                                            textStyle="text-white text-xs font-bold"
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
}



export default CarCard;