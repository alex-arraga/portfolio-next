import { fetchCarsAPI, renameClasses } from "@/app/utils"
import { CarCardProps, HomeProps } from "@/types/cars-store";
import {
    YearFilter,
    PriceRangeFilter,
    SearchBarDashboard,
    TypesCars,
} from "@/components/index";

export async function AsideFilters({ searchParams }: HomeProps) {
    const classCounter: { [classes: string]: number } = {};

    const allCars = await fetchCarsAPI({
        manufacturer: '',
        model: '',
        year: 2020,
        limit: 500,
        fuel: '',
    });

    const cityAutonomy = allCars.map((car: CarCardProps) => car.city_mpg)
    const combinationAutonomy = allCars.map((car: CarCardProps) => car.combination_mpg)

    const minAutonomy = cityAutonomy.reduce((a: number, b: number) => Math.min(a, b))
    const maxAutonomy = combinationAutonomy.reduce((a: number, b: number) => Math.max(a, b))

    // Counts the number of times the same "car class" appears.
    allCars.forEach((car: CarCardProps) => {
        let classCar = car.class;
        let finalClass = renameClasses(classCar)

        if (!classCounter[finalClass]) {
            classCounter[finalClass] = 1;
        } else {
            classCounter[finalClass]++;
        }
    });

    // Avoid repetition of 'class' properties
    const uniqueCarClasses = Object.keys(classCounter);

    return (
        <div className="w-1/4 relative h-screen border-r-2 border-gray-200 overflow-y-auto">
            <div className="flex flex-col justify-start items-start p-10">

                {/* Search bar */}
                <div className="relative w-full">
                    <h2 className="text-gray-400 uppercase font-medium text-[12px]">Search</h2>
                    <div className="flex items-center w-full relative mt-5">
                        <SearchBarDashboard />
                    </div>
                </div>

                {/* Years filter */}
                <div className="relative w-full mt-10">
                    <h2 className="text-gray-400 uppercase font-medium text-[12px]">Year</h2>
                    <YearFilter />
                </div>

                {/* Types */}
                <div className="mt-10">
                    <h2 className="text-gray-400 uppercase font-medium text-[12px]">Type</h2>
                    <div className="mt-5">
                        {uniqueCarClasses.map((classCars) => (
                            <TypesCars classCars={classCars} classCounter={classCounter} />
                        ))}
                    </div>
                </div>

                {/* Price range */}
                <div className="relative w-full mt-10 mb-20">
                    <h2 className="text-gray-400 uppercase font-medium text-[12px]">Price</h2>
                    <PriceRangeFilter maxAutonomy={maxAutonomy} minAutonomy={minAutonomy} />
                </div>

            </div>
        </div>
    )
}

export default AsideFilters