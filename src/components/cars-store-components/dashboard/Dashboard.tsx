import { fetchCarsAPI } from "@/app/utils";
import CarCard from "../CarCard";
import { CarCardProps, HomeProps } from "@/types/cars-store";
import Image from "next/image";

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
        // <main className='relative max-h-screen'>
        //     <div className='h-screen overflow-y-auto w-full'>
        //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-10 min-h-screen overflow-y-auto md:mb-[calc(20vh)] bg-indigo-100">
        //             {allCars.map((car: CarCardProps) => (
        //                 <div className="h-full w-full overflow-y-auto">
        //                     <CarCard car={car} styleCard="dashboard" />
        //                 </div>
        //             ))
        //             }
        //         </div>
        //     </div>
        // </main>

        <main className='relative w-screen max-h-screen'>
            <div className='h-screen overflow-y-auto w-screen'>
                {
                    !isDataEmpty ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-10 min-h-screen overflow-y-auto md:mb-[calc(20vh)] bg-indigo-100">
                            {allCars?.map((car: CarCardProps) =>
                                <div className="h-full w-full overflow-hidden">
                                    <CarCard car={car} styleCard="dashboard" />
                                </div>
                            )}
                        </section>

                    ) : (

                        <section className='flex w-screen h-screen items-center justify-center'>
                            <div className="xl:mb-28 bg-indigo-100 p-20 rounded-2xl">
                                <div className="flex relative gap-2 h-full justify-start items-center">
                                    <h2 className='text-black font-bold text-xl'>Oops, no results!</h2>
                                    <div className="bg-orange-200 p-2 rounded-full">
                                        <Image
                                            src={'/alert-triangle.svg'}
                                            alt="alert"
                                            width={25}
                                            height={25}
                                            className=""
                                        />
                                    </div>
                                </div>
                                <p className="mt-6">The <span className="font-semibold text-blue-500">model</span> you are looking for does not exist or is not found in our Database, please search again, thank you!</p>
                            </div>
                        </section>
                    )
                }
            </div>
        </main >

    )
}

export default Dashboard


