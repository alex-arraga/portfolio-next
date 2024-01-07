"use client"

import { deleteAllParams } from "@/app/utils";
import { CustomButtonProps } from "@/types/cars-store"
import { baseApi } from "@/libs/baseURL";
import Image from "next/image"
import { useCarsContext } from "@/context";
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import { NewOrderProps } from "@/types/payment";

function CustomButton({ title,
    containerStyle,
    textStyle,
    handleClick,
    btnType,
    rightIcon,
    leftIcon,
    priceId,
    isPayButton,
    isResetButton,
    isMercadoPagoPay,
    car,
    costDayRent,
    durationRent,
    urlPayAPI }: CustomButtonProps) {


    const { newOrder } = useCarsContext()
    const uuid = uuidv4();
    const [isLoading, setIsLoading] = useState('');

    return (
        <>
            {
                isPayButton ?
                    <button
                        disabled={false}
                        type={btnType || "button"}
                        className={`custom-btn ${containerStyle}`}
                        onClick={async () => {

                            // MERCADO PAGO - Payment
                            if (isMercadoPagoPay) {
                                try {
                                    setIsLoading('loading')
                                    // Create order with "pending" status and data
                                    const order: NewOrderProps = await newOrder(car, uuid, durationRent, costDayRent);
                                    const description = `${car!.make} ${car!.model} ${car!.transmission === 'a' ? 'AT' : 'MT'} - ${car!.year}`;

                                    // Create the preference, with order data that was created
                                    const response = await fetch(`${baseApi}/payment/mercado_pago`, {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            order_id: order.order_id,
                                            car_description: description.toUpperCase(),
                                            quantity: durationRent,
                                            unit_price: costDayRent
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

                                // STRIPE - Payment
                            } else {
                                try {
                                    setIsLoading('loading')
                                    const order: NewOrderProps = await newOrder(car, uuid, 1, costDayRent);

                                    const res = await fetch(`${urlPayAPI}`, {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            price_id: priceId,
                                            order_id: order.order_id
                                        }),
                                        credentials: 'include'
                                    });

                                    setIsLoading('loaded')

                                    const response = await res.json();
                                    window.location.href = response.url;

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

                    : isResetButton ?
                        <button
                            disabled={false}
                            type={btnType || "button"}
                            className={`custom-btn ${containerStyle}`}
                            onClick={() => deleteAllParams()}
                        >
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
                        </button>

                        :

                        <button
                            disabled={false}
                            type={btnType || "button"}
                            className={`custom-btn ${containerStyle}`}
                            onClick={handleClick}
                        >
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
                        </button>
            }
        </>
    )
}

export default CustomButton