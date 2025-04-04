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
                    <div className="flex-col w-full bg-neutral-800 rounded-md p-2 md:p-4">
                        <span className="text-txt_10 md:text-xs text-gray-400">01/02/2023 - 30/05/2023</span>
                        <h3 className="text-xs md:text-base w-fit font-semibold text-gray-100">Diseñador UX/UI - Ajenda</h3>
                        <p className="leading-5 text-xs xl:text-sm">
                            <br /> - Diseño de componentes e interfaces
                            <br /> - Colaboración con desarrolladores
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-col w-full bg-neutral-800 rounded-md p-2 md:p-4">
                        <span className="text-txt_10 md:text-xs text-gray-400">01/08/2022 - 27/01/2023</span>
                        <h3 className="text-xs md:text-base w-fit font-semibold text-gray-100">Diseñador UX/UI - Freelance</h3>
                        <p className="leading-5 text-xs xl:text-sm">
                            <br /> - Rediseño completo para la pagina oficial del Hotel Yacanto
                            <br /> - Comunicación y trabajo en equipo con una WordPress Designer
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-col w-full bg-neutral-800 rounded-md p-2 md:p-4">
                        <span className="text-txt_10 md:text-xs text-gray-400">01/10/2018 - 15/05/2022</span>
                        <h3 className="text-xs md:text-base w-fit font-semibold text-gray-100">Vendedor de autos - Berman Automotores</h3>
                        <p className="leading-5 text-xs xl:text-sm">
                            <br /> - Atención al público / Vendedor de autos
                            <br /> - Asesor de créditos prendarios y financiamiento
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default WorkExperience