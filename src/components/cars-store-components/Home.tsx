import { fuels, yearsOfProduction } from '@/constants';
import { CustomFilter, SearchBar, CarCard, ShowMore, CustomButton, EmptyDataMessage } from '..'
import { fetchCarsAPI } from '@/app/utils'
import { HomeProps } from '@/types/cars-store-types';

export async function Home({ searchParams }: HomeProps) {

    const allCars = await fetchCarsAPI({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        year: searchParams.year || 2015,
        limit: searchParams.limit || 9,
        fuel: searchParams.fuel || 'gas',
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

                <div className='flex flex-col justify-start items-start sm:flex-row sm:justify-start max-w-md sm:items-end w-full gap-6 sm:gap-3'>
                    <div className='home_filter-container flex items-end gap-3'>
                        <CustomFilter title="fuel" options={fuels} />
                        <CustomFilter title="year" options={yearsOfProduction} />
                    </div>

                    <CustomButton
                        title='Reset filters'
                        textStyle='text-sm sm:text-base'
                        containerStyle='flex justify-center items-center max-h-9 px-2 w-1/2 shadow-sm sm:shadow-md rounded-lg bg-purple-100 hover:bg-purple-300 active:bg-purple-300 duration-200'
                        isResetButton={true}
                    />
                </div>

                {
                    !isDataEmpty ?
                        <section>
                            <div className='home__cars-wrapper w-screen'>
                                {allCars?.map((car) =>
                                    <CarCard car={car} key={Math.random()} stripePrices={[]} />
                                )}
                            </div>

                            <ShowMore
                                pageNumber={(searchParams.limit || 9) / 9}
                                isNext={(searchParams.limit || 9) > allCars.length}
                            />
                        </section>

                        :

                        <section className='flex justify-center items-center flex-col gap-2 mt-8 sm:mt-10'>
                            <EmptyDataMessage styleMessage='home' />
                        </section>
                }


            </div>
        </section>
    )
}

export default Home