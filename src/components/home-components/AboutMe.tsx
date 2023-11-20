import Image from "next/image"

function AboutMe() {
    return (
        <div className="flex justify-end w-full h-full mb-10">
            <div className="p-10 w-2/3">
                <h1 className="my-10 font-bold text-3xl text-gray-200" > Hola Alejandro, <br /> soy Alex! 😁</h1>
                <p className="text-gray-200">Soy Backend Developer con experiencia en Node.js y en múltiples tecnologías de desarrollo web. Siempre intento a aportar mis conocimientos con el objetivo de ayudar al equipo a cumplir los objetivos, y me mantengo abierto a aprender e incorporar nuevos conocimientos. Además de lenguajes Backend, también tengo conocimientos en Diseño UX/UI y en algunas herramientas de desarrollo Frontend como CSS, Taildwind y React.</p>
            </div>

            <div className="relative w-1/3 h-full">
                <Image
                    src={'/me.png'}
                    alt="me"
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
        </div>
    )
}

export default AboutMe