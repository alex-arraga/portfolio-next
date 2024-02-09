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
        <section className='flex justify-center items-center mt-6 md:mt-4 padding-x padding-y w-full' id='discover'>
            <main className='w-full max-w-[2000px]'>
                <div className='flex flex-col items-start justify-start gap-2 md:gap-3 text-black-100'>
                    <h1 className='text-2xl sm:text-3xl xl:text-4xl font-extrabold'>Car Catalogue</h1>
                    <p className='text-sm sm:text-base'>Explore the cars your might like</p>
                </div>

                <div className='mt-6 md:mt-10 xl:mt-12 w-full flex-1 items-center flex-wrap gap-5'>
                    <SearchBar />

                    <div className='flex flex-col justify-start items-start sm:flex-row sm:justify-start max-w-md sm:items-end w-full gap-5 sm:gap-6'>
                        <div className='flex items-end gap-3'>
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
            </main>
        </section>
    )
}

export default Home