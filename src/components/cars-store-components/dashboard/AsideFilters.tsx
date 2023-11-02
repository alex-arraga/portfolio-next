import { fetchCarsAPI } from "@/app/utils"
import { CarCardProps, HomeProps } from "@/types/cars-store";
import Image from "next/image"
import AgeFilter from "./AgeFilter";
import PriceRangeFilter from "./PriceRangeFilter";

export async function AsideFilters({ searchParams }: HomeProps) {
    const carClassCounts: { [classes: string]: number } = {};

    const allCars = await fetchCarsAPI({
        manufacturer: '',
        model: '',
        year: 2021,
        limit: 500,
        fuel: '',
    });

    const cityAutonomy = allCars.map((car: CarCardProps) => car.city_mpg)
    const combinationAutonomy = allCars.map((car: CarCardProps) => car.city_mpg)

    const minAutonomy = cityAutonomy.reduce((a: number, b: number) => Math.min(a, b))
    const maxAutonomy = combinationAutonomy.reduce((a: number, b: number) => Math.max(a, b))


    // Counts the number of times the same "car class" appears.
    allCars.forEach((car: CarCardProps) => {
        const classCar = car.class;
        if (!carClassCounts[classCar]) {
            carClassCounts[classCar] = 1;
        } else {
            carClassCounts[classCar]++;
        }
    });

    // Avoid repetition of 'class' properties
    const uniqueCarClasses = Object.keys(carClassCounts);

    return (
        <div className="w-1/4 relative h-[calc(100vh)] border-r-2 border-gray-200 overflow-y-auto">
            <div className="flex flex-col justify-start items-start h-screen p-10">

                {/* Search bar */}
                <h2 className="text-gray-400 uppercase font-medium text-[12px]">Search</h2>
                <div className="flex items-center w-full relative mt-5">
                    <Image src={'/search.svg'}
                        alt="magnifyng glass"
                        width={20}
                        height={20}
                        className="absolute left-4 opacity-30"
                    />
                    <input type="text"
                        placeholder="Search by brand"
                        className="bg-gray-100 w-full h-8 rounded-full text-[12px] font-light px-12" />
                </div>

                {/* Years filter */}
                <div className="relative w-full mt-10">
                    <h2 className="text-gray-400 uppercase font-medium text-[12px]">Year</h2>
                    <AgeFilter yearCars={allCars} />
                </div>

                {/* Price range */}
                <PriceRangeFilter maxAutonomy={maxAutonomy} minAutonomy={minAutonomy} />

                {/* Types */}
                <div className="mt-10">
                    <h2 className="text-gray-400 uppercase font-medium text-[12px]">Type</h2>
                    <div className="mt-5 mb-10">
                        {uniqueCarClasses.map((classCar) => (
                            <div key={Math.random()} className="flex gap-2 items-center">
                                <input type="checkbox" className={'checked:accent-sky-600 w-4 h-4 rounded-sm'} />

                                <h2 className="capitalize text-gray-500 font-light py-1">
                                    {classCar} <span className="text-sm font-medium opacity-50">({carClassCounts[classCar]})</span>
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideFilters