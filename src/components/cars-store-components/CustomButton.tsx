"use client"

import { deleteAllParams } from "@/app/utils";
import { CustomButtonProps } from "@/types/cars-store"
import { baseApi } from "@/libs/baseURL";
import Image from "next/image"
import { useCarsContext } from "@/context";
import { v4 as uuidv4 } from 'uuid'

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
    costRent,
    urlPayAPI }: CustomButtonProps) {


    const { newOrder } = useCarsContext()
    const uuid = uuidv4();

    return (
        <>
            {
                isPayButton ?
                    <button
                        disabled={false}
                        type={btnType || "button"}
                        className={`custom-btn ${containerStyle}`}
                        onClick={async () => {

                            // Mercado Pago payment
                            if (isMercadoPagoPay) {
                                try {
                                    // Crea una order en estado "pending" con todos los datos
                                    const order = await newOrder(car, uuid, 1, costRent);
                                    const description = `${car!.make} ${car!.model} ${car!.transmission === 'a' ? 'AT' : 'MT'} - ${car!.year}`;

                                    // Crea la preferencia, tomando los datos de la order creada
                                    const response = await fetch(`${baseApi}/payment/mercado_pago`, {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            id: order.order_id,
                                            description: description.toUpperCase(),
                                            quantity: order.duration_rented,
                                            unit_price: costRent
                                        })
                                    });

                                    // // Me devuelve el la response de la API con el link del pago, una vez se crea la preferencia
                                    const data = await response.json();

                                    // // Si la respuesta de la API fue correcta, me redirecciona al url del pago
                                    if (data.status === 200 || 201) {
                                        window.location.href = data.URL;
                                    } else {
                                        console.error('Error mp request')
                                    }
                                } catch (error) {
                                    console.log(error)
                                }

                                // Stripe payment
                            } else {
                                try {
                                    console.log(priceId)
                                    const res = await fetch(`${urlPayAPI}`, {
                                        method: 'POST',
                                        body: JSON.stringify({ priceId }),
                                        credentials: 'include'
                                    });

                                    const response = await res.json();
                                    window.location.href = response.url;
                                } catch (error) {
                                    console.log(error)
                                }
                            }
                        }}
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


// const preference = {
//     items: [
//         {
//             id: `${infoPreferenceMp?.id}`,
//             title: `${infoPreferenceMp?.carName}`,
//             currency_id: 'ARS',
//             picture_url: `${infoPreferenceMp?.picture_url}`,
//             description: `${infoPreferenceMp?.description}`,
//             category_id: `art`,
//             quantity: `${infoPreferenceMp?.quantity}`,
//             unit_price: `${infoPreferenceMp?.unit_price}`
//         }
//     ],
//     payer: {
//         name: `${user?.firstName}`,
//         surname: `${user?.lastName}`,
//         email: `${user?.externalAccounts ? user?.externalAccounts[0] || user?.externalAccounts[1] : user?.emailAddresses ? user?.emailAddresses : ''}`,
//         phone: {
//             area_code: `${user?.primaryPhoneNumberId ? user.primaryPhoneNumberId : ''}`,
//             number: `${user?.phoneNumbers ? user.phoneNumbers[0] : ''}`
//         },
//         identification: {
//             type: `DNI`,
//             number: `12345678`
//         },
//         address: {
//             street_name: `Calle`,
//             street_number: 123,
//             zip_code: `3560`
//         }
//     },
//     back_urls: {
//         success: `${myHost}/payment/success`,
//         failure: `${myHost}/payment/failure`,
//         pending: `${myHost}/payment/pending`
//     },
//     auto_return: "approved",
//     payment_methods: {
//         excluded_payment_methods: [
//             {
//                 id: "amex"
//             }
//         ],
//         excluded_payment_types: [
//             {
//                 id: "atm"
//             }
//         ],
//         installments: 6
//     },
//     // notification_url: `${myHost}/api/payment/mercado_pago`,
//     statement_descriptor: "Carhub Store",
//     external_reference: "mlplesoj9b"
// };

// ---------------- BUTTON --------------------------

// if (infoPreferenceMp !== undefined || null) {
//     const myHeaders = new Headers();
//     myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_MERCADOPAGO_SECRET_TOKEN}`)

//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: JSON.stringify(preference)
//     };

//     try {
//         console.log(infoPreferenceMp)
//         console.log(`${myHost}/api/payment/mercado_pago`)

//         const request = await fetch(`${apiMp}`, requestOptions)
//         const data = await request.json()

//         console.log('DATA:', data)

//     } catch (error) {
//         console.log(error)
//     }
