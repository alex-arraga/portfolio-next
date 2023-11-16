import { NextResponse } from "next/server";
import { Stripe } from 'stripe'


export async function GET() {
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
        const prices = await stripe.prices.list()

        return NextResponse.json(prices)
    } else {
        throw new Error('The variable STRIPE_SECRET_KEY is not defined');
    }
}
