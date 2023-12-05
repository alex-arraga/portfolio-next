import { Aside, Navbar, Dashboard } from '@/components'
import { HomeProps } from '@/types/cars-store'
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
        <div className='max-h-screen overflow-hidden'>
            <Navbar otherClasses='bg-white relative border-b-2 border-gray-200' />
            <Aside searchParams={searchParams} />
            <Dashboard searchParams={searchParams} allCars={cars} />
        </div>
    )
}

export default page