"use client"

import Image from "next/image"
import { PaymentComprobantProps } from "@/types/payment"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { renameClasses } from "@/app/utils"

function PaymentComprobant({ isOpen, closeModal, car, payment, priceSuscription }: PaymentComprobantProps) {

    const carDate = car.created_at.toLocaleString().replace(/,(.*)/, ' ');
    const carHour = car.created_at.toLocaleString().replace(/(.*),/, ' ').slice(0, -3)
    const hasMonthlyPlan = payment?.pay_status_detail === 'recurrent_suscription';

    const priceDay = payment?.price ? payment?.price / payment?.duration_rented : undefined;
    const priceDaySuscription = payment?.duration_rented ? priceSuscription / payment?.duration_rented : undefined;


    return (
        <>
            {
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
                                            <Dialog.Panel className={'relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-slate-50 p-4 md:p-6 text-left shadow-xl transition-all flex flex-col gap-5'}>

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

                                                <div className="flex flex-col justify-start items-center my-2 sm:my-4 md:my-6 p-2 rounded-md">
                                                    <h1 className="border-b-2 border-indigo-300 text-sm sm:text-base md:text-lg xl:text-xl text-black font-semibold">Payment Comprobant</h1>

                                                    <section className="bg-white border-4 border-gray-200 rounded-md p-4 md:p-6 my-6 w-full">
                                                        <ul className="flex flex-col justify-between text-black capitalize gap-2 text-txt_10 sm:text-xs md:text-sm">

                                                            {/* DATE */}
                                                            <h2 className="flex justify-center bg-indigo-200 my-4 p-1 rounded-md font-semibold">Payment date</h2>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">date</h3>
                                                                <p>
                                                                    {carDate}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">hour</h3>
                                                                <p>
                                                                    {carHour}
                                                                </p>
                                                            </li>


                                                            {/* CAR DATA */}
                                                            <h2 className="flex justify-center bg-indigo-200 my-4 p-1 rounded-md font-semibold">Car data</h2>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">car rented</h3>
                                                                <p>
                                                                    {car.make} {car.model}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">transmission</h3>
                                                                <p>
                                                                    {car.transmission === 'a' ? 'Automatic' : 'Manual'}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">drive</h3>
                                                                <p>
                                                                    {car.drive.toUpperCase()}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">year</h3>
                                                                <p>
                                                                    {car.year}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">fuel</h3>
                                                                <p>
                                                                    {car.fuel_type}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">class</h3>
                                                                <p>
                                                                    {renameClasses(car.class)}
                                                                </p>
                                                            </li>


                                                            {/* PAYMENT */}
                                                            <h2 className="flex justify-center bg-indigo-200 my-4 p-1 rounded-md font-semibold">Payment details</h2>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">payment ID</h3>
                                                                <p>
                                                                    {payment?.payment_id?.length! > 10 ? payment?.payment_id?.slice(0, 10) + '...' : payment?.payment_id}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">payment status</h3>
                                                                <p>
                                                                    {payment?.pay_status === 'approved' ? 'paid' : payment?.pay_status}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">payment type</h3>
                                                                <p>
                                                                    {hasMonthlyPlan ? 'Monthly suscription' : 'Daily rent'}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">payment service</h3>
                                                                <p>
                                                                    {payment?.pay_method === 'mercado_pago' ? 'Mercado Pago' : 'Stripe'}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">payment method</h3>
                                                                <p>
                                                                    {payment?.pay_resource?.split('_').join(' ')}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">installments</h3>
                                                                <p>
                                                                    {payment?.installments}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">duration</h3>
                                                                <p>
                                                                    {payment?.duration_rented} days
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between">
                                                                <h3 className="font-medium">cost per day</h3>
                                                                <p>
                                                                    ARS ${hasMonthlyPlan ? priceDaySuscription?.toLocaleString() : priceDay?.toLocaleString()}
                                                                </p>
                                                            </li>
                                                            <li className="flex justify-between items-center bg-teal-300 mt-2 p-2 rounded-md">
                                                                <h3 className="font-medium">total cost:</h3>
                                                                <p className="text-sm md:text-base font-semibold text-medium">
                                                                    ARS ${hasMonthlyPlan ? priceSuscription : payment?.price}
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </section>
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

export default PaymentComprobant