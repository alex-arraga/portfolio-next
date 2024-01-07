import { NextResponse } from "next/server";
import { Stripe } from 'stripe'
import { prisma } from "@/libs/prisma";

export async function POST(request: Request) {
    if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2023-10-16"
        })

        const payload = await request.text()
        const signature = request.headers.get('stripe-signature')
        const webhookSecret = process.env.STRIPE_WEBHOOK_KEY

        let event: Stripe.Event | null

        if (signature && webhookSecret) {
            try {
                event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)
                // console.log('TYPE EVENT: ', event.type)

                switch (event.type) {
                    case 'invoice.payment_succeeded':
                        const payData = event.data.object

                        const paymentId = payData.id
                        const paymentStatus = payData.status
                        const fee = payData.application_fee_amount ?? undefined
                        const amount = payData.amount_paid / 100 ?? undefined
                        const paymentMethod = payData.payment_settings.payment_method_types?.toString() ?? undefined
                        const orderId = payData.subscription_details?.metadata?.order_id ?? undefined

                        // console.log('ID PAY: ', paymentId)
                        // console.log('STATUS PAY:', paymentStatus)
                        // console.log('FEE: ', fee)
                        // console.log('AMOUNT: ', amount)
                        // console.log('PAY METHOD: ', paymentMethod)
                        // console.log('ORDER: ', orderId)

                        if (paymentStatus === 'paid') {
                            // Update order to "success" and "rented" prop of cars to "true"
                            await prisma.order.update({
                                where: {
                                    order_id: orderId
                                },
                                data: {
                                    payment_id: paymentId,
                                    pay_status: 'approved',
                                    net_received_amount: amount,
                                    pay_method: "stripe"
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
                            console.log('Se actualizo la base de datos')
                        } else {
                            await prisma.order.update({
                                where: {
                                    order_id: orderId
                                },
                                data: {
                                    payment_id: paymentId,
                                    pay_status: paymentStatus,
                                    net_received_amount: amount,
                                    pay_method: "stripe"
                                }
                            })
                            console.log('Se rechazo el pago')
                        }

                        break;
                    // ... handle other event types
                    // default:
                    //     console.log(`Unhandled event type ${event.type}`);
                }

                return NextResponse.json({ status: 200 })
            } catch (error) {
                return NextResponse.json({ status: 400, Webhook_Error: error })
            }
        } else {
            return NextResponse.json({ Webhook_Error: 'sig or endpoint not exist' })
        }
    } else {
        return NextResponse.json({ Webhook_Error: 'STRIPE_SECRET_KEY not exist' })
    }
}
