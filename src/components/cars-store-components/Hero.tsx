"use client"

import '@/css/cars-store.css'

import Image from "next/image"
import { CustomButton } from ".."

function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">

                <h1 className="hero__title">
                    Encontrá, rentá o comprá el auto de tus sueños - Rápido y al mejor precio
                </h1>

                <p className="hero_subtitle">
                    Agilizá tu experiencia alquilando o comprando los mejoes coches con nuestro sencillo proceso de reserva sin esfuerzo.
                </p>

                <CustomButton
                    title="Explorar autos"
                    containerStyle="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />

                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/hero.png" alt="hero" fill className="object-contain" />
                        <Image src="/hero-bg.png" alt='hero-bg' fill className='hero__image-overlay' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero