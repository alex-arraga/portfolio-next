import Image from "next/image"

function WorkExperience() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-3xl xl:text-4xl font-medium text-gray-100">
                    Experiencia Laboral
                </h2>
                <Image
                    src={'/job.png'}
                    alt="job icon"
                    height={500}
                    width={500}
                    className="object-contain h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                />
            </div>
            <ul className="flex flex-col gap-6 text-xs md:text-sm xl:text-base text-gray-300">
                <li>
                    <h3 className="font-semibold text-gray-100">1 año - Freelance, Diseñador UX/UI | <span className="text-orange-200">2023</span></h3>
                    <p className="leading-5 text-xs xl:text-sm">
                        <br /> - Research y comprensión de las necesidades de los usuarios.
                        <br /> - Desarrollo de interfaces utilizando Figma, Whimsical y Adobe Photoshop.
                        <br /> - Proyecto de redesign en coparticipación con Wordpress Dev. para Hotel Yacanto - Cordoba
                    </p>
                </li>
                <li>
                    <h3 className="font-semibold text-gray-100">4 años - Vendedor de Automoviles | <span className="text-orange-200">2018 - 2022</span></h3>
                    <p className="leading-5 text-xs xl:text-sm">
                        <br /> - Venta de automóviles usados y 0km.
                        <br /> - Asesoramiento a clientes sobre las características y beneficios de los vehículos.
                        <br /> - Negociación de precios y condiciones de venta.
                        <br /> - Tramitación de créditos prendarios.
                    </p>
                </li>
                <li>
                    <h3 className="font-semibold text-gray-100">1 año - Atención comercial en Perfumería | <span className="text-orange-200">2017</span></h3>
                    <p className="leading-5 text-xs xl:text-sm">
                        <br /> - Venta y asesoramiento sobre productos de la tienda.
                        <br /> - Manejo de caja y facturación cuando los encargados se ausentaban.
                        <br /> - Reposición de stock.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default WorkExperience