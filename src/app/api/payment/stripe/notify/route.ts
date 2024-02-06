import { NextResponse } from "next/server";
import { Stripe } from 'stripe'
import { settingOrder } from "@/app/utils";
import { StripeInvoicePaymentSchema } from "@/schemas/zod-schemas";
import { NextApiResponse } from "next";
import { sendMessage } from "@/app/utils/sendMessage";

export async function POST(request: Request, response: NextApiResponse) {
    response.status(200)

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-10-16"
    })

    const payload = await request.text();
    const signature = request.headers.get('stripe-signature');
    const webhookSecret = process.env.STRIPE_WEBHOOK_KEY!;

    let event: Stripe.Event | null;

    if (signature && webhookSecret) {
        try {
            event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)

            if (event.type == 'invoice.payment_succeeded' || event.type == 'invoice.payment_failed') {
                const check = StripeInvoicePaymentSchema.safeParse(event)

                if (check.success) {
                    const payData = event.data.object
                    const amount = payData.amount_paid / 100

                    const status = payData.status!
                    const statusDetail = 'recurrent_suscription'
                    const typeService = 'stripe'
                    const payResource = 'card'
                    const installments = 1
                    const paymentId = payData.id
                    const fee = amount * 0.055;
                    const netAmount = amount - fee ?? undefined
                    const orderId = payData.subscription_details?.metadata?.order_id!

                    await settingOrder({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
                } else {
                    console.log(check.error)
                    await sendMessage(check.error.message)
                }
            }

        } catch (error) {
            console.log(error)
            return NextResponse.json({ Webhook_Error: error }, { status: 500 })
        }
    } else {
        return NextResponse.json({ Webhook_Error: 'Signature or endpoint not exist' })
    }
}

