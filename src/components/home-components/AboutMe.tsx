"use client"

import Image from "next/image"
import { useUser } from "@clerk/nextjs";

function AboutMe() {
    const user = useUser();
    const fullNameUser = user.user?.fullName;
    const userName = user.user?.username;

    return (
        <div className="flex justify-end w-full h-full mb-2 md:mb-6 xl:mb-10">
            <div className="p-4 md:p-6 xl:p-8 w-full md:w-2/3">
                <h1 className="my-4 md:my-6 xl:my-10 font-bold text-xl md:text-3xl xl:text-4xl text-gray-100" > Hola <span className="text-orange-200 capitalize">{fullNameUser ? fullNameUser : userName ? userName?.replace(/[0-9-_]+/g, ' ') : 'internauta'}</span>, <br /> soy Alex! 😁</h1>
                <p className="leading-6 text-sm md:text-base text-gray-300">Soy Full Stack Developer y Diseñador UX/UI, <span className="font-semibold text-white">con intenciones de especializarme en el mundo Backend</span>, ya que la lógica de negocio de este último campo me resulta atrapante. Un rasgo particular en mí, es que busco aportar mis conocimientos y aprender del intercambio de ideas que se generan en un equipo, con el fin de cumplir los objetivos. Tengo experiencia trabajando en atención al público e hice algunos trabajos como Freelancer siendo Diseñador UX / UI, espero que pronto podamos conocernos y trabajar juntos 😉</p>
            </div>

            <div className="relative hidden md:block md:w-1/3 h-full">
                <Image
                    src={'/me.png'}
                    alt="me"
                    fill
                    sizes="1000px"
                    priority
                    className="object-cover rounded-2xl hidden md:block"
                />
            </div>
        </div>
    )
}

export default AboutMe