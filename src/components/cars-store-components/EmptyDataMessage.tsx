import { EmptyDataMessageProps } from '@/types/cars-store-types'
import Image from 'next/image'
import Link from 'next/link'

export function EmptyDataMessage({ searchParams, styleMessage }: EmptyDataMessageProps) {
    return (
        <>
            {
                styleMessage === 'likes' ?
                    <section className="flex items-center justify-center bg-orange-50 p-10 xl:max-h-72 md:p-20 rounded-xl md:rounded-2xl m-5 sm:m-10 md:m-20">
                        <div className="flex flex-col relative gap-2 h-full justify-start items-start">

                            <div className='flex gap-4 w-full'>
                                <h2 className='text-black font-bold text-base sm:text-xl md:text-2xl'>Likes not found!</h2>
                                <div className="flex justify-center items-center bg-red-300 p-1 md:p-2 rounded-full">
                                    <Image
                                        src='/heart-broken.svg'
                                        alt="likes not found"
                                        width={20}
                                        height={20}
                                        className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px]"
                                    />
                                </div>
                            </div>

                            <p className="mt-6 text-xs sm:text-sm md:text-base">You dont have cars with <span className="font-semibold text-blue-500">likes</span> yet, to like a vehicle <span className="font-semibold text-blue-500">simply click on the heart icon, </span>at the top right of the vehicles cards!</p>
                        </div>
                    </section>


                    : styleMessage === 'rents' ?

                        <section className="bg-orange-50 p-10 xl:max-h-72 md:p-20 rounded-xl md:rounded-2xl m-5 sm:m-10 md:m-20">
                            <div className="flex flex-col relative gap-2 h-full justify-start items-start">

                                <div className='flex gap-4 w-full'>
                                    <h2 className='text-black font-bold text-base sm:text-xl md:text-2xl'>Rented cars not found!</h2>
                                    <div className="flex justify-center items-center bg-red-300 p-1 md:p-2 rounded-full">
                                        <Image
                                            src='/coin-off.svg'
                                            alt="rented cars not found"
                                            width={20}
                                            height={20}
                                            className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px]"
                                        />
                                    </div>
                                </div>

                                <p className="mt-6 text-xs sm:text-sm md:text-base">You dont have <span className="font-semibold text-blue-500">cars rented</span> yet, to rented a vehicle simply click on the button<span className="font-semibold text-blue-500"> &#34;Rent Car&#34; </span> on the <Link className="font-semibold underline hover:text-blue-700 duration-300" href='/projects/cars-store/dashboard'>dashboard</Link> section!</p>
                            </div>
                        </section>

                        :

                        <section className={`p-10 md:p-20 rounded-xl md:rounded-2xl ${styleMessage === 'home' ? 'bg-indigo-100 m-6' : 'bg-orange-50 m-10 md:m-20'}`}>
                            <div className="flex relative gap-2 h-full justify-start items-center">
                                <div className='flex justify-start items-center gap-2 w-full'>
                                    <h2 className='text-black font-bold text-base sm:text-xl md:text-2xl'>Oops, no results!</h2>
                                    <p className='text-2xl'>😅</p>
                                </div>
                            </div>
                            <p className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base">The <span className="font-semibold text-blue-500">model</span> you are looking for does not exist in the year <span className="font-semibold text-blue-500">{searchParams?.year}</span> or is not found in our Database. <br /> <span className="font-semibold">Please try changing the year, name of model</span> or search again, thank you!</p>
                        </section>

            }
        </>
    )
}

export default EmptyDataMessage