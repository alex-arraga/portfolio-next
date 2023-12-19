import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { baseApi } from '@/libs/baseURL';
import { currentUser } from '@clerk/nextjs';

// export async function POST(request: Request) {
//     const { description, id, picture_url, quantity, title, unit_price } = await request.json();
//     console.log('DATOS recibidos en API: ', description, id, picture_url, title, unit_price)

//     if (process.env.MERCADOPAGO_SECRET_TOKEN) {
//         const user = await currentUser();

//         try {
//             const preference = {
//                 items: [
//                     {
//                         id: `${id}`,
//                         title: `${title}`,
//                         currency_id: 'ARS',
//                         picture_url: `${picture_url}`,
//                         description: `${description}`,
//                         category_id: `art`,
//                         quantity: `${quantity}`,
//                         unit_price: `${unit_price}`
//                     }
//                 ],
//                 payer: {
//                     name: `${user?.firstName}`,
//                     surname: `${user?.lastName}`,
//                     email: `${user?.externalAccounts ? user?.externalAccounts[0] || user?.externalAccounts[1] : user?.emailAddresses ? user?.emailAddresses : ''}`,
//                     phone: {
//                         area_code: `${user?.primaryPhoneNumberId ? user.primaryPhoneNumberId : ''}`,
//                         number: `${user?.phoneNumbers ? user.phoneNumbers[0] : ''}`
//                     },
//                     identification: {
//                         type: `DNI`,
//                         number: `12345678`
//                     },
//                     address: {
//                         street_name: `Calle`,
//                         street_number: 123,
//                         zip_code: `3560`
//                     }
//                 },
//                 back_urls: {
//                     success: `${myHost}/payment/success`,
//                     failure: `${myHost}/payment/failure`,
//                     pending: `${myHost}/payment/pending`
//                 },
//                 auto_return: approved,
//                 payment_methods: {
//                     excluded_payment_methods: [
//                         {
//                             id: amex
//                         }
//                     ],
//                     excluded_payment_types: [
//                         {
//                             id: atm
//                         }
//                     ],
//                     installments: 6
//                 },
//                 notification_url: `${myHost}/api/payment/mercado_pago`,
//                 statement_descriptor: Carhub Store,
//                 external_reference: mlplesoj9b
//             };


//             let myHeaders = new Headers();
//             myHeaders.append('Authorization', `Bearer ${process.env.MERCADOPAGO_SECRET_TOKEN}`)

//             let requestOptions = {
//                 method: 'POST',
//                 headers: myHeaders,
//                 body: JSON.stringify(preference)
//             };

//             const request = await fetch(`${apiMp}`, requestOptions)
//             const data = await request.json()
//             console.log(data)

//             return NextResponse.json({ 'Message_MP_API': data })
//         } catch (error) {
//             throw new Error(`${error}`)
//         }
//     } else {
//         return NextResponse.json({ Error_Message: 'No existe MERCADOPAGO_SECRET_TOKEN' })
//     }
// }

export async function POST(request: Request) {
    if (process.env.MERCADOPAGO_SECRET_TOKEN) {
        const user = await currentUser()

        const client = new MercadoPagoConfig({
            accessToken: process.env.MERCADOPAGO_SECRET_TOKEN,
            options: { timeout: 5000 }
        });

        const body = await request.json()

        const myURL = process.env.NEXT_PUBLIC_BASE_URL
        const preference = new Preference(client)

        try {
            const createPreference = await preference.create({
                body: {
                    items: [
                        {
                            id: '123',
                            title: `${body.title}`,
                            category_id: 'Cars',
                            currency_id: 'ARS',
                            description: `${body.description}`,
                            quantity: body.quantity,
                            unit_price: body.unit_price
                        }
                    ],
                    payer: {
                        name: `${user?.firstName}`,
                        surname: `${user?.lastName}`,
                        email: `${user?.externalAccounts ? user?.externalAccounts[0] || user?.externalAccounts[1] : user?.emailAddresses ? user?.emailAddresses : ''}`,
                        phone: {
                            area_code: `${user?.primaryPhoneNumberId ? user.primaryPhoneNumberId : ''}`,
                            number: `${user?.phoneNumbers ? user.phoneNumbers[0] : ''}`
                        },
                        identification: {
                            type: 'DNI',
                            number: '12345678'
                        },
                        address: {
                            street_name: 'Calle',
                            street_number: 123,
                            zip_code: '1111'
                        }
                    },
                    auto_return: 'approved',
                    back_urls: {
                        success: myURL,
                        failure: myURL
                    },
                    payment_methods: {
                        excluded_payment_methods: [
                            {
                                id: 'amex'
                            }
                        ],
                        excluded_payment_types: [
                            {
                                id: 'atm'
                            }
                        ],
                        installments: 6
                    },
                    notification_url: `${baseApi}/payment/mercado_pago/notify`,
                    statement_descriptor: 'Carhub Store',
                }
            });

            console.log(createPreference)

            return NextResponse.json({
                status: createPreference.api_response.status,
                URL: `${createPreference.init_point}`,
                successURL: createPreference.redirect_urls?.success,
                failureURL: createPreference.redirect_urls?.failure
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        return NextResponse.json({ Error_Message: 'MPSecretKey not exist' })
    }
}