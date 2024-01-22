import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { settingOrder } from "@/app/utils";
import { MercadoPagoPaymentSchema } from "@/schemas/zod-schemas";


export async function POST(req: NextRequest) {
    if (req.url && req.url?.includes('?')) {
        if (process.env.MERCADOPAGO_SECRET_TOKEN) {
            try {
                const client = new MercadoPagoConfig({
                    accessToken: process.env.MERCADOPAGO_SECRET_TOKEN,
                    options: { timeout: 5000 }
                });

                const payment = new Payment(client);

                // query
                const queryUrl = req.url.slice(req.url.indexOf('?') + 1).split('&');
                const dataQuery: Array<{ key: string; value: string }> = [];

                // Get all querys
                queryUrl.map(item => {
                    const key = item.split('=')[0]
                    const value = item.split('=')[1]

                    dataQuery.push({ key, value })
                });

                // Obtain id payment
                if (dataQuery.length > 1) {
                    dataQuery.map((item) => {
                        if (item.key === 'data.id') {
                            const paymentId = item.value;

                            // Obtains payment and saves the transaction, whether successful or rejected.
                            payment.get({
                                id: paymentId,
                            })
                                .then(data => {
                                    // Zod
                                    const check = MercadoPagoPaymentSchema.safeParse(data)

                                    if (check.success) {
                                        const typeService = "mercado_pago"
                                        const id = data.id!;
                                        const installments = data.installments ?? undefined;
                                        const fee = data.fee_details?.[0]?.amount ?? undefined;
                                        const statusDetail = data.status_detail ?? undefined;
                                        const netAmount = data.transaction_details?.net_received_amount ?? undefined;
                                        const status = data.status ?? undefined;
                                        const orderId = data.external_reference!;
                                        const payResource = data.payment_method?.type ?? undefined;

                                        // If payment exist update the order
                                        if (id.toString() === paymentId) {
                                            settingOrder({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
                                        }
                                    } else {
                                        console.log(check.error)
                                    }
                                })
                                .catch(e => console.log(e));
                        } else {
                            console.error('Error params: data.id not exist')
                            return NextResponse.json({ status: 500, Error_Message: 'Error params: data.id not exist' })
                        }
                    })
                };

                return NextResponse.json({ status: 200 })
            } catch (error) {
                console.error(error)
            }
        } else {
            console.error('SECRET_TOKEN not exist')
            return NextResponse.json({ status: 500, Error_Message: 'SECRET_TOKEN not exist' })
        }
    } else {
        console.error('Query parameters not exist')
        return NextResponse.json({ status: 500, Error_Message: 'Query parameters not exist' })
    }
}