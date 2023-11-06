import { fetchCarsAPI } from "@/app/utils";
import CarCard from "../CarCard";
import { CarCardProps } from "@/types/cars-store";

async function Dashboard() {
    const allCars = await fetchCarsAPI({
        manufacturer: '',
        model: '',
        year: 2015,
        limit: 500,
        fuel: '',
    });


    return (
        <main className='relative max-h-screen'>
            <div className='h-screen overflow-y-auto w-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-10 py-0 mb-20">
                    {allCars.map((car: CarCardProps) => (
                        <div className="">
                            <CarCard car={car} styleCard="dashboard" />
                        </div>
                    ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Dashboard