import { HeaderCars, Dashboard, Footer } from '@/components'
import { HomeProps } from '@/types/cars-store-types'
import { fetchCarsAPI } from '@/app/utils';

async function page({ searchParams }: HomeProps) {

    const cars = await fetchCarsAPI({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        year: searchParams.year || 2015,
        limit: 50,
        fuel: searchParams.fuel || '',
        city_mpg: searchParams.city_mpg || undefined,
        transmission: searchParams.transmission || ''
    });

    return (
        <div className='h-full w-full overflow-y-auto overflow-x-hidden bg-cars'>
            <HeaderCars searchParams={searchParams} />
            <Dashboard searchParams={searchParams} allCars={cars ? cars : []} />
            <Footer />
        </div>
    )
}

export default page