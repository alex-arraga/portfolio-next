"use client"

import { useState } from 'react'
import { NewOrderProps, PaymentButtonProps } from '@/types/payment-types';
import { useCarsContext } from '@/context';
import { baseApi } from '@/libs/baseURL';
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image';
import { sendMessage } from '@/app/utils/sendMessage';

function PaymentButton({
    title,
    containerStyle,
    textStyle,
    rightIcon,
    leftIcon,
    priceId,
    mercadoPago,
    stripe,
    car,
    costRent,
    suscription,
    durationRent,
    urlPayAPI }: PaymentButtonProps) {

    const [isLoading, setIsLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState(false)

    const context = useCarsContext()

    const uuid = uuidv4();

    if (context) {
        const { newOrder } = context

        return (
            <div>
                <button
                    disabled={errorLoading}
                    className={`custom-btn ${errorLoading ? 'disabled:bg-gray-600 disabled:bg-opacity-30' : ''} ${containerStyle}`}
                    onClick={async () => {

                        // MERCADO PAGO - Payment
                        if (mercadoPago) {
                            try {
                                setIsLoading(true)
                                // Create order with "pending" status and data
                                const order: NewOrderProps = await newOrder(car, uuid, durationRent, costRent, undefined);
                                const description = `${car!.make} ${car!.model} ${car!.transmission === 'a' ? 'AT' : 'MT'} - ${car!.year}`;

                                // Create the preference, with order data that was created
                                if (order.order_id) {
                                    const response = await fetch(`${baseApi}/payment/mercado_pago`, {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            order_id: order.order_id,
                                            car_description: description.toUpperCase(),
                                            quantity: durationRent,
                                            unit_price: costRent
                                        })
                                    });


                                    if (response.ok) {
                                        // Convert the response in json, this have the payment link
                                        setIsLoading(false)
                                        const data = await response.json();

                                        if (data.status === 200 || 201) {
                                            // If data have status 200 or 201, redirect to payment URL
                                            window.location.href = data.URL;
                                        }
                                    } else {
                                        throw new Error('Error: Mercado Pago API request failed')
                                    }
                                }
                            } catch (error) {
                                setIsLoading(false)
                                setErrorLoading(true)
                                console.log(error)
                                await sendMessage(`Error in MP button, ${error}`)
                            }
                        }

                        // STRIPE - Payment
                        if (stripe) {
                            try {
                                setIsLoading(true)
                                const order: NewOrderProps = await newOrder(car, uuid, durationRent, undefined, suscription);

                                if (order) {
                                    const response = await fetch(`${urlPayAPI}`, {
                                        method: 'POST',
                                        credentials: 'include',
                                        body: JSON.stringify({
                                            price_id: priceId,
                                            order_id: order.order_id
                                        })
                                    });

                                    if (response.ok) {
                                        setIsLoading(false)
                                        const data = await response.json();

                                        window.location.href = data.url;
                                    } else {
                                        throw new Error('Error: Stripe API request failed')
                                    }
                                }
                            } catch (error) {
                                setIsLoading(false)
                                setErrorLoading(true)
                                console.log(error)
                            }
                        }
                    }}
                >
                    {
                        mercadoPago && isLoading ?
                            <div className='flex justify-between items-center px-2 gap-3 w-full h-full'>
                                <p className='text-black text-xs sm:text-sm  font-medium'>Loading...</p>
                                <div className='bg-gradient-to-r animate-spin h-4 w-4 bg-blue-500' />
                            </div>

                            : isLoading ?

                                <div className='flex justify-between items-center px-2 gap-3 w-full h-full'>
                                    <p className='text-white text-xs sm:text-sm  font-medium'>Loading...</p>
                                    <div className='bg-gradient-to-r animate-spin h-4 w-4 bg-blue-200' />
                                </div>

                                : errorLoading ?

                                    <div className='flex justify-between items-center px-2 gap-2 w-full h-full bg-transparent'>
                                        <p className='text-gray-700 text-xs sm:text-sm font-medium'>Load failure</p>
                                        <p className='text-base'>😥</p>
                                    </div>

                                    :

                                    <>
                                        {leftIcon && (
                                            <div className="relative w-6 h-6">
                                                <Image
                                                    src={leftIcon}
                                                    alt="right icon"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                        <span className={`flex-1 ${textStyle}`}>
                                            {title}
                                        </span>
                                        {rightIcon && (
                                            <div className="relative w-6 h-6">
                                                <Image
                                                    src={rightIcon}
                                                    alt="right icon"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </>
                    }
                </button>
            </div>
        )
    }
}

export default PaymentButton