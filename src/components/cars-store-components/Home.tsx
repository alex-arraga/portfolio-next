import { fuels, yearsOfProduction } from '@/constants';
import { CustomFilter, SearchBar, CarCard } from '..'
import { fetchCarsAPI } from '@/app/utils'


export async function Home({ searchParams }: { searchParams: any }) {
    const allCars = await fetchCarsAPI({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        year: searchParams.year || 2022,
        limit: searchParams.limit || 10,
        fuel: searchParams.fuel || ''
    })

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


    return (
        <div className='mt-8 padding-x padding-y max-width' id='discover'>

            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                <p>Explore the cars yout might like</p>
            </div>

            <div className='home__filters'>
                <SearchBar />

                <div className='home_filter-container flex gap-3'>
                    <CustomFilter title="fuel" options={fuels} />
                    <CustomFilter title="year" options={yearsOfProduction} />
                </div>

                {
                    !isDataEmpty ? (
                        <section>
                            <div className='home__cars-wrapper w-screen'>
                                {allCars?.map((car) =>
                                    <CarCard car={car} />
                                )}
                            </div>
                        </section>
                    ) : (
                        <section className='home__error-container'>
                            <h2 className='text-black text-xl'>Oops no results</h2>
                            <p>{allCars.message}</p>
                        </section>
                    )
                }


            </div>
        </div>
    )
}

export default Home