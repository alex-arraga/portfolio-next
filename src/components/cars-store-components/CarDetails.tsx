"use client"

import '@/css/cars-store.css'

import { CarDetailsProps } from "@/types/cars-store"
import { Fragment, useId } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { generateCarImageAPI, calculateCarRent } from "@/app/utils"

import Image from "next/image"
import Link from 'next/link'

function CarDetails({ car, isOpen, closeModal, styleDetails }: CarDetailsProps) {
  const carRent = calculateCarRent(car.city_mpg, car.year)
  const baseUrlRent = 'http://localhost:3000/projects/cars-store/rents'

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
                        <Dialog.Panel className={'relative w-full max-w-[70vw] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all'}>

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

                          {/* CONTENEDOR SUPERIOR  */}
                          <div className='flex flex-col w-full h-full'>


                            {/* SECCIONES UNIDAS */}
                            <div className='flex relative gap-6 h-full'>

                              {/* SECCION IZQUIERDA */}
                              <section className='flex w-1/2 flex-col'>

                                <div className='flex flex-col w-full justify-start items-start'>
                                  <h1 className='capitalize text-[32px] font-bold text-gray-700 w-full'>
                                    {car.make} {car.model} {car.transmission === 'a' ? 'AT' : 'MT'} - {car.year}
                                  </h1>
                                  <h2 className='font-semibold mt-6 border-b-2 text-gray-700 border-indigo-200'>Do you want rent this car?</h2>
                                  <p className='mt-6 font-medium text-lg text-gray-700'><span className='text-base'>Price:</span> <span className='font-semibold text-indigo-500'>${carRent}</span>/day</p>
                                </div>

                                {/* Section to pay */}
                                <section className='relative flex flex-col w-full mt-6 h-full bg-blue-100 rounded-xl'>
                                  <h3 className='font-medium text-gray-700 m-4'>Pay methods:</h3>
                                  <div className='mx-4 text-[14px] font-light'>
                                    <p>Credit cards:</p>
                                    <p>Debit cards:</p>
                                  </div>

                                  {/* button pay */}
                                  <Link
                                    href={baseUrlRent}
                                    className='flex justify-center h-10 absolute bottom-5 bg-opacity-50 w-full'>
                                    <button
                                      className='flex justify-center items-center rounded-md w-1/2 bg-white hover:bg-primary-blue hover:text-white duration-300 cursor-pointer'>
                                      Pay rent car
                                    </button>
                                  </Link>
                                </section>

                              </section>

                              {/* SECCION DERECHA */}
                              <section className='flex relative w-1/2 bg-white border-2 border-blue-200 rounded-xl p-4 flex-col flex-wrap h-full'>

                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                  {/* Main image */}
                                  <Image src={generateCarImageAPI(car)}
                                    fill
                                    alt="cars"
                                    className="object-contain pt-6"
                                  />
                                </div>

                                {/* Name car and model */}
                                <div className="mt-6 mx-4">
                                  <h2 className="font-semibold capitalize">
                                    Data Sheet
                                  </h2>
                                </div >

                                {/* Show de properties and values of object 'car' */}
                                <div className="mt-4 mx-4 flex flex-wrap gap-2">
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

                              </section>
                            </div>
                          </div>

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







{/* CONTENEDOR SUPERIOR  */ }
{/* <div className='flex flex-col w-full h-screen'>

  <div className="relative w-full h-full bg-pattern bg-cover bg-center rounded-lg"> */}
{/* Main image */ }
{/* <Image src={generateCarImageAPI(car)}
      fill
      alt="cars"
      className="object-contain"
    />
  </div> */}

{/* 3 more images of the car, in different angles */ }
// <div className="flex w-full gap-4 mt-4 h-full">
//   <div className="flex-1 relative w-full h-full bg-primary-blue-100 hover:bg-indigo-200 duration-200 cursor-pointer rounded-lg max-h-32">
//     <Image src={generateCarImageAPI(car, '29')}
//       fill
//       alt="cars"
//       className="object-contain pt-4"
//     />
//   </div>
//   <div className="flex-1 relative w-fullh-full bg-primary-blue-100 hover:bg-indigo-200 duration-200 cursor-pointer rounded-lg max-h-32">
//     <Image src={generateCarImageAPI(car)}
//       fill
//       alt="cars"
//       className="object-contain"
//     />
//   </div>
//   <div className="flex-1 relative w-full h-full bg-primary-blue-100 hover:bg-indigo-200 duration-200 cursor-pointer rounded-lg max-h-32">
//     <Image src={generateCarImageAPI(car, '13')}
//       fill
//       alt="cars"
//       className="object-contain pt-4"
//     />
//   </div>
// </div>


{/* SECCIONES UNIDAS */ }
// <div className='flex relative gap-12 h-full'>

{/* SECCION IZQUIERDA */ }
// <section className='flex w-1/2 flex-col'>

//   <div className='flex flex-col w-full justify-start items-start'>
//     <h2 className='font-semibold border-b-2 border-indigo-200 px-2'>Do you want rent this car?</h2>
//     <p className='mt-6 font-medium text-lg'><span className='text-base'>Price:</span> <span className='font-semibold text-indigo-500'>${carRent}</span>/day</p>
//   </div>

{/* Section to pay */ }
// <section className='relative flex flex-col w-full mt-6 h-full bg-indigo-100 rounded-xl'>
//   <h3 className='font-medium flex justify-center text-black-100 m-4'>Pay methods:</h3>
//   <div className='mx-4 text-[14px] font-light'>
//     <p>Credit cards:</p>
//     <p>Debit cards:</p>
//   </div>

{/* button pay */ }
//     <div className='flex justify-center h-10 absolute bottom-5 bg-opacity-50 w-full'>
//       <div className='flex justify-center items-center rounded-sm w-1/2 bg-white hover:bg-indigo-200 duration-300 cursor-pointer'>
//         <button className=''>
//           Pay rent car
//         </button>
//       </div>
//     </div>
//   </section>

// </section>

{/* SECCION DERECHA */ }
// <section className='flex w-1/2 flex-wrap h-full'>

{/* Name car and model */ }
{/* <div className="flex-1 flex flex-col gap-2">
        <h2 className="font-semibold capitalize">
          Data Sheet
        </h2>
      </div> */}

{/* Show de properties and values of object 'car' */ }
{/* <div className="mt-3 flex flex-wrap gap-2">
        {Object.entries(car)
          .filter(([key]) => key !== 'model' && key !== 'make')
          .map(([key, value]) => (
            <>
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
            </>
          ))}
      </div>

    </section>
  </div>
</div> */}