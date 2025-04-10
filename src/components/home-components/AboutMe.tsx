"use client"

import Image from "next/image"
import { useUser } from "@clerk/nextjs";

function AboutMe() {
    const user = useUser();
    const fullNameUser = user.user?.fullName;
    const userName = user.user?.username;

    return (
        <section className="flex justify-between w-full h-full mb-2 md:mb-6 xl:mb-10">
            <div className="w-full md:w-2/3">
                <h1 className="mb-6 md:mb-8 xl:mb-10 font-bold text-xl md:text-3xl xl:text-4xl text-gray-100" > Hola <span className="text-orange-200 capitalize">{fullNameUser ? fullNameUser : userName ? userName?.replace(/[0-9-_]+/g, ' ') : 'internauta'}</span>, <br /> soy Alex! 😁</h1>
                <p className="leading-6 text-sm md:text-base text-gray-300">
                    <span className="font-semibold text-white">
                        Soy Diseñador UX/UI y Fullstack Developer
                    </span>
                    <span className="">
                        , con una fuerte orientación al backend, actualmente estoy especializándome en el desarrollo de aplicaciones robustas y escalables usando Go
                    </span>
                    <span>
                        . Durante un tiempo trabajé como diseñador UX/UI, lo que me dio una fuerte base en diseño centrado en el usuario. Además, mi paso por atención al cliente me enseñó la importancia de la empatía y la resolución de problemas en equipo.
                    </span>
                </p>
            </div>

            <div className="absolute hidden xl:block w-full max-w-xs h-full right-0 top-0">
                <Image
                    src='/me.png'
                    alt="me"
                    fill
                    priority
                    className="object-cover rounded-2xl hidden md:block"
                />
            </div>
        </section>
    )
}

export default AboutMe