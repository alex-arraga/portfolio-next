"use client"

import { generateCarImageAPI, renameClasses } from "@/app/utils"
import { GetOrderProps, Price } from "@/types/payment"
import { RentedCarCardProps } from "@/types/cars-store"
import { useEffect, useState } from 'react'
import { CarDetails, PaymentComprobant } from "../../index"
import { baseApi } from "@/libs/baseURL"
import { useCarsContext } from "@/context"

import Image from "next/image"
import CustomButton from "../CustomButton"

interface RentedCar {
    rentedCars: RentedCarCardProps
    stripePrices: Price[]
}

function RentedCarCard({ rentedCars: car, stripePrices }: RentedCar) {
    const { manageLikes } = useCarsContext()
    const [paymentComprobantIsOpen, setPaymentComprobantIsOpen] = useState(false);
    const [rentIsOpen, setRentIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)

    const [paymentData, setPaymentData] = useState<GetOrderProps['infoOrder'] | undefined>();
    const hasMonthlyPlan = paymentData?.pay_status_detail === 'recurrent_suscription';

    // Price multiplied by the official dollar price in Argentina - 9/1/2024
    const priceDollar = paymentData?.price! * 813.84;

    const dataRentedCar = {
        id: car.id,
        car_id: car.car_id,
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
        rented: car.rented,
        liked: car.liked,
        order_id: car.order_id,
    };


    const getPaymentData = async (orderId: string): Promise<GetOrderProps['infoOrder'] | null> => {
        try {
            const response = await fetch(`${baseApi}/payment/order/${orderId}`, {
                method: 'GET',
                credentials: 'include'
            })

            const data: GetOrderProps = await response.json()
            setPaymentData(data.infoOrder)

            return data.infoOrder
        } catch (error) {
            console.log(error)
            return null
        }
    };

    useEffect(() => {
        setIsLoaded(true)
        if (isLoaded) {
            getPaymentData(car.order_id!)
        }

    }, [isLoaded])

    return (
        <div className="relative flex flex-col p-6 justify-start items-start text-black-100 bg-primary-blue-100 hover:bg-white rounded-3xl h-full">
            <div className="w-full flex-col relative justify-between items-start gap-2">
                <div className="flex items-start justify-between">
                    {/* Car name */}
                    <h1 className="text-lg md:text-txt_22 font-bold capitalize truncate text-ellipsis">
                        {car.make} {car.model} - {car.transmission === 'm' ? 'MT' : 'AT'}
                    </h1>

                    {/* Like */}
                    <div>
                        {
                            car.liked ?
                                <Image
                                    onClick={() => manageLikes(car)}
                                    className="object-contain cursor-pointer"
                                    src={'/heart-filled.svg'}
                                    width={22}
                                    height={22}
                                    alt="like icon"
                                />

                                :

                                <Image
                                    onClick={() => manageLikes(car)}
                                    className="object-contain cursor-pointer"
                                    src={'/heart-outline.svg'}
                                    width={22}
                                    height={22}
                                    alt="like icon"
                                />
                        }
                    </div>
                </div>

                {/* Class */}
                <h2 className="mt-1 text-xs sm:text-sm md:text-base capitalize text-gray-500">
                    {`${renameClasses(car.class)} - ${car.year}`}
                </h2>

                {/* Main image */}
                <div className="relative w-full h-32 sm:h-40 md:h-56 mt-4 md:mt-6 object-contain">
                    <Image src={generateCarImageAPI(car, '') ?? ''}
                        fill
                        sizes="500px"
                        alt="cars"
                        className="object-contain"
                    />
                </div>

                {/* Info */}

                <section className="flex flex-col justify-start items-start w-full h-fit rounded-md">
                    {
                        car.rented ?
                            <div className="flex justify-between items-center w-full bg-teal-100 p-2 rounded-md mb-4">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={'/car-rented.svg'}
                                        width={24}
                                        height={24}
                                        alt="car rented icon"
                                        className="object-contain w-5 h-5 sm:w-6 sm:h-6"
                                    />

                                    <p className="text-txt_10 sm:text-xs md:text-sm font-medium">You rented this car!</p>
                                </div>
                                <p className="text-txt_10 sm:text-xs md:text-sm font-medium bg-teal-600 p-2 rounded-md text-white">{hasMonthlyPlan ? 'Monthly rent' : 'Daily rent'}</p>
                            </div>

                            :

                            <div className="flex justify-between w-full gap-2 sm:gap-4 mb-4 text-[10px] sm:text-xs md:text-sm">
                                <p className='flex flex-col justify-center items-center w-full bg-red-100 text-gray-700 py-1 rounded-md'>
                                    This car has never been rented yet<br /> <span className="flex justify-center font-semibold">Do you want to rent it?</span>
                                </p>
                            </div>
                    }


                    {/* Buttons */}
                    {
                        car.rented ?
                            <CustomButton
                                title="View payment"
                                handleClick={() => setPaymentComprobantIsOpen(true)}
                                containerStyle="max-h-8 w-full bg-teal-800 hover:bg-emerald-600 duration-300 rounded-md "
                                textStyle="text-xs sm:text-sm md:text-base font-medium text-white"
                            />

                            :

                            <CustomButton
                                title="Rent car now"
                                handleClick={() => setRentIsOpen(true)}
                                containerStyle="max-h-8 w-full bg-blue-900 rounded-md hover:bg-primary-blue duration-300"
                                textStyle="text-xs sm:text-sm md:text-base font-medium text-white"
                            />
                    }

                    <div>
                        <CarDetails
                            isOpen={rentIsOpen}
                            closeModal={() => setRentIsOpen(false)}
                            car={dataRentedCar}
                            styleDetails='rent'
                            stripePrices={stripePrices}
                        />
                    </div>

                    <div>
                        <PaymentComprobant
                            payment={paymentData ?? null}
                            priceSuscription={priceDollar}
                            car={car}
                            isOpen={paymentComprobantIsOpen}
                            closeModal={() => setPaymentComprobantIsOpen(false)}
                        />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default RentedCarCard

// leading-[26px]