"use client"

import { calculateCarRent, generateCarImageAPI, renameClasses } from "@/app/utils"
import { Price } from "@/types/payment"
import { RentedCarCardProps } from "@/types/cars-store"
import { useState } from 'react'
import { CarDetails } from "../../index"

import Image from "next/image"
import CustomButton from "../CustomButton"

interface RentedCar {
    rentedCars: RentedCarCardProps
    stripePrices: Price[]
}

function RentedCarCard({ rentedCars: car, stripePrices }: RentedCar) {
    const [paymentIsOpen, setPaymentIsOpen] = useState(false)
    const [rentIsOpen, setRentIsOpen] = useState(false)
    const [like, setLike] = useState(false)

    const dataCarAPI = {
        city_mpg: car.city_mpg,
        class: car.class,
        combination_mpg: car.combination_mpg,
        cylinders: car.cylinders,
        displacement: car.displacement,
        drive: car.drive,
        fuel_type: car.fuel_type,
        highway_mpg: car.highway_mpg,
        make: car.make,
        model: car.model,
        transmission: car.transmission,
        year: car.year,
    }

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
                                handleClick={() => setPaymentIsOpen(true)}
                                containerStyle="max-h-8 w-full bg-gray-700 text-[12px] sm:text-[14px] md:text-[16px] font-medium rounded-md text-white hover:bg-primary-blue duration-300"
                            />

                            :

                            <CustomButton
                                title="Rent car now"
                                handleClick={() => setRentIsOpen(true)}
                                containerStyle="max-h-8 w-full bg-blue-900 text-[12px] sm:text-[14px] md:text-[16px] font-medium rounded-md text-white hover:bg-primary-blue duration-300"
                            />
                    }

                    <div>
                        <CarDetails
                            isOpen={rentIsOpen}
                            closeModal={() => setRentIsOpen(false)}
                            car={dataCarAPI}
                            styleDetails='rent'
                            stripePrices={stripePrices}
                        />
                    </div>

                    {/* <div>
                        <PaymentComprobant />
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default RentedCarCard