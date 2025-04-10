import Image from'next/image'

function Personality() {
    return (
        <>
            {/* Personality */}
            <section className="flex-col rounded-xl">
                <div className='flex justify-between items-center mb-6 md:mb-8 xl:mb-10'>
                    <h2 className="text-xl md:text-3xl xl:text-4xl font-medium text-gray-100">
                        Personalidad
                    </h2>
                    {/* <Image
                        src='/personality.png'
                        alt='personality'
                        width={500}
                        height={500}
                        className='object-contain h-[40px] w-[40px] md:h-[60px] md:w-[60px]'
                    /> */}
                </div>
                <ul className='grid grid-cols-1 gap-4'>
                    <li className="flex justify-start items-center gap-3 sm:gap-4">
                        <div className='relative w-5 h-5'>
                            <Image
                                src='/diamon-icon.svg'
                                alt="diamond"
                                fill
                                className="object-contain select-none"
                            />
                        </div>
                        <p className='text-gray-300 text-sm md:text-base'>
                            Perseguidor de la excelencia.
                        </p>
                    </li>
                    <li className="flex justify-start items-center gap-3 sm:gap-4">
                        <div className='relative w-5 h-5'>
                            <Image
                                src='/team-icon.svg'
                                alt="diamond"
                                fill
                                className="object-contain select-none"
                            />
                        </div>
                        <p className='text-gray-300 text-sm md:text-base'>
                            Busco consenso en equipo sobre posibles alternativas.
                        </p>
                    </li>
                    <li className="flex justify-start items-center gap-3 sm:gap-4">
                        <div className='relative w-5 h-5'>
                            <Image
                                src='/brain-icon.svg'
                                alt="diamond"
                                fill
                                className="object-contain select-none"
                            />
                        </div>
                        <p className='text-gray-300 text-sm md:text-base'>
                            Cauteloso y racional tomando decisiones.
                        </p>
                    </li>
                    <li className="flex justify-start items-center gap-3 sm:gap-4">
                        <div className='relative w-5 h-5'>
                            <Image
                                src='/brain-icon-2.svg'
                                alt="diamond"
                                fill
                                className="object-contain select-none"
                            />
                        </div>
                        <p className='text-gray-300 text-sm md:text-base'>
                            Me gusta indagar y estar en constante aprendizaje.
                        </p>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Personality