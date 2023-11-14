"use client"

import RentedCarCard from "./RentedCarCard";
import { SectionsMyCarsProps } from "@/types/cars-store";
import { useCarsContext } from '@/context/CarsContext'
import EmptyDataMessage from "../EmptyDataMessage";

export const SectionsMyCars = ({ carsRented }: SectionsMyCarsProps) => {
    const { sectionLikes } = useCarsContext()

    const hasLikes = () => {
        if (carsRented.filter((cars) => cars.liked).length >= 1) {
            return true
        }
        else {
            return false
        }
    }

    const hasRentedCars = () => {
        if (carsRented.filter((cars) => cars.rented).length >= 1) {
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
                                carsRented.filter((cars) => cars.liked).map((cars) => (
                                    cars.liked ?
                                        <section className="h-full w-full" key={cars.id}>
                                            <RentedCarCard car={cars} />
                                        </section>
                                        : ''
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
                                carsRented.map((cars) => (
                                    cars.rented ?
                                        <section className="h-full w-full" key={cars.id}>
                                            <RentedCarCard car={cars} />
                                        </section>
                                        : ''
                                ))
                            }
                        </div>
                    </section>












                // // Rented cars
                // <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 h-full overflow-y-auto mb-[calc(10vh)]">
                //     {
                //         carsRented.map((cars) => (
                //             <section className="h-full w-full overflow-hidden" key={cars.id}>
                //                 <RentedCarCard car={cars} />
                //             </section>
                //         ))
                //     }
                // </section>
            }
        </>
    )
}

export default SectionsMyCars



// carsRented.map((cars) => (
//     cars.liked !== false ?
//         <div className="h-full w-full overflow-hidden">
//             <RentedCarCard car={cars} />
//         </div>

//         :

//         <div className="h-screen w-full bg-red-500">
//             <div>
//                 <h2>NO HYA LIKEADOS</h2>
//             </div>
//         </div>
// ))