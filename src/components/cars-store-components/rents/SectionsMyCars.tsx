"use client"

import RentedCarCard from "./RentedCarCard";
import { SectionsMyCarsProps } from "@/types/cars-store";
import { useCarsContext } from '@/context/CarsContext'
import EmptyDataMessage from "../EmptyDataMessage";
import { baseApi } from "@/libs/baseURL";
import { toast } from "sonner";

export const SectionsMyCars = ({ rentedCars, stripePrices }: SectionsMyCarsProps) => {
    const { sectionLikes, isClientLoaded } = useCarsContext()

    const rejectedOrder = async (paymentId: string) => {
        try {
            await fetch(`${baseApi}/payment/order/${paymentId}`, {
                method: 'DELETE',
                credentials: 'include'
            })

            await fetch(`${baseApi}/projects/cars-store/${paymentId}`, {
                method: 'DELETE',
                credentials: 'include'
            })

            return toast.error('The payment was rejected')
        } catch (error) {
            console.log(error)
        }
    }

    if (isClientLoaded) {
        const searchParams = new URLSearchParams(window.location.search);
        const statusParam = searchParams.get('status')
        const paymentIdParam = searchParams.get('payment_id')

        if (statusParam === 'rejected' && paymentIdParam) {
            rejectedOrder(paymentIdParam)
        }
    }


    const hasLikes = () => {
        if (rentedCars.filter((cars) => cars.liked).length >= 1) {
            return true
        }
        else {
            return false
        }
    }

    const hasRentedCars = () => {
        if (rentedCars.filter((cars) => cars.rented).length >= 1) {
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
                                rentedCars.filter((cars) => cars.liked).map((cars) => (
                                    cars.liked ?
                                        <section className="h-full w-full" key={cars.id}>
                                            <RentedCarCard rentedCars={cars} stripePrices={stripePrices} />
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
                                rentedCars.map((cars) => (
                                    cars.rented ?
                                        <section className="h-full w-full" key={cars.id}>
                                            <RentedCarCard rentedCars={cars} stripePrices={stripePrices} />
                                        </section>
                                        : ''
                                ))
                            }
                        </div>
                    </section>
            }
        </>
    )
}

export default SectionsMyCars