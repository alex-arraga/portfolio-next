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
        <main className='relative w-screen max-h-screen'>
            <div className='h-screen overflow-y-auto w-screen bg-indigo-100'>
                {
                    !isDataEmpty ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 min-h-screen overflow-y-auto mb-[calc(20vh)]">
                            {allCars?.map((car: CarCardProps) =>
                                <div className="h-full w-full overflow-hidden">
                                    <CarCard car={car} styleCard="dashboard" />
                                </div>
                            )}
                        </section>

                    ) : (

                        <section className='flex w-full h-full items-center justify-center'>
                            <div className=" bg-gray-50 p-10 md:p-20 rounded-xl md:rounded-2xl m-10 mb-32">
                                <div className="flex relative gap-2 h-full justify-start items-center">
                                    <h2 className='text-black font-bold text-[16px] sm:text-[20px] md:text-[24px]'>Oops, no results!</h2>
                                    <div className="bg-orange-200 p-2 rounded-full">
                                        <Image
                                            src={'/alert-triangle.svg'}
                                            alt="alert"
                                            width={25}
                                            height={25}
                                            className="w-[16px] h-[16px]"
                                        />
                                    </div>
                                </div>
                                <p className="mt-6 text-[12px] sm:text-[14px] md:text-[16px]">The <span className="font-semibold text-blue-500">model</span> you are looking for does not exist in the year <span className="font-semibold text-blue-500">{searchParams.year}</span>, or is not found <br /> in our Database, <span className="font-semibold">please try changing the year, name of model</span> or search again, thank you!</p>
                            </div>
                        </section>
                    )
                }
            </div>
        </main >

    )
}

export default Dashboard


