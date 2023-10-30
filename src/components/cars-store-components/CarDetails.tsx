"use client"

import '@/css/cars-store.css'

import { CarDetailsProps } from "@/types/cars-store"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { generateCarImageAPI } from "@/app/utils"

import Image from "next/image"

function CarDetails({ car, isOpen, closeModal }: CarDetailsProps) {
  return (
    <>
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

                      <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl capitalize">
                          {car.make} {car.model}
                        </h2>
                      </div>

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
    </>
  )
}

export default CarDetails