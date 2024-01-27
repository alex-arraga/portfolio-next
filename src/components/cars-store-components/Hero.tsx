"use client"

import Image from "next/image"
import { CustomButton } from ".."
import { useRouter } from 'next/navigation'

function Hero() {
    const router = useRouter()

    return (
        <section className="hero">
            <div className="flex-1 mt-24 md:mt-32 xl:mt-36 padding-x">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                    Buy the car of your dreams
                </h1>

                <p className="text-xl md:text-3xl text-black-100 font-light mt-6">
                    Speed up your experience by buying the car you have always dreamed of, and visualize your next destination.
                </p>

                <CustomButton
                    title="Explore cars "
                    containerStyle="bg-primary-blue hover:bg-blue-700 duration-200 rounded-full mt-6 md:mt-8 xl:mt-10"
                    textStyle="text-sm sm:text-base md:text-lg text-white font-medium"
                    handleClick={() => router.push('/projects/cars-store/dashboard')}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero-ford-evos.png"
                        alt="hero"
                        fill
                        sizes="1500px"
                        priority
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </section>
    )
}

export default Hero