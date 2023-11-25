"use client"

import Image from "next/image"
import { useHomeContext } from "@/context/HomeContext"
import { useRouter } from "next/navigation"

function SwitchProjects({ type }: { type?: string }) {
    const { codeProjects, setCodeProjects } = useHomeContext()
    const router = useRouter()

    return (
        <>
            {
                type === 'diplomas' ?

                    <div className='relative box-switch rounded-2xl mb-6 md:mb-8 xl:mb-10 h-full p-4 md:p-6 xl:p-10 px-8 md:px-10 xl:px-20'>
                        <div className='flex items-center justify-center gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-6'>
                            <Image
                                onClick={() => router.push('/')}
                                src={'/arrow-switch.svg'}
                                alt='arrow back'
                                width={120}
                                height={50}
                                className='object-contain hover:scale-110 duration-300 cursor-pointer w-[40px] h-[20px] md:w-[80px] md:h-[40px] xl:w-[120px] xl:h-[50px]'
                            />
                            <h1 className='text-[30px] md:text-[60px] xl:text-[100px] font-medium text-white'>Diplomas</h1>
                            <div className='flex justify-center items-center rounded-xl xl:rounded-2xl w-10 h-10 md:w-20 md:h-20 xl:w-28 xl:h-28 bg-violet-300'>
                                <p className='text-[30px] md:text-[60px] xl:text-[80px] font-semibold'>7</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-4 w-full h-full'>
                            <div className='btn-projects flex justify-evenly items-center select-none text-[10px] md:text-[16px] xl:text-[20px] text-black font-medium rounded-lg w-full max-w-full md:max-w-[calc(80%)] xl:max-w-[calc(65%)] h-8 md:h-10'>
                                Programación <span className="text-gray-700">|</span> Diseño UX/UI <span className="text-gray-700">|</span> Adobe Suite
                            </div>
                        </div>
                    </div>

                    :

                    <div className='relative box-switch rounded-2xl mb-6 md:mb-8 xl:mb-10 h-full p-4 md:p-6 xl:p-10 px-8 md:px-10 xl:px-20'>
                        <div className='flex items-center justify-center gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-6'>
                            <Image
                                onClick={() => router.push('/')}
                                src={'/arrow-switch.svg'}
                                alt='arrow back'
                                width={120}
                                height={50}
                                className='object-contain hover:scale-110 duration-300 cursor-pointer w-[40px] h-[20px] md:w-[80px] md:h-[40px] xl:w-[120px] xl:h-[50px]'
                            />
                            <h1 className='text-[30px] md:text-[60px] xl:text-[100px] font-medium text-white'>Proyectos</h1>
                            <div className='flex justify-center items-center rounded-xl xl:rounded-2xl w-10 h-10 md:w-20 md:h-20 xl:w-28 xl:h-28 bg-violet-300'>
                                <p className='text-[30px] md:text-[60px] xl:text-[80px] font-semibold'>{!codeProjects ? 4 : 3}</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-2 md:gap-4 w-full h-full'>
                            <button className={`text-[10px] md:text-[16px] xl:text-[20px] text-black font-medium rounded-lg w-full h-10 max-w-[300px] ${codeProjects === true ? 'btn-projects' : 'bg-gray-400 opacity-30 hover:brightness-150 duration-300'}`} onClick={() => setCodeProjects(true)}>
                                Web Developer
                            </button>
                            <button className={`text-[10px] md:text-[16px] xl:text-[20px] text-black font-medium rounded-lg w-full h-10 max-w-[300px] ${codeProjects === false ? 'btn-projects' : 'bg-gray-400 opacity-30 hover:brightness-150 duration-300'}`} onClick={() => setCodeProjects(false)}>
                                Diseño UX/UI
                            </button>
                        </div>
                    </div>
            }
        </>
    )
}

export default SwitchProjects