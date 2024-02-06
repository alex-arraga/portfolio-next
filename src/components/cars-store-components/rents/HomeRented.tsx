import { prisma } from "@/libs/prisma";
import NavSelect from "./NavSelect";
import SectionsMyCars from "./SectionsMyCars";
import { Stripe } from 'stripe';
import { Price } from "@/types/payment-types";
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

    const loadRentedCars = async () => {
        if (user !== null) {
            const loadCars = await prisma.cars.findMany({
                where: {
                    rented: true,
                    user_clerk: user?.id,
                }
            })
            await prisma.$disconnect()
            return loadCars
        } else {
            return []
        }
    };

    const loadLikedCars = async () => {
        if (user !== null) {
            const loadCars = await prisma.cars.findMany({
                where: {
                    liked: true,
                    user_clerk: user?.id
                }
            })
            await prisma.$disconnect()
            return loadCars
        } else {
            return []
        }
    };

    const likedCars = await loadLikedCars()
    const rentedCars = await loadRentedCars()
    const prices = await loadPrices();

    return (
        <main className="relative w-screen h-full overflow-y-auto">
            <div className="h-full overflow-x-hidden bg-indigo-100">
                <section>
                    <NavSelect />
                </section>

                <section className="h-full">
                    <SectionsMyCars rentedCars={rentedCars} likedCars={likedCars} stripePrices={prices} />
                </section>
            </div>
        </main>
    )
}

export default HomeRented