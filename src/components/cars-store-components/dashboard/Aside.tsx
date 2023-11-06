import AsideComponent from "./AsideComponent";
import { fetchCarsAPI } from "@/app/utils"
import { HomeProps } from "@/types/cars-store";

export async function Aside({ searchParams }: HomeProps) {
    const allCars = await fetchCarsAPI({
        manufacturer: '',
        model: '',
        year: 2020,
        limit: 500,
        fuel: '',
    });

    return (
        <>
            <AsideComponent allCars={allCars} />
        </>
    )
}

export default Aside


