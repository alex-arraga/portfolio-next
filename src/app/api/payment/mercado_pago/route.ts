import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { myHost, apiMp } from "@/libs/baseURL";

export async function GET(request: Request) {
    // const { description, id, picture_url, quantity, title, unit_price } = await request.json();
    // console.log('DATOS recibidos en API: ', description, id, picture_url, title, unit_price)

    if (process.env.MERCADOPAGO_SECRET_TOKEN) {
        const user = await currentUser();

        try {
            // let preference = {
            //     items: [
            //         {
            //             id: `${id}`,
            //             title: `${title}`,
            //             currency_id: 'ARS',
            //             picture_url: `${picture_url}`,
            //             description: `${description}`,
            //             category_id: `art`,
            //             quantity: `${quantity}`,
            //             unit_price: `${unit_price}`
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
            //     notification_url: `${myHost}/api/payment/mercado_pago`,
            //     statement_descriptor: "Carhub Store",
            //     external_reference: "mlplesoj9b"
            // };


            let myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${process.env.MERCADOPAGO_SECRET_TOKEN}`)

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                // body: JSON.stringify(preference)
            };

            const request = await fetch(`${apiMp}`, requestOptions)
            const data = await request.json()
            console.log(data)

            return NextResponse.json({ 'Message_MP_API': data })
        } catch (error) {
            throw new Error(`${error}`)
        }
    } else {
        return NextResponse.json({ Error_Message: 'No existe MERCADOPAGO_SECRET_TOKEN' })
    }
}