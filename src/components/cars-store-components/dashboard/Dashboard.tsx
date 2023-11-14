import { fetchCarsAPI } from "@/app/utils";
import CarCard from "../CarCard";
import { CarCardProps, HomeProps } from "@/types/cars-store";
import Image from "next/image";
import EmptyDataMessage from "../EmptyDataMessage";

async function Dashboard({ searchParams }: HomeProps) {
    const allCars = await fetchCarsAPI({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        year: searchParams.year || 2015,
        limit: 500,
        fuel: searchParams.fuel || '',
        city_mpg: 25,
        transmission: searchParams.transmission
    });

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className='relative w-screen max-h-screen'>
            <div className='h-screen overflow-y-auto w-screen bg-indigo-100'>
                {
                    !isDataEmpty ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 min-h-screen overflow-y-auto mb-[calc(18vh)]">
                            {allCars?.map((car: CarCardProps) => (
                                <div className="h-full w-full overflow-hidden">
                                    <CarCard car={car} styleCard="dashboard" />
                                </div>
                            ))}
                        </section>

                    ) : (

                        <section className='flex w-full h-full items-center justify-center'>
                            <EmptyDataMessage searchParams={searchParams} />
                        </section>
                    )
                }
            </div>
        </main >

    )
}

export default Dashboard


