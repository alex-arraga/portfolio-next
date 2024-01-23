"use client"

import RentedCarCard from "./RentedCarCard";
import EmptyDataMessage from "../EmptyDataMessage";
import { SectionsMyCarsProps } from "@/types/cars-store";
import { useCarsContext } from '@/context/CarsContext'
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";


export const SectionsMyCars = ({ rentedCars, stripePrices, likedCars }: SectionsMyCarsProps) => {
    const router = useRouter();
    const pathname = usePathname()
    const context = useCarsContext();

    const [countLikes, setCountLikes] = useState(0);
    const [countRents, setCountRents] = useState(0);


    const hasLikes = () => {
        if (likedCars.length >= 1) {
            return true
        }
        else {
            return false
        }
    }

    const hasRentedCars = () => {
        if (rentedCars.length >= 1) {
            return true
        }
        else {
            return false
        }
    }


    useEffect(() => {
        if (pathname === '/projects/cars-store/rents') {
            if (countLikes !== likedCars.length) {
                setCountLikes(likedCars.length)
                router.refresh()
            }

            if (countRents !== rentedCars.length) {
                setCountRents(rentedCars.length)
                router.refresh()
            }
        }
    }, [countLikes, countRents, likedCars.length, rentedCars.length, pathname, router])


    if (context) {
        const { sectionLikes } = context

        return (
            <>
                {
                    sectionLikes === true ?
                        <section className="overflow-hidden h-full">
                            <div className={`flex overflow-hidden justify-center items-center w-full h-full ${hasLikes() === true ? 'hidden' : 'block'}`}>
                                <EmptyDataMessage styleMessage="likes" />
                            </div>

                            {/* Likes cars */}
                            <div className={`relative grid grid-cols-1 overflow-x-hidden md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 h-auto ${hasLikes() === false ? 'hidden' : 'block'}`}>
                                {
                                    likedCars.sort((a, b) => b.id - a.id).map((cars) => (
                                        <section className="h-full w-full" key={cars.id}>
                                            <RentedCarCard rentedCars={cars} stripePrices={stripePrices} />
                                        </section>
                                    ))
                                }
                            </div>
                        </section>

                        :

                        <section className="overflow-hidden h-full">
                            <div className={`flex overflow-hidden justify-center items-center w-full h-full ${hasRentedCars() === true ? 'hidden' : 'block'}`}>
                                <EmptyDataMessage styleMessage="rents" />
                            </div>

                            {/* Likes cars */}
                            <div className={`relative grid grid-cols-1 overflow-x-hidden md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 h-auto ${hasRentedCars() === false ? 'hidden' : 'block'}`}>
                                {
                                    rentedCars.sort((a, b) => b.id - a.id).map((cars) => (
                                        <section className="h-full w-full" key={cars.id}>
                                            <RentedCarCard rentedCars={cars} stripePrices={stripePrices} />
                                        </section>
                                    ))
                                }
                            </div>
                        </section>
                }
            </>
        )
    }
}

export default SectionsMyCars