"use client"

import Image from "next/image"
import { useHomeContext } from "@/context/HomeContext"
import { useRouter } from "next/navigation"

function SwitchProjects() {
    const { codeProjects, setCodeProjects } = useHomeContext()
    const router = useRouter()

    return (
        <div className='relative box-switch rounded-2xl w-full mb-10 h-full p-10 px-20'>
            <div className='flex items-center justify-center w-full gap-6 mb-6'>
                <Image
                    onClick={() => router.push('/')}
                    src={'/arrow-switch.svg'}
                    alt='arrow back'
                    width={120}
                    height={50}
                    className='object-contain hover:scale-110 duration-300 cursor-pointer'
                />
                <h1 className='text-[100px] font-medium text-white'>Proyectos</h1>
                <div className='flex justify-center items-center rounded-2xl w-28 h-28 bg-violet-300'>
                    <p className='text-[80px] font-semibold'>{!codeProjects ? 4 : 3}</p>
                </div>
            </div>

            <div className='flex justify-center items-center gap-4 w-full h-full'>
                <button className={`text-xl text-black font-medium rounded-lg w-full h-10 max-w-[300px] ${codeProjects === true ? 'btn-projects' : 'bg-gray-400 opacity-30 hover:brightness-150 duration-300'}`} onClick={() => setCodeProjects(true)}>
                    Web Developer
                </button>
                <button className={`text-xl text-black font-medium rounded-lg w-full h-10 max-w-[300px] ${codeProjects === false ? 'btn-projects' : 'bg-gray-400 opacity-30 hover:brightness-150 duration-300'}`} onClick={() => setCodeProjects(false)}>
                    Diseño UX/UI
                </button>
            </div>
        </div>
    )
}

export default SwitchProjects