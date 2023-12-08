import { fuels, yearsOfProduction } from '@/constants';
import { CustomFilter, SearchBar, CarCard, ShowMore, CustomButton } from '..'
import { fetchCarsAPI } from '@/app/utils'
import { HomeProps } from '@/types/cars-store';

export async function Home({ searchParams }: HomeProps) {

    const allCars = await fetchCarsAPI({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        year: searchParams.year || 2015,
        limit: searchParams.limit || 9,
        fuel: searchParams.fuel || '',
    });

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <section className='mt-8 padding-x padding-y max-width' id='discover'>

            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                <p>Explore the cars your might like</p>
            </div>

            <div className='home__filters'>
                <SearchBar />

                <div className='home_filter-container flex items-end gap-3'>
                    <CustomFilter title="fuel" options={fuels} />
                    <CustomFilter title="year" options={yearsOfProduction} />
                    <CustomButton
                        title='Reset filters'
                        containerStyle='flex items-center max-h-[38px] shadow-md rounded-lg bg-indigo-100 hover:bg-indigo-400 hover:text-white duration-200'
                        isResetButton={true}
                    />
                </div>

                {
                    !isDataEmpty ?
                        <section>
                            <div className='home__cars-wrapper w-screen'>
                                {allCars?.map((car) =>
                                    <CarCard car={car} stripePrices={[]} />
                                )}
                            </div>

                            <ShowMore
                                pageNumber={(searchParams.limit || 9) / 9}
                                isNext={(searchParams.limit || 9) > allCars.length}
                            />
                        </section>

                        :

                        <section className='home__error-container'>
                            <h2 className='text-black text-xl'>Oops no results</h2>
                            <p>{allCars.message}</p>
                        </section>
                }


            </div>
        </section>
    )
}

export default Home