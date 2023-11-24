import React from 'react'
import Image from 'next/image'

function Personality() {
    return (
        <>
            {/* Personality */}
            <section className="flex-col rounded-xl">
                <div className='flex justify-between items-center mb-6'>
                    <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-medium text-gray-200">
                        Personalidad
                    </h2>
                    <Image
                        src={'/personality.png'}
                        alt='personality'
                        width={500}
                        height={500}
                        className='object-contain h-[40px] w-[40px] md:h-[60px] md:w-[60px]'
                    />
                </div>
                <div className="flex justify-start items-center gap-4 mb-4">
                    <Image
                        src={'/diamon-icon.svg'}
                        alt="diamond"
                        width={20}
                        height={20}
                        className="h-[12px] w-[14px] md:h-[20px] md:w-[20px]"
                    />
                    <p className='text-gray-300 text-[10px] md:text-[14px] xl:text-[16px]'>
                        Perseguidor de la excelencia
                    </p>
                </div>
                <div className="flex justify-start items-center gap-4 my-4">
                    <Image
                        src={'/team-icon.svg'}
                        alt="diamond"
                        width={20}
                        height={20}
                        className="h-[12px] w-[14px] md:h-[20px] md:w-[20px]"
                    />
                    <p className='text-gray-300 text-[10px] md:text-[14px] xl:text-[16px]'>
                        Busco consenso en equipo sobre posibles alternativas
                    </p>
                </div>
                <div className="flex justify-start items-center gap-4 my-4">
                    <Image
                        src={'/brain-icon.svg'}
                        alt="diamond"
                        width={20}
                        height={20}
                        className="h-[12px] w-[14px] md:h-[20px] md:w-[20px]"
                    />
                    <p className='text-gray-300 text-[10px] md:text-[14px] xl:text-[16px]'>
                        Cauteloso y racional tomando decisiones
                    </p>
                </div>
                <div className="flex justify-start items-center gap-4 mt-4">
                    <Image
                        src={'/brain-icon-2.svg'}
                        alt="diamond"
                        width={20}
                        height={20}
                        className="h-[12px] w-[14px] md:h-[20px] md:w-[20px]"
                    />
                    <p className='text-gray-300 text-[10px] md:text-[14px] xl:text-[16px]'>
                        Me gusta indagar y estar en constante aprendizaje
                    </p>
                </div>
            </section>
        </>
    )
}

export default Personality