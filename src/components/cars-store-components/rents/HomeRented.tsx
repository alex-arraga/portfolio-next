import { prisma } from "@/libs/prisma";
import NavSelect from "./NavSelect";
import SectionsMyCars from "./SectionsMyCars";
import { Stripe } from 'stripe';
import { Price } from "@/types/payment";
import { currentUser } from "@clerk/nextjs";


const loadPrices = async (): Promise<Price[]> => {
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const prices = await stripe.prices.list();
        return prices.data as Price[];
    } else {
        throw new Error('The variable STRIPE_SECRET_KEY is not defined');
    }
};

export const HomeRented = async () => {
    const user = await currentUser()

    const rentedCars = await prisma.cars.findMany({
        where: {
            user_clerk: user?.id
        }
    })

    const prices = await loadPrices();

    return (
        <main className="relative w-screen h-full overflow-y-auto">
            <div className="h-full overflow-x-hidden bg-indigo-100">
                <section>
                    <NavSelect />
                </section>

                <section className="h-full">
                    <SectionsMyCars rentedCars={rentedCars} stripePrices={prices} />
                </section>
            </div>
        </main>
    )
}

export default HomeRented