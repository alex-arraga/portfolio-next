import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from 'mercadopago'
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    if (process.env.MERCADOPAGO_SECRET_KEY) {
        try {
            const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_SECRET_KEY, options: { timeout: 5000, idempotencyKey: uuidv4() } });
            const preference = new Preference(client);

            const buyer = {
                name: "John Doe",
                surname: "Billy",
                email: "johndoe@example.com",
                phone: {
                    area_code: '55',
                    number: '991234567'
                }
            };

            // Datos del producto
            const product = {
                id: "1",
                title: "Black Mouse Logitech",
                quantity: 1,
                unit_price: 500
            };

            // Crea la preferencia de pago
            const pays = await preference.create({
                body: {
                    payer: buyer,
                    items: [product]
                }
            }).then(console.log).catch(console.log);

            return NextResponse.json({
                NEXT_Message: 'Creando orden de compra',

            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    } else {
        return NextResponse.json({ Error_Message: 'No existe MERCADOPAGO_SECRET_KEY' })
    }
}