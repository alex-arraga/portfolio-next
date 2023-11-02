"use client"

import '@/css/cars-store.css'

import Image from "next/image"
import { CustomButton } from ".."
import { useRouter } from 'next/navigation'

function Hero() {
    const router = useRouter()

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">

                <h1 className="hero__title">
                    Buy the car of your dreams
                </h1>

                <p className="hero__subtitle">
                    Speed up your experience by buying the car you have always dreamed of, and visualize your next destination.
                </p>

                <CustomButton
                    title="Explore cars"
                    containerStyle="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={() => router.push('/projects/cars-store/dashboard')}
                />

            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero-ford-evos.png" alt="hero" fill className="object-contain" />
                </div>
                <div className="hero__image-overlay" />
            </div>

        </div>
    )
}

export default Hero