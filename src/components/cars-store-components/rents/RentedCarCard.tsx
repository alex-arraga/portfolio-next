"use client"

import { calculateCarRent, generateCarImageAPI, renameClasses } from "@/app/utils"
import { RentedCarCardProps } from "@/types/cars-store"
import Image from "next/image"
import CustomButton from "../CustomButton"
import { useState } from 'react'
import CarDetails from "../CarDetails"

interface RentedCar {
    car: RentedCarCardProps
}

function RentedCarCard({ car }: RentedCar) {
    const [isOpen, setIsOpen] = useState(false)
    const [like, setLike] = useState(false)

    const carRent = calculateCarRent(car.city_mpg, car.year)
    const carDate = car.created_at.toLocaleString()

    return (
        <div className="relative flex flex-col p-6 justify-start items-start text-black-100 bg-primary-blue-100 hover:bg-white rounded-3xl">
            <div className="w-full flex-col relative justify-between items-start gap-2">
                <div className="flex items-start justify-between">
                    {/* Car name */}
                    <h1 className="text-[18px] md:text-[22px] leading-[26px] font-bold capitalize">
                        {car.make} {car.model} - {car.transmission === 'm' ? 'MT' : 'AT'}
                    </h1>

                    {/* Like */}
                    <div>
                        {
                            car.liked ?
                                <Image
                                    onClick={() => setLike(false)}
                                    src={'/heart-filled.svg'}
                                    width={22}
                                    height={22}
                                    alt="like icon"
                                />

                                :

                                <Image
                                    onClick={() => setLike(true)}
                                    src={'/heart-outline.svg'}
                                    width={22}
                                    height={22}
                                    alt="like icon"
                                />
                        }
                    </div>
                </div>

                {/* Class */}
                <h2 className="mt-1 text-[12px] sm:text-[14px] md:text-[16px] capitalize text-gray-500">
                    {`${renameClasses(car.class)} - ${car.year}`}
                </h2>

                {/* Main image */}
                <div className="relative w-full h-32 sm:h-40 md:h-56 mt-4 md:mt-6 object-contain">
                    <Image src={generateCarImageAPI(car, '')}
                        fill
                        alt="cars"
                        className="object-contain"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-start items-start w-full h-full rounded-md">
                    <h3 className="mb-4 text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">
                        Cost: <span className="font-semibold text-black-100">${carRent} /</span>day
                    </h3>

                    <ul className="flex justify-between w-full gap-2 sm:gap-4 md:gap-6 mb-4 text-[10px] sm:text-[12px] md:text-[14px]">
                        <li className={`${!car.rented ? 'flex flex-col justify-center items-center w-full bg-red-100 text-gray-700 py-1 rounded-md' : 'hidden'}`}>
                            This car has never been rented yet<br /> <span className="flex justify-center font-semibold">Do you want to rent it?</span>
                        </li>
                        <li className={`${car.rented ? 'flex flex-col justify-center items-center w-full bg-gray-200 text-gray-700 py-1 rounded-md' : 'hidden'}`}>
                            Rented<span className="font-semibold capitalize">{carDate.slice(0, 10)}</span>
                        </li>
                        <li className={`${car.rented ? 'flex flex-col justify-center items-center w-full bg-gray-200 text-gray-700 py-1 rounded-md' : 'hidden'}`}>
                            Hour<span className="font-semibold capitalize">{carDate.slice(11)}</span>
                        </li>
                        <li className={`${car.rented ? 'flex flex-col justify-center items-center w-full bg-gray-200 text-gray-700 py-1 rounded-md' : 'hidden'}`}>
                            Rented for<span className="font-semibold capitalize">{car.duration_rented}</span>
                        </li>
                    </ul>

                    {/* Buttons */}
                    {
                        car.rented ?
                            <CustomButton
                                title="View payment"
                                handleClick={() => setIsOpen(true)}
                                containerStyle="max-h-8 w-full bg-gray-700 text-[12px] sm:text-[14px] md:text-[16px] font-medium rounded-md text-white hover:bg-primary-blue duration-300"
                            />

                            :

                            <CustomButton
                                title="Rent car now"
                                handleClick={() => setIsOpen(true)}
                                containerStyle="max-h-8 w-full bg-blue-900 text-[12px] sm:text-[14px] md:text-[16px] font-medium rounded-md text-white hover:bg-primary-blue duration-300"
                            />
                    }
                </div>


                {/* Details car modal */}
                <div>
                    <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} styleDetails='rent' />
                </div>

            </div>
        </div>
    )
}

export default RentedCarCard