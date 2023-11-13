"use client"

// import { renameClasses } from "@/app/utils";
import { AsideComponentProps } from "@/types/cars-store";
import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

import {
    PriceRangeFilter,
    TypesCarsFilter,
    YearFilter,
    SearchBar,
    TransmissionFilter,
    ResetAllFilters,
    HamburgerMenuBar
} from "@/components/index";


export function AsideComponent({ allCars, searchParams }: AsideComponentProps) {
    const [isOpen, setIsOpen] = useState(false)

    // Classes
    // const classCounter: { [classes: string]: number } = {};

    // const cityAutonomy = allCars.map((car: CarCardProps) => car.city_mpg)
    // const highwayAutonomy = allCars.map((car: CarCardProps) => car.highway_mpg)

    // const minAutonomy = cityAutonomy.reduce((a: number, b: number) => Math.min(a, b))
    // const maxAutonomy = highwayAutonomy.reduce((a: number, b: number) => Math.max(a, b))

    // Counts the number of times the same "car class" appears.
    // allCars.forEach((car: CarCardProps) => {
    //     let classCar = car.class;
    //     let finalClass = renameClasses(classCar)

    //     if (!classCounter[finalClass]) {
    //         classCounter[finalClass] = 1;
    //     } else {
    //         classCounter[finalClass]++;
    //     }
    // });

    // // Avoid repetition of 'class' properties
    // const uniqueCarClasses = Object.keys(classCounter);

    // Modal
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <HamburgerMenuBar searchParams={searchParams} handleClick={openModal} styleMenu='dashboard' />

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 transform -translate-x-full"
                        enterTo="opacity-100 transform translate-x-0"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 transform translate-x-0"
                        leaveTo="opacity-0 transform -translate-x-full"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex h-screen items-center justify-start text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95 transform:translateX(-100px)"
                                enterTo="opacity-100 scale-100 transform:translateX(0)"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100 transform:translateX(0)"
                                leaveTo="opacity-0 scale-95 transform:translateX(-100px)"
                            >
                                <Dialog.Panel className="relative w-[calc(85vw)] md:w-1/2 xl:w-1/3 overflow-y-auto rounded-2xl bg-white text-left align-middle shadow-xl">

                                    <div className="w-full h-screen border-r-2 border-gray-200 overflow-y-auto">
                                        <div className="flex flex-col justify-start items-start p-10">

                                            {/* Search Bar - Model and Manufacturer filter */}
                                            <div className="relative w-full">
                                                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Search</h2>
                                                <div className="flex items-center w-full relative mt-5">
                                                    <SearchBar styleSearchbar='aside-filters' />
                                                </div>
                                            </div>

                                            {/* Years filter */}
                                            <div className="relative w-full mt-10">
                                                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Year</h2>
                                                <YearFilter />
                                            </div>

                                            {/* Price range
                                            <div className="relative w-full mt-10">
                                                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Price</h2>
                                                <PriceRangeFilter maxAutonomy={maxAutonomy} minAutonomy={minAutonomy} />
                                            </div> */}


                                            {/* Types
                                            <div className="mt-10">
                                                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Type</h2>
                                                <div className="mt-5 mb-20">
                                                    {uniqueCarClasses.map((classCars) => (
                                                        <TypesCarsFilter
                                                            key={Math.random()}
                                                            classCars={classCars}
                                                            classCounter={classCounter}

                                                        />
                                                    ))}
                                                </div>
                                            </div> */}

                                            {/* Transmission Filter */}
                                            <div className="w-full mt-10">
                                                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Transmission</h2>
                                                <div className="flex justify-center items-center w-full mt-5">
                                                    <TransmissionFilter />
                                                </div>
                                            </div>

                                            {/* Reset All Filters */}
                                            <div className="w-full mt-10">
                                                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Show all cars</h2>
                                                <div className="flex justify-center items-center w-full mt-5">
                                                    <ResetAllFilters />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AsideComponent