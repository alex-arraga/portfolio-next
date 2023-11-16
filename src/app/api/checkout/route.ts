import { NextResponse } from "next/server";
import { Stripe } from 'stripe'
import { baseClientURL } from "@/libs/baseURL";

export async function POST(request: Request) {
    const { priceId } = await request.json()

    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            success_url: `${baseClientURL}/cars-store/rents`,
            cancel_url: `${baseClientURL}/cars-store/dashboard`
        })

        return NextResponse.json({ url: session.url })
    } else {
        throw new Error('The variable STRIPE_SECRET_KEY is not defined')
    }
}