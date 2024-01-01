import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { prisma } from "@/libs/prisma";
import { UpdateApprobedOrderParams } from "@/types/payment";

export async function POST(req: NextRequest) {
    if (req.url && req.url?.includes('?')) {
        if (process.env.MERCADOPAGO_SECRET_TOKEN) {
            try {
                const client = new MercadoPagoConfig({
                    accessToken: process.env.MERCADOPAGO_SECRET_TOKEN,
                    options: { timeout: 5000 }
                });

                const payment = new Payment(client);

                const approbedOrder = async ({ orderId, status, statusDetail, payResource, installments, fee, netAmount }: UpdateApprobedOrderParams) => {
                    try {
                        // Update order to "sucess"
                        await prisma.order.update({
                            where: {
                                order_id: orderId
                            },
                            data: {
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

                            payment.get({
                                id: paymentId,
                            })
                                .then(data => {
                                    console.log(data)
                                    const id = data.id!;
                                    const installments = data.installments || null;
                                    const fee = data.fee_details![0].amount || null;
                                    const statusDetail = data.status_detail || null;
                                    const netAmount = data.transaction_details!.net_received_amount || null;
                                    const status = data.status!;
                                    const orderId = data.metadata.order_id!;
                                    const payResource = data.payment_method!.type || null;

                                    if (id.toString() === paymentId && status === 'approved') {
                                        approbedOrder({ orderId, status, statusDetail, payResource, installments, fee, netAmount })
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