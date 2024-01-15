"use client"

import { useState } from 'react'
import { NewOrderProps, PaymentButtonProps } from '@/types/payment';
import { useCarsContext } from '@/context';
import { baseApi } from '@/libs/baseURL';
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image';

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

    const [isLoading, setIsLoading] = useState('')
    const { newOrder } = useCarsContext()
    const uuid = uuidv4();


    return (
        <div>
            <button
                disabled={false}
                className={`custom-btn ${containerStyle}`}
                onClick={async () => {

                    // MERCADO PAGO - Payment
                    if (mercadoPago) {
                        try {
                            setIsLoading('loading')
                            // Create order with "pending" status and data
                            const order: NewOrderProps = await newOrder(car, uuid, durationRent, costRent, undefined);
                            const description = `${car!.make} ${car!.model} ${car!.transmission === 'a' ? 'AT' : 'MT'} - ${car!.year}`;

                            // Create the preference, with order data that was created
                            const response = await fetch(`${baseApi}/payment/mercado_pago`, {
                                method: 'POST',
                                body: JSON.stringify({
                                    order_id: order.order_id,
                                    car_description: description.toUpperCase(),
                                    quantity: durationRent,
                                    unit_price: costRent
                                })
                            });

                            setIsLoading('loaded')

                            // Return the API response with payment link, creating the mp preference
                            const data = await response.json();

                            // If API response is ok, redirect to payment URL
                            if (data.status === 200 || 201) {
                                window.location.href = data.URL;
                            } else {
                                console.error('Error mp request')
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }

                    // STRIPE - Payment
                    if (stripe) {
                        try {
                            setIsLoading('loading')
                            const order: NewOrderProps = await newOrder(car, uuid, durationRent, undefined, suscription);

                            if (order) {
                                const res = await fetch(`${urlPayAPI}`, {
                                    method: 'POST',
                                    credentials: 'include',
                                    body: JSON.stringify({
                                        price_id: priceId,
                                        order_id: order.order_id
                                    })
                                });

                                setIsLoading('loaded')

                                const response = await res.json();
                                window.location.href = response.url;
                            }

                        } catch (error) {
                            console.log(error)
                        }
                    }
                }}
            >
                {isLoading === 'loading' ?
                    <div className="animate-spin bg-gradient-to-r h-6 w-6 from-purple-300 to-blue-400" />

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

export default PaymentButton