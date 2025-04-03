"use client"

import Image from "next/image"
import Link from 'next/link'
import { ProjectsCardProps } from "@/types/home-types"
import { useHomeContext } from "@/context/HomeContext"

function ProjectCard({ className,
    urlImage,
    altImage,
    styleImage,
    title,
    text,
    urlClick,
    type,
    typeProject,
    altIcon,
    styleIcon,
    urlIcon,
    relevantDescription,
    section,
    github_repo }: ProjectsCardProps) {

    const { setCodeProjects } = useHomeContext();

    return (
        <>
            {type === 'code' ?
                <div className={`relative overflow-hidden flex flex-col justify-between items-center w-full h-full border-2 border-gray-500 rounded-xl md:rounded-2xl cursor-pointer ${className}`}>
                    <Link
                        href={github_repo!}
                        as={github_repo}
                        target="_blank"
                        className="flex justify-center items-center gap-2 xl:gap-4 bg-slate-800 hover:bg-blue-950 duration-300 w-full h-9 sm:h-10 md:h-12 z-20"
                    >
                        <p className="font font-medium text-xs sm:text-sm md:text-base">Ver en GitHub</p>
                        <Image
                            src={"/github-white.svg"}
                            alt="go to github proyect"
                            width={25}
                            height={25}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                    </Link>
                    <Link
                        className="relative flex flex-col md:flex-row justify-between items-center bg-gray-900 bg-opacity-70 hover:bg-slate-950 duration-500 p-4 md:p-6 xl:p-8"
                        href={urlClick!}
                        as={urlClick}
                        target="_blank"
                    >
                        <div
                            className="flex flex-col md:w-2/3 xl:w-3/4 gap-4 md:gap-6">
                            <div className="flex items-center justify-start gap-4 w-full">
                                <Image
                                    src={`${urlIcon}`}
                                    alt={`${altIcon}`}
                                    height={50}
                                    width={50}
                                    className={`w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] ${styleIcon}`}
                                />
                                <h3 className="text-base md:text-xl xl:text-2xl font-semibold text-white">{title}</h3>
                                <p className="bg-red-500">{typeProject}</p>
                            </div>

                            <p className="leading-5 text-xs md:text-sm xl:text-base mr-6 text-gray-300 mb-2 md:mb-4">{text}</p>
                            <p className="leading-5 text-xs md:text-sm xl:text-base mr-6 text-white font-medium">{relevantDescription}</p>
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
                </div>

                : type === 'design' ?
                    <Link href={urlClick!}
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
                                <h3 className="text-base md:text-xl xl:text-2xl font-semibold text-white">{title}</h3>
                            </div>

                            <p className="leading-5 text-xs md:text-sm xl:text-base mr-6 text-gray-300 mb-2 md:mb-4">{text}</p>
                            <p className="leading-5 text-xs md:text-sm xl:text-base mr-6 text-white font-medium">{relevantDescription}</p>
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

                    <Link href={urlClick!}
                        onClick={() => setCodeProjects(section ?? false)}
                        as={urlClick}
                        className={`relative flex justify-between items-center w-full h-full p-4 md:p-6 xl:p-8 rounded-2xl ${className}`}>
                        <div className="flex flex-col gap-2 sm:gap-4">
                            <h3 className="text-base md:text-xl xl:text-2xl font-medium text-gray-100">{title}</h3>
                            <p className="leading-5 text-xs md:text-sm xl:text-base text-gray-300">{text}</p>
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