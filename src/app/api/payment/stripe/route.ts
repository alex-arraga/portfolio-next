import { NextResponse } from "next/server";
import { Stripe } from 'stripe'
import { baseClientProjectsURL } from "@/libs/baseURL";
import { BodyPayloadStripe } from "@/types/api-types";
import { StripeSessionSchema } from "@/schemas/zod-schemas";

export async function POST(request: Request) {
    const { price_id, order_id }: BodyPayloadStripe = await request.json()

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
            apiVersion: "2023-10-16"
        })

        const session = await stripe.checkout.sessions.create({
            currency: "usd",
            mode: "subscription",
            subscription_data: { metadata: { order_id: order_id } },
            payment_method_types: ["card"],
            line_items: [
                {
                    price: price_id,
                    quantity: 1
                }
            ],
            success_url: `${baseClientProjectsURL}/cars-store/rents`,
            cancel_url: `${baseClientProjectsURL}/cars-store/dashboard`
        })

        const check = StripeSessionSchema.safeParse(session)

        if (check.success) {
            return NextResponse.json({ url: session.url })
        } else {
            console.log(check.error)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ Error_Message: error })
    }
}