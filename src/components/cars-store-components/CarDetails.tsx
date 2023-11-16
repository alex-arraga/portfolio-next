"use client"

import '@/css/cars-store.css'

import { CarDetailsProps } from "@/types/cars-store"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { generateCarImageAPI, calculateCarRent } from "@/app/utils"
import { PlansCard } from '..'

import Image from "next/image"

function CarDetails({ car, isOpen, closeModal, styleDetails, stripePrices }: CarDetailsProps) {
  const carRent = calculateCarRent(car.city_mpg, car.year)

  return (
    <>
      {
        styleDetails === 'rent' ?
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
                        <Dialog.Panel className={'relative w-full max-w-[80vw] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 xl:p-10 text-left shadow-xl transition-all'}>

                          {/* Button 'x' to close modal */}
                          <button type="button"
                            onClick={closeModal}
                            className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
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
                                <h1 className='capitalize text-[32px] font-bold text-gray-700 w-full'>
                                  {car.make} {car.model} {car.transmission === 'a' ? 'AT' : 'MT'} - {car.year}
                                </h1>

                                {/* Section to pay - Stripe */}
                                <h2 className='font-semibold text-[18px] my-6 text-indigo-500'>Flexible payment methods!</h2>
                                <p className='text-[14px]'>
                                  At CarHub, we offer two payment options for your convenience. Choose our <span className='font-medium text-indigo-800'>monthly plan to access a wide range of cars for a full month, allowing you to change vehicles according to your preference</span>.
                                  If you need a vehicle for a shorter period of time, we also <span className='font-medium text-indigo-800'>accept daily payments through Mercado Pago</span>. We allow you to choose the option that best suits your needs.
                                </p>
                              </div>

                              <h3 className='flex justify-center text-[16px] my-10 font-medium border-b-2 border-indigo-200'>Monthly Plans</h3>
                              <p className='text-[14px] pb-6'>
                                With our monthly rental plans we give you the possibility to change vehicles once a week within the brands available in each plan, we offer you the freedom to adjust your driving experience according to your needs. No strings attached, no worries and a safe way for you and your family.
                              </p>
                              <PlansCard stripePrices={stripePrices} />
                            </section>
                          </div>

                          {/* Section to pay - Mercado Pago */}
                          <section>
                            <h3 className='flex justify-center text-[16px] my-10 font-medium border-b-2 border-indigo-200'>Pay per day</h3>
                            <p className='text-[14px] pb-6'>
                              Experience the freedom of renting cars by the day with secure payments through Mercado Pago. This option gives you absolute flexibility for spontaneous trips or daily plans, with fast and secure transactions. By opting for daily rentals, you will have the freedom to adjust your mobility according to your schedule, without prolonged time ties. With varied and hassle-free payment methods, you can enjoy the convenience of flexible travel planning.
                            </p>

                            <div className='flex justify-center items-center w-full max-w-[180px] rounded-md bg-indigo-50 p-2'>
                              <h4 className='font-medium'>Price: <span className='font-semibold text-indigo-500'>${carRent} /day</span></h4>
                            </div>
                          </section>

                          {/* Section to view car dates */}
                          <section>
                            <h3 className='flex justify-center text-[16px] my-10 font-medium border-b-2 border-indigo-200'>Car Details</h3>
                            <p className='text-[14px]'>
                              Looking for specific details about the vehicle you are considering for rental? Here's a detailed description of the <span className='text-indigo-500 font-semibold capitalize'>{car.make} {car.model} {car.transmission === 'a' ? 'AT' : 'MT'} - {car.year}</span>, technical features and performance. From performance to technology and safety, find out what makes this vehicle an exceptional choice for your next trip.
                            </p>
                            <div className='flex relative mt-6 mb-0 w-full bg-white border-2 border-gray-200 rounded-xl p-4 flex-col flex-wrap h-full'>
                              <div className='flex gap-4'>
                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                  {/* Main image */}
                                  <Image src={generateCarImageAPI(car)}
                                    fill
                                    alt="cars"
                                    className="object-contain pt-6"
                                  />
                                </div>
                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                  {/* Main image */}
                                  <Image src={generateCarImageAPI(car, '23')}
                                    fill
                                    alt="cars"
                                    className="object-contain pt-6"
                                  />
                                </div>
                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                  {/* Main image */}
                                  <Image src={generateCarImageAPI(car, '13')}
                                    fill
                                    alt="cars"
                                    className="object-contain pt-6"
                                  />
                                </div>
                              </div>


                              {/* Name car and model */}
                              <div className="mt-6 mx-2">
                                <h1 className="font-semibold capitalize">
                                  Data Sheet
                                </h1>
                              </div >

                              {/* Show properties and values of object 'car' */}
                              <div className="mt-4 mx-2 flex flex-wrap gap-2">
                                {Object.entries(car)
                                  .filter(([key]) => key !== 'model' && key !== 'make')
                                  .map(([key, value]) => (
                                    <div className="flex justify-between w-full text-right" key={key}>
                                      <h4 className="capitalize text-gray-400 text-[14px]">
                                        {
                                          key === 'year' ? key = 'Year Launched'
                                            : key.split("_").join(" ")
                                        }
                                      </h4>
                                      <p className="font-medium text-black-100 text-[14px] capitalize">
                                        {
                                          value === 'm' ? value = 'Manual'
                                            : value === 'a' ? value = 'Automatic'
                                              : value
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
                        <Dialog.Panel className={'relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'}>

                          <button type="button"
                            onClick={closeModal}
                            className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
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
                              <Image src={generateCarImageAPI(car)}
                                fill
                                alt="cars"
                                className="object-contain"
                              />
                            </div>

                            {/* 3 more images of the car, in different angles */}
                            <div className="flex gap-3">
                              <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                <Image src={generateCarImageAPI(car, '29')}
                                  fill
                                  alt="cars"
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                <Image src={generateCarImageAPI(car)}
                                  fill
                                  alt="cars"
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                <Image src={generateCarImageAPI(car, '13')}
                                  fill
                                  alt="cars"
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Name car and model */}
                          <div className="flex-1 flex flex-col gap-2">
                            <h2 className="font-semibold text-xl capitalize">
                              {car.make} {car.model}
                            </h2>
                          </div>

                          {/* Show de properties and values of object 'car' */}
                          <div className="mt-3 flex flex-wrap gap-4">
                            {Object.entries(car).map(([key, value]) => (
                              <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                <h4 className="capitalize text-gray-400">{
                                  key === 'year' ? key = 'Year Launched'
                                    : key.split("_").join(" ")
                                }</h4>
                                <p className="font-medium text-black-100 capitalize">{
                                  value === 'm' ? value = 'Manual'
                                    : value === 'a' ? value = 'Automatic'
                                      : value
                                }</p>
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



/*
{/* SECCION DERECHA */
// <section className='flex relative w-1/2 bg-white border-2 border-blue-200 rounded-xl p-4 flex-col flex-wrap h-full'>

//   <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
//     {/* Main image */}
//     <Image src={generateCarImageAPI(car)}
//       fill
//       alt="cars"
//       className="object-contain pt-6"
//     />
//   </div>

{/* Name car and model */ }
{/* <div className="mt-6 mx-4">
                                  <h2 className="font-semibold capitalize">
                                    Data Sheet
                                  </h2>
                                </div > */}

{/* Show properties and values of object 'car' */ }
{/* <div className="mt-4 mx-4 flex flex-wrap gap-2">
                                  {Object.entries(car)
                                    .filter(([key]) => key !== 'model' && key !== 'make')
                                    .map(([key, value]) => (
                                      <div className="flex justify-between w-full text-right" key={key}>
                                        <h4 className="capitalize text-gray-400 text-[14px]">
                                          {
                                            key === 'year' ? key = 'Year Launched'
                                              : key.split("_").join(" ")
                                          }
                                        </h4>
                                        <p className="font-medium text-black-100 text-[14px] capitalize">
                                          {
                                            value === 'm' ? value = 'Manual'
                                              : value === 'a' ? value = 'Automatic'
                                                : value
                                          }
                                        </p>
                                      </div>
                                    ))}
                                </div>

                              </section> */}

