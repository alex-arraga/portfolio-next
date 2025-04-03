import Image from "next/image"

function WorkExperience() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-3xl xl:text-4xl font-medium text-gray-100">
                    Experiencia Laboral
                </h2>
                <Image
                    src='/job.png'
                    alt="job icon"
                    height={500}
                    width={500}
                    className="object-contain h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                />
            </div>
            <ul className="flex flex-col gap-6 text-xs md:text-sm xl:text-base text-gray-300">
                <li>
                    <div className="w-full flex justify-between">
                        <h3 className="font-semibold text-gray-100">Diseñador UX/UI - Ajenda</h3>
                        <span className="text-gray-300">01/02/2023 - 30/05/2023</span>
                    </div>
                    <p className="leading-5 text-xs xl:text-sm">
                        <br /> - Diseño de componentes e interfaces
                        <br /> - Colaboración con desarrolladores
                    </p>
                </li>
                <li>
                    <div className="w-full flex justify-between">
                        <h3 className="font-semibold text-gray-100">Diseñador UX/UI - Freelance</h3>
                        <span className="text-gray-300">01/08/2022 - 27/01/2023</span>
                    </div>
                    <p className="leading-5 text-xs xl:text-sm">
                        <br /> - Rediseño completo para la pagina oficial del Hotel Yacanto
                        <br /> - Comunicación y trabajo en equipo con una WordPress Designer
                    </p>
                </li>
                <li>
                    <div className="w-full flex justify-between">
                        <h3 className="font-semibold text-gray-100">Vendedor de autos - Berman Automotores</h3>
                        <span className="text-gray-300">01/10/2018 - 15/05/2022</span>
                    </div>
                    <p className="leading-5 text-xs xl:text-sm">
                        <br /> - Atención al público / Vendedor de autos
                        <br /> - Asesor de créditos prendarios y financiamiento
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default WorkExperience