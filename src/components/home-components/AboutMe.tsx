import Image from "next/image"

function AboutMe() {
    return (
        <div className="flex justify-end w-full h-full mb-2 md:mb-6 xl:mb-10">
            <div className="p-4 md:p-6 xl:p-10 w-full md:w-2/3">
                <h1 className="my-4 md:my-6 xl:my-10 font-bold text-[16px] md:text-[18px] xl:text-[36px] text-gray-100" > Hola Alejandro, <br /> soy Alex! 😁</h1>
                <p className="text-[10px] md:text-[14px] xl:text-[16px] text-gray-300">Soy Full Stack Developer y Diseñador UX / UI, <span className="font-semibold text-white">con intenciones de especializarme en el mundo Backend</span>, ya que la lógica de negocio de este último campo me resulta atrapante. Un rasgo particular en mí, es que busco aportar mis conocimientos y aprender del intercambio de ideas que se generan en un equipo, con el fin de cumplir los objetivos. Tengo experiencia trabajando en atención al público e hice algunos trabajos como Freelancer siendo Diseñador UX / UI, espero que pronto podamos conocernos y trabajar juntos 😉</p>
            </div>

            <div className="relative hidden md:block md:w-1/3 h-full">
                <Image
                    src={'/me.png'}
                    alt="me"
                    fill
                    className="object-cover rounded-2xl hidden md:block"
                />
            </div>
        </div>
    )
}

export default AboutMe