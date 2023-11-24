"use client"

import { useRouter } from "next/navigation"
import { PillsProps } from "@/types/home"
import Image from "next/image"
import { useHomeContext } from "@/context/HomeContext"

function Pills({ className,
    urlImage,
    altImage,
    styleImage,
    title,
    text,
    urlClick,
    type,
    altIcon,
    styleIcon,
    urlIcon,
    relevantDescription,
    section }: PillsProps) {

    const router = useRouter();
    const { setCodeProjects } = useHomeContext();

    const handleSection = () => {
        setCodeProjects(section)
        router.push(`${urlClick}`)
    }

    return (
        <>
            {type === 'projects' ?

                <div onClick={() => window.open(`${urlClick}`)} className={`relative flex justify-between items-center w-full h-full p-8 border-2 border-gray-300 bg-gray-900 bg-opacity-70 rounded-2xl cursor-pointer hover:brightness-125 duration-300 ${className}`}>

                    <div className="flex flex-col w-3/4 gap-6">
                        <div className="flex items-center justify-start gap-4 w-full">
                            <Image
                                src={`${urlIcon}`}
                                alt={`${altIcon}`}
                                height={50}
                                width={50}
                                className={`${styleIcon}`}
                            />
                            <h3 className="text-3xl font-medium text-white">{title}</h3>
                        </div>

                        <p className="text-gray-300 mb-4">{text}</p>
                        <p className="text-white font-medium">{relevantDescription}</p>
                    </div>
                    <div className="absolute right-0 w-1/4 h-full bg-emerald-200 rounded-2xl">
                        <Image
                            src={`${urlImage}`}
                            alt={`${altImage}`}
                            fill
                            className={`object-cover rounded-r-2xl ${styleImage}`}
                        />
                    </div>
                </div>

                :

                <div onClick={() => handleSection()}
                    className={`relative flex justify-between items-center w-full h-full p-4 md:p-6 xl:p-8 rounded-2xl ${className}`}>
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <h3 className="text-[14px] md:text-[16px] xl:text-[24px] font-medium text-gray-200">{title}</h3>
                        <p className="text-[10px] md:text-[14px] xl:text-[16px] text-gray-300">{text}</p>
                    </div>
                    <Image
                        src={`${urlImage}`}
                        alt={`${altImage}`}
                        width={100}
                        height={100}
                        className={`object-contain ${styleImage} w-[60px] h-[60px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px] ml-4`}
                    />
                </div>
            }
        </>
    )
}

export default Pills