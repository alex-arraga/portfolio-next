import { NextResponse } from "next/server";
import { Stripe } from 'stripe'
import { prisma } from "@/libs/prisma";
import { settingOrder } from "@/app/utils";

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

                if (event.type == 'invoice.payment_succeeded' || event.type == 'invoice.payment_failed') {
                    const payData = event.data.object
                    const amount = payData.amount_paid / 100
                    const fee = amount * 0.055;

                    console.log('🎈🎈', payData)


                    const status = payData.status!
                    const statusDetail = 'recurrent_suscription'
                    const typeService = 'stripe'
                    const payResource = 'card'
                    const installments = 1
                    const paymentId = payData.id
                    const netAmount = amount - fee ?? undefined
                    const orderId = payData.subscription_details?.metadata?.order_id!

                    settingOrder({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
                    console.log('Se actualizo la base de datos')
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
