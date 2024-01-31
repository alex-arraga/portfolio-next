import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { baseApi, myHost } from '@/libs/baseURL';
import { currentUser } from '@clerk/nextjs';
import { v4 as uuidv4 } from 'uuid';
import { BodyPreferenceMp } from '@/types/api-types';
import { PreferenceMercadoPagoSchema } from '@/schemas/zod-schemas';


export async function POST(request: Request) {
    const user = await currentUser();
    const uuid = uuidv4();

    const client = new MercadoPagoConfig({
        accessToken: process.env.MERCADOPAGO_SECRET_TOKEN!,
        options: { timeout: 5000 }
    });

    const body: BodyPreferenceMp = await request.json();
    const preference = new Preference(client);

    try {
        const createPreference = await preference.create({
            body: {
                items: [
                    {
                        id: uuid,
                        title: body.car_description,
                        category_id: 'Cars',
                        currency_id: 'ARS',
                        description: 'Rented vehicle - CarHub',
                        quantity: body.quantity,
                        unit_price: body.unit_price
                    }
                ],
                external_reference: body.order_id,
                payer: {
                    name: `${user?.firstName}`,
                    surname: `${user?.lastName}`,
                    email: `${user?.externalAccounts ? user?.externalAccounts[0] || user?.externalAccounts[1] : user?.emailAddresses ? user?.emailAddresses : ''}`,
                    phone: {
                        area_code: `${user?.primaryPhoneNumberId ? user.primaryPhoneNumberId : ''}`,
                        number: `${user?.phoneNumbers ? user.phoneNumbers[0] : ''}`
                    },
                },
                auto_return: 'approved',
                back_urls: {
                    success: `${myHost}/projects/cars-store/rents`,
                    failure: `${myHost}/projects/cars-store/rents`
                },
                payment_methods: {
                    excluded_payment_methods: [
                        {
                            id: 'amex'
                        }
                    ],
                    excluded_payment_types: [
                        {
                            id: 'atm',
                        }
                    ],
                    installments: 6,
                },
                notification_url: `${baseApi}/payment/mercado_pago/notify`,
                statement_descriptor: 'Carhub Store'
            }
        });

        // Zod
        const check = PreferenceMercadoPagoSchema.safeParse(createPreference)

        if (check.success) {
            return NextResponse.json({
                status: createPreference.api_response.status,
                URL: createPreference.init_point,
            })

        } else {
            console.log(check.error)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500, error })
    }
} 