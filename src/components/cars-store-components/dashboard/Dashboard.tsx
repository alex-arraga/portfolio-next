import CarCard from "../CarCard";
import { CarCardProps, DashboardProps } from "@/types/cars-store-types";
import EmptyDataMessage from "../EmptyDataMessage";
import { Price } from "@/types/payment-types";
import { Stripe } from 'stripe'

const loadPrices = async (): Promise<Price[]> => {
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const prices = await stripe.prices.list();
        return prices.data as Price[];
    } else {
        throw new Error('The variable STRIPE_SECRET_KEY is not defined');
    }
};

async function Dashboard({ searchParams, allCars }: DashboardProps) {
    const prices = await loadPrices();
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


    return (
        <main className='flex justify-center bg-indigo-100 mt-[calc(7rem)]'>
            <section className="w-full max-w-[2000px]">
                {
                    !isDataEmpty ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 sm:p-6 md:p-10 min-h-screen">
                            {allCars?.map((car: CarCardProps) => (
                                <div className="h-full w-full overflow-hidden" key={Math.random()}>
                                    <CarCard car={car} stripePrices={prices} styleCard="dashboard" />
                                </div>
                            ))}
                        </section>

                    ) : (

                        <section className='flex w-full h-full items-center justify-center'>
                            <EmptyDataMessage searchParams={searchParams} />
                        </section>
                    )
                }
            </section>
        </main >
    )
}

export default Dashboard


