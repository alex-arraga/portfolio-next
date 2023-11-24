import Image from "next/image"

function WorkExperience() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-medium text-gray-200">
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
            <ul className="flex flex-col gap-6 text-[10px] md:text-[14px] xl:text-[16px] text-gray-300">
                <li>
                    <span className="font-semibold text-gray-200">1 año:</span> Freelance, Diseñador UX/UI.
                </li>
                <li>
                    <span className="font-semibold text-gray-200">4 años:</span> Vendedor de autos usados y 0km, asesor de créditos prendarios.
                </li>
                <li>
                    <span className="font-semibold text-gray-200">1 año:</span> Atención comercial en perfumeria
                </li>
            </ul>
        </section>
    )
}

export default WorkExperience