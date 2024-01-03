import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { prisma } from "@/libs/prisma";
import { SettingOrderParams } from "@/types/payment";

export async function POST(req: NextRequest) {
    if (req.url && req.url?.includes('?')) {
        if (process.env.MERCADOPAGO_SECRET_TOKEN) {
            try {
                const client = new MercadoPagoConfig({
                    accessToken: process.env.MERCADOPAGO_SECRET_TOKEN,
                    options: { timeout: 5000 }
                });

                const payment = new Payment(client);

                const settingOrder = async ({ paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount }: SettingOrderParams) => {
                    if (status === 'approved') {
                        try {
                            // Update order to "sucess" and "rented" prop of cars to "true"
                            await prisma.order.update({
                                where: {
                                    order_id: orderId
                                },
                                data: {
                                    payment_id: paymentId,
                                    pay_status: status,
                                    pay_resource: payResource,
                                    pay_status_detail: statusDetail,
                                    installments: installments,
                                    fee: fee,
                                    net_received_amount: netAmount,
                                    pay_method: "mercado_pago"
                                }
                            })

                            // Update car to change "rented = true"
                            await prisma.cars.update({
                                where: {
                                    order_id: orderId
                                },
                                data: {
                                    rented: true
                                }
                            })
                        } catch (error) {
                            console.log(error)
                        }
                    } else {
                        try {
                            // If payment status isn't approved, update status order to "rejected" and delete de created car
                            await prisma.order.update({
                                where: {
                                    order_id: orderId
                                },
                                data: {
                                    payment_id: paymentId,
                                    pay_status: status,
                                    pay_resource: payResource,
                                    pay_status_detail: statusDetail,
                                    installments: installments,
                                    fee: fee,
                                    net_received_amount: netAmount,
                                    pay_method: "mercado_pago"
                                }
                            })

                            // Delete created car
                            await prisma.cars.delete({
                                where: {
                                    order_id: orderId
                                }
                            })
                        } catch (error) {
                            console.log(error)
                        }
                    }
                };

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
                                        settingOrder({ paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
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