import AsideComponent from "./AsideComponent";
import { fetchCarsAPI } from "@/app/utils"
import { HomeProps } from "@/types/cars-store";

export async function Aside({ searchParams }: HomeProps) {
    const allCars = await fetchCarsAPI({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        year: searchParams.year || 2015,
        limit: 500,
        fuel: searchParams.fuel || '',
        city_mpg: searchParams.city_mpg,
        transmission: searchParams.transmission || ''
    });

    return (
        <>
            <AsideComponent allCars={allCars} searchParams={searchParams} />
        </>
    )
}

export default Aside


