"use client"

import { deleteAllParams } from "@/app/utils";
import { CustomButtonProps } from "@/types/cars-store"
import { baseApi } from "@/libs/baseURL";
import Image from "next/image"

function CustomButton({ title,
    containerStyle,
    textStyle,
    handleClick,
    btnType,
    rightIcon,
    leftIcon,
    priceId,
    infoPreferenceMp,
    isPayButton,
    isResetButton,
    urlPayAPI }: CustomButtonProps) {

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
                            if (infoPreferenceMp !== undefined || null) {
                                try {
                                    const response = await fetch(`${baseApi}/payment/mercado_pago`, {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            title: infoPreferenceMp?.carName,
                                            description: infoPreferenceMp?.description,
                                            quantity: infoPreferenceMp?.quantity,
                                            unit_price: 20
                                        })
                                    })

                                    const data = await response.json()
                                    console.log(data)
                                    window.location.href = data.URL
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
                                    })

                                    const response = await res.json()
                                    window.location.href = response.url
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
