"use client"

import RentedCarCard from "./RentedCarCard";
import { SectionsMyCarsProps } from "@/types/cars-store";
import { useCarsContext } from '@/context/CarsContext'
import EmptyDataMessage from "../EmptyDataMessage";


export const SectionsMyCars = ({ rentedCars, stripePrices, likedCars }: SectionsMyCarsProps) => {
    const { sectionLikes } = useCarsContext()

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

    return (
        <>
            {
                sectionLikes === true ?
                    <section className="overflow-hidden h-full">
                        <div className={`flex overflow-hidden justify-center items-center w-full h-full ${hasLikes() === true ? 'hidden' : 'block'}`}>
                            <EmptyDataMessage styleMessage="likes" />
                        </div>

                        {/* Likes cars */}
                        <div className={`relative grid grid-cols-1 overflow-x-hidden md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 h-full overflow-y-auto mb-[calc(10vh)] ${hasLikes() === false ? 'hidden' : 'block'}`}>
                            {
                                likedCars.map((cars) => (
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
                        <div className={`relative grid grid-cols-1 overflow-x-hidden md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 h-full overflow-y-auto mb-[calc(10vh)] ${hasRentedCars() === false ? 'hidden' : 'block'}`}>
                            {
                                rentedCars.map((cars) => (
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

export default SectionsMyCars