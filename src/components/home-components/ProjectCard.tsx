"use client"

import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { ProjectsCardProps } from "@/types/home"
import { useHomeContext } from "@/context/HomeContext"

function ProjectCard({ className,
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
    section }: ProjectsCardProps) {

    const { setCodeProjects } = useHomeContext();

    return (
        <>
            {type === 'projects' ?

                <Link href={urlClick ? urlClick : ''}
                    target='_blank'
                    as={urlClick}
                    className={`relative flex flex-col md:flex-row justify-between items-center w-full h-full p-4 md:p-6 xl:p-8 border-2 border-gray-500 bg-gray-900 bg-opacity-70 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-950 duration-500 ${className}`}>
                    <div className="flex flex-col md:w-2/3 xl:w-3/4 gap-4 md:gap-6">
                        <div className="flex items-center justify-start gap-4 w-full">
                            <Image
                                src={`${urlIcon}`}
                                alt={`${altIcon}`}
                                height={50}
                                width={50}
                                className={`w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] ${styleIcon}`}
                            />
                            <h3 className="text-sm md:text-base xl:text-2xl font-medium text-white">{title}</h3>
                        </div>

                        <p className="text-xs md:text-sm xl:text-base mr-6 text-gray-300 mb-2 md:mb-4">{text}</p>
                        <p className="text-xs md:text-sm xl:text-base mr-6 text-white font-medium">{relevantDescription}</p>
                    </div>
                    <div className="relative w-full h-24 mt-4 md:mt-0 md:absolute md:right-0 md:w-1/3 xl:w-1/4 md:h-full md:rounded-2xl">
                        <Image
                            src={`${urlImage}`}
                            alt={`${altImage}`}
                            fill
                            sizes="1000px"
                            className={`object-cover rounded-md md:rounded-r-2xl ${styleImage}`}
                        />
                    </div>
                </Link>

                :

                <Link href={urlClick ? urlClick : ''}
                    onClick={() => setCodeProjects(section)}
                    as={urlClick}
                    className={`relative flex justify-between items-center w-full h-full p-4 md:p-6 xl:p-8 rounded-2xl ${className}`}>
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <h3 className="text-sm md:text-base xl:text-2xl font-medium text-gray-100">{title}</h3>
                        <p className="text-xs md:text-sm xl:text-base text-gray-300">{text}</p>
                    </div>
                    <Image
                        src={`${urlImage}`}
                        alt={`${altImage}`}
                        width={100}
                        height={100}
                        className={`object-contain ${styleImage} w-[60px] h-[60px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px] ml-4`}
                    />
                </Link>
            }
        </>
    )
}

export default ProjectCard