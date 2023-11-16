"use client"

import { PlansCardProps } from "@/types/payment"
import { CustomButton } from ".."

export function PlansCard({ stripePrices }: PlansCardProps) {

    const plans = stripePrices

    return (
        <section className='relative flex flex-col w-full h-full rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full m-4 gap-4 mx-4 text-[14px] font-light'>
                {plans.sort((a, b) => a.unit_amount - b.unit_amount).map((plan) => (
                    <div className={`relative flex flex-col justify-start items-start md:h-[300px] w-full ${plan.nickname === 'Basic Plan' ? 'bg-gray-200' : plan.nickname === 'Premium Plan' ? 'bg-blue-200' : 'bg-violet-200'} rounded-xl`} key={plan.id}>
                        <h1 className="flex justify-center items-center w-full text-[16px] font-semibold my-4">{plan.nickname}</h1>
                        <h2 className="flex justify-center w-full text-[20px] font-semibold mb-4 rounded-md">
                            USD $<span className="text-violet-600">{plan.unit_amount / 100}</span>/month
                        </h2>
                        <p className="mx-4 text-[14px]">
                            {
                                plan.nickname === 'Basic Plan' ?
                                    'A selection of standard range family vehicles, ideal for your day to day life or family trips. This plan includes brands recognized for their reliability and comfort, offering affordable options for your needs.'

                                    : plan.nickname === 'Premium Plan' ?
                                        'Immerse yourself in the experience of our selection of mid-range cars and vans, a collection of vehicles with superior amenities and technology. The focus is on providing vehicles of the highest level and performance.'

                                        :
                                        'Discover the thrill of our exclusive lineup of sports cars, designed to offer a superior level of performance and style. Enjoy power and elegance with our selection of high-end automobiles.'
                            }
                        </p>
                        <div className="flex justify-center items-center w-full h-full my-4">
                            <CustomButton
                                title="I want this plan"
                                containerStyle=" bg-primary-blue hover:bg-blue-800 duration-300 rounded-md w-full h-full max-w-[200px] max-h-[40px]" textStyle="font-medium text-white"
                                isPayButton={true}
                                priceId={plan.id}
                                urlPayAPI="/api/checkout"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PlansCard