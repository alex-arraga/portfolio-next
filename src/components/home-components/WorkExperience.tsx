import Image from "next/image"

function WorkExperience() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-6">
                <h2 className="mb-10 text-2xl font-medium text-gray-200">Experiencia Laboral</h2>
                <ul className="flex flex-col gap-6 text-gray-300">
                    <li>
                        <span className="font-semibold">1 año:</span> Freelance, Diseñador UX/UI.
                    </li>
                    <li>
                        <span className="font-semibold">4 años:</span> Vendedor de autos usados y 0km, asesor de créditos prendarios.
                    </li>
                    <li>
                        <span className="font-semibold">1 año:</span> Atención comercial en perfumeria
                    </li>
                </ul>
            </div>
            <Image
                src={'/job.png'}
                alt="job icon"
                height={100}
                width={100}
                className="object-contain"
            />
        </div>)
}

export default WorkExperience