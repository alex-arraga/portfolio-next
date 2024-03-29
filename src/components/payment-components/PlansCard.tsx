"use client"

import { PlansCardProps } from "@/types/payment-types"
import { PaymentButton } from ".."

export function PlansCard({ car, stripePrices }: PlansCardProps) {

    const plans = stripePrices

    return (
        <section className='relative flex flex-col rounded-xl'>
            {/* Inactive Stripe - 0 */}
            <div className="flex justify-center items-center w-full my-4">
                <p className="text-xs sm:text-sm 2xl:text-base font-medium text-black w-full text-center bg-orange-100 rounded-md items-center p-2 border-2 border-orange-200">
                    ⚠️ These are <span className="font-semibold text-violet-700">Stripe</span> payment plans, they are disabled because I don&#39;t have an account.... But in case of your interest, I can show you that it works.
                    <br/>
                    You can see the Stripe integration code on my GitHub: <span className="font-semibold">alex-arraga/portfolio-next</span>
                </p>
            </div>

            <div className='grid auto-cols-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full md:m-4 gap-4 text-sm font-light'>
                {plans.sort((a, b) => a.unit_amount - b.unit_amount).map((plan) => (
                    <div className={`relative flex flex-col justify-start items-start h-auto md:h-[300px] w-full ${plan.nickname === 'Basic Plan' ? 'bg-blue-200' : plan.nickname === 'Premium Plan' ? 'bg-violet-200' : 'bg-orange-100'} rounded-xl`} key={plan.id}>
                        <h1 className="flex justify-center items-center w-full text-base font-semibold my-4">{plan.nickname}</h1>
                        <h2 className="flex justify-center w-full text-xl font-semibold mb-4 rounded-md">
                            USD $<span className="text-violet-600">{plan.unit_amount / 100}</span>/month
                        </h2>
                        <p className="mx-4 text-sm">
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
                            <PaymentButton
                                stripe={true}
                                title="I want this plan"
                                // Inactive Stripe - 1
                                
                                // containerStyle="bg-primary-blue hover:bg-blue-800 duration-300 rounded-md w-auto h-auto"
                                // textStyle="font-medium text-white"
                                containerStyle="bg-gray-300 rounded-md w-auto h-auto"
                                textStyle="font-medium text-gray-400"
                                priceId={plan.id}
                                car={car}
                                suscription={plan.unit_amount / 100}
                                durationRent={plan.nickname === 'Basic Plan' ? 30 : plan.nickname === 'Premium Plan' ? 60 : 90}
                                urlPayAPI="/api/payment/stripe"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PlansCard