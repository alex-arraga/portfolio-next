import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { settingOrder } from "@/app/utils";


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
                if (dataQuery.length > 0) {
                    dataQuery.map((item) => {
                        if (item.key === 'data.id') {
                            const paymentId = item.value;

                            // Obtains payment and saves the transaction, whether successful or rejected.
                            payment.get({
                                id: paymentId,
                            })
                                .then(data => {
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
                                })
                                .catch(e => console.log(e));
                        }
                    })
                };

                return NextResponse.json({ status: 200 })
            } catch (error) {
                console.log(error)
            }
        } else {
            return NextResponse.json({ Error_Message: 'SECRET_TOKEN not exist' })
        }
    } else {
        return NextResponse.json({ Error_Message: 'Query parameters not exist' })
    }
}