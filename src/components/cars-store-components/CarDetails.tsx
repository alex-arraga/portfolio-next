"use client"

import { CarDetailsProps } from "@/types/cars-store-types"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { generateCarImageAPI, calculateCarRent, renameClasses } from "@/app/utils"

import Image from "next/image"
import { baseApiMp } from '@/libs/baseURL'
import { CustomButton, PaymentButton, PlansCard } from ".."

function CarDetails({ car, isOpen, closeModal, styleDetails, stripePrices }: CarDetailsProps) {
    const [days, setDays] = useState(1);
    const carRent = calculateCarRent(car.city_mpg, car.year);
    const totalCost = Number(carRent) * days;


    return (
        <>
            {
                styleDetails === 'rent' ?
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as={"div"}
                            className="relative z-10 bg-cars"
                            onClose={closeModal}
                        >
                            <Transition.Child as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-200"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-30">

                                    <div className="fixed inset-0">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-200 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className='relative w-full h-full max-w-[100vw] md:max-w-[80vw] 2xl:max-w-[45vw] max-h-[100vh] md:max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 xl:p-10 text-left shadow-xl transition-all'>

                                                    {/* Button 'x' to close modal */}
                                                    <button type="button"
                                                        onClick={closeModal}
                                                        className="absolute top-2 right-2 w-fit p-2 bg-indigo-50 hover:bg-sky-200 duration-200 rounded-full"
                                                    >
                                                        <Image
                                                            src={"/close.svg"}
                                                            alt="close"
                                                            width={20}
                                                            height={20}
                                                            className="object-contain"
                                                        />
                                                    </button>

                                                    {/* Container  */}
                                                    <div className='flex relative'>
                                                        <section className='flex w-full flex-col'>
                                                            <div className='flex flex-col w-full justify-start items-start'>
                                                                <h1 className='capitalize text-txt_32 my-4 sm:mt-0 font-bold text-gray-700 w-full'>
                                                                    {car.make} {car.model} {car.transmission === 'a' ? 'AT' : 'MT'} - {car.year}
                                                                </h1>

                                                                {/* Section: Pay Methods */}
                                                                {/* <h2 className='font-semibold text-xl my-6 text-indigo-500'>Pay with Mercado Pago</h2> */}
                                                                {/* <p className='text-sm'>
                                                                    At CarHub, we offer two payment options for your convenience. Choose our <span className='font-medium text-indigo-800'>monthly plan to access a wide range of cars for a full month, allowing you to change vehicles according to your preference</span>.
                                                                    If you need a vehicle for a shorter period of time, we also <span className='font-medium text-indigo-800'>accept daily payments through Mercado Pago</span>. We allow you to choose the option that best suits your needs.
                                                                </p> */}
                                                            </div>


                                                            {/*  Stripe - I can't use it because I don't have account */}
                                                            {/* <h3 className='flex justify-center text-base text-sky-600 my-10 font-medium border-b-2 border-indigo-200'>Monthly Plans</h3>
                                                            <p className='text-sm pb-6'>
                                                                With our monthly rental plans we give you the possibility to change vehicles once a week within the brands available in each plan, we offer you the freedom to adjust your driving experience according to your needs. No strings attached, no worries and a safe way for you and your family.
                                                            </p>
                                                            <PlansCard
                                                                car={car}
                                                                costDayRent={Number(carRent)}
                                                                stripePrices={stripePrices ? stripePrices : []}
                                                            /> */}
                                                        </section>
                                                    </div>

                                                    {/* Mercado Pago */}
                                                    <section>
                                                        {/* <h3 className='flex justify-center text-base text-sky-600 my-10 font-medium border-b-2 border-indigo-200'>Pay per day</h3> */}
                                                        {/* <p className='text-sm pb-6'>
                                                            Experience the freedom of renting cars by the day with secure payments through Mercado Pago. This option gives you absolute flexibility for spontaneous trips or daily plans, with fast and secure transactions. By opting for daily rentals, you will have the freedom to adjust your mobility according to your schedule, without prolonged time ties. With varied and hassle-free payment methods, you can enjoy the convenience of flexible travel planning.
                                                        </p> */}

                                                        {/* Calculate price and days */}
                                                        <fieldset className="flex w-full h-full justify-center border-2 rounded-xl p-4 sm:p-6 bg-slate-200">
                                                            <div className="flex flex-col justify-between items-center gap-4 p-4 md:p-6 w-full rounded-xl max-w-2xl bg-sky-700">
                                                                {/* Price per day */}
                                                                <div className='flex justify-center items-center w-full max-w-xl rounded-md bg-indigo-50 border-2 border-blue-200 p-2'>
                                                                    <h4 className='text-xs sm:text-sm md:text-base font-medium'>Price: <span className='font-semibold text-xs sm:text-sm md:text-base text-indigo-500'>${carRent} /day</span></h4>
                                                                </div>

                                                                {/* Duration rent */}
                                                                <div className="flex flex-col justify-center items-center max-w-xl gap-4 w-full bg-indigo-50 border-2 border-blue-200 rounded-md p-2">
                                                                    <h4 className="text-xs sm:text-sm md:text-base font-medium">Days of rent: </h4>

                                                                    <div className="flex gap-4 sm:gap-6 justify-center items-center">
                                                                        <CustomButton
                                                                            totalCustom
                                                                            containerStyle="flex justify-center items-center py-1 px-4 rounded-sm bg-violet-200 hover:bg-violet-400 duration-200"
                                                                            textStyle="text-xs sm:text-sm md:text-base"
                                                                            handleClick={() => days !== 1 ? setDays(days - 1) : ''}
                                                                            title="-"
                                                                        />

                                                                        <p className="flex justify-center items-center bg-indigo-500 w-8 h-8 md:w-10 md:h-10 rounded-md text-white text-xs sm:text-sm md:text-base">{days}</p>

                                                                        <CustomButton
                                                                            totalCustom
                                                                            containerStyle="flex justify-center items-center py-1 px-4 rounded-sm bg-violet-200 hover:bg-violet-400 duration-200"
                                                                            textStyle="text-xs sm:text-sm md:text-base"
                                                                            handleClick={() => days !== 14 ? setDays(days + 1) : ''}
                                                                            title="+"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                {/* Total cost */}
                                                                <div className="flex justify-between items-center w-full max-w-xl rounded-md bg-sky-200 border-2 border-sky-600 p-2">
                                                                    <h4 className="font-medium text-xs sm:text-sm md:text-base text-slate-700">Total cost: </h4>
                                                                    <div className="px-4 py-1 bg-sky-600 rounded-md">
                                                                        <p className="font-medium text-sm sm:text-base md:text-lg text-white">${totalCost}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>

                                                        <div className='flex my-6 sm:my-8 md:my-10 justify-center items-center'>
                                                            <PaymentButton
                                                                mercadoPago={true}
                                                                containerStyle='flex justify-center items-center bg-blue-200 hover:bg-sky-300 duration-200 rounded-xl gap-2 h-auto w-auto'
                                                                textStyle='text-black font-medium text-xs sm:text-sm md:text-base'
                                                                title='Pagar con Mercado Pago'
                                                                urlPayAPI={baseApiMp}
                                                                leftIcon='/mp-icon.png'
                                                                car={car}
                                                                costRent={Number(carRent)}
                                                                durationRent={days}
                                                            />
                                                        </div>
                                                    </section>

                                                    {/* Section: Car data */}
                                                    <section className="mb-4">
                                                        <h3 className='flex justify-center text-base text-sky-600 my-10 font-medium border-b-2 border-indigo-200'>
                                                            Car Details
                                                        </h3>
                                                        <p className='text-sm'>
                                                            Looking for specific details about the vehicle you are considering for rental? Here is a detailed description of the <span className='text-indigo-500 font-semibold capitalize'>{car.make} {car.model} {car.transmission === 'a' ? 'AT' : 'MT'} - {car.year}</span>, technical features and performance. From performance to technology and safety, find out what makes this vehicle an exceptional choice for your next trip.
                                                        </p>
                                                        <div className='flex relative mt-6 mb-0 w-full bg-white border-2 border-gray-200 rounded-xl p-4 flex-col flex-wrap h-full'>
                                                            <div className='flex gap-4'>
                                                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                                                    {/* First image */}
                                                                    <Image src={generateCarImageAPI(car) ?? ''}
                                                                        fill
                                                                        sizes="500px"
                                                                        alt="cars"
                                                                        className="object-contain pt-6"
                                                                    />
                                                                </div>
                                                                <div className="relative w-full hidden md:block h-40 bg-pattern bg-cover bg-center rounded-lg">
                                                                    {/* Second image */}
                                                                    <Image src={generateCarImageAPI(car, '23') ?? ''}
                                                                        fill
                                                                        sizes="500px"
                                                                        alt="cars"
                                                                        className="object-contain pt-6"
                                                                    />
                                                                </div>
                                                                <div className="relative w-full hidden md:block h-40 bg-pattern bg-cover bg-center rounded-lg">
                                                                    {/* Third image */}
                                                                    <Image src={generateCarImageAPI(car, '13') ?? ''}
                                                                        fill
                                                                        sizes="500px"
                                                                        alt="cars"
                                                                        className="object-contain pt-6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="mt-6 mx-2">
                                                                <h1 className="font-semibold capitalize">
                                                                    Data Sheet
                                                                </h1>
                                                            </div >

                                                            {/* Show properties and values of object 'car' */}
                                                            <div className="mt-4 mx-2 flex flex-wrap gap-2">
                                                                {Object.entries(car)
                                                                    .filter(([key]) => key !== 'model' && key !== 'make' && key !== 'order_id' && key !== 'id' && key !== 'car_id' && key !== 'rented' && key !== 'liked')
                                                                    .map(([key, value]) => (
                                                                        <div className="flex justify-between w-full text-right" key={key}>
                                                                            <h4 className="capitalize text-gray-600 text-xs sm:text-sm">
                                                                                {
                                                                                    key === 'year' ? key = 'Year Launched'
                                                                                        : key.split("_").join(" ")
                                                                                }
                                                                            </h4>
                                                                            <p className="font-medium text-black-100 text-xs sm:text-sm capitalize">
                                                                                {
                                                                                    value === 'm' ? value = 'Manual'
                                                                                        : value === 'a' ? value = 'Automatic'
                                                                                            : value?.toString()
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    ))}
                                                            </div>

                                                        </div>
                                                    </section>

                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>

                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition>

                    :

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as={"div"}
                            className="relative z-10"
                            onClose={closeModal}
                        >
                            <Transition.Child as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-200"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-30">

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-200 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>

                                                    <button type="button"
                                                        onClick={closeModal}
                                                        className="absolute top-2 right-2 z-10 w-fit p-2 bg-indigo-50 hover:bg-sky-200 duration-200 rounded-full"
                                                    >
                                                        <Image
                                                            src={"/close.svg"}
                                                            alt="close"
                                                            width={20}
                                                            height={20}
                                                            className="object-contain"
                                                        />
                                                    </button>

                                                    {/* Main image */}
                                                    <div className="flex flex-col gap-3">
                                                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                                            <Image src={generateCarImageAPI(car) ?? ''}
                                                                fill
                                                                sizes="500px"
                                                                alt="cars"
                                                                className="object-contain"
                                                            />
                                                        </div>

                                                        {/* 3 more images of the car, in different angles */}
                                                        <div className="flex gap-3">
                                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                                <Image src={generateCarImageAPI(car, '29') ?? ''}
                                                                    fill
                                                                    sizes="500px"
                                                                    alt="cars"
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                                <Image src={generateCarImageAPI(car) ?? ''}
                                                                    fill
                                                                    sizes="500px"
                                                                    alt="cars"
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                                <Image src={generateCarImageAPI(car, '13') ?? ''}
                                                                    fill
                                                                    sizes="500px"
                                                                    alt="cars"
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Name car and model */}
                                                    <div className="flex-1 flex flex-col gap-2">
                                                        <h1 className="font-semibold text-lg sm:text-xl capitalize truncate text-clip text-black">
                                                            {car.make} {car.model}
                                                        </h1>
                                                    </div>

                                                    {/* Show de properties and values of object 'car' */}
                                                    <div className="mt-3 flex flex-wrap gap-4">
                                                        {Object.entries(car)
                                                            .filter(([key]) => key !== 'order_id' && key !== 'id' && key !== 'car_id' && key !== 'rented' && key !== 'liked')
                                                            .map(([key, value]) => (
                                                                <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                                    <h4 className="capitalize text-gray-400">
                                                                        {
                                                                            key === 'year' ? key = 'Year Launched'
                                                                                : key.split("_").join(" ")
                                                                        }
                                                                    </h4>
                                                                    <p className="font-medium text-black-100 capitalize">
                                                                        {
                                                                            key === 'class' ? value = renameClasses(value!.toString())
                                                                                : value === 'm' ? value = 'Manual'
                                                                                    : value === 'a' ? value = 'Automatic'
                                                                                        : value?.toString()
                                                                        }
                                                                    </p>
                                                                </div>
                                                            ))}
                                                    </div>
                                                </Dialog.Panel>

                                            </Transition.Child>
                                        </div>
                                    </div>

                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition>
            }
        </>
    )
}

export default CarDetails