import Image from "next/image"
import {
    backendSkills,
    frontendSkills,
    databasesSkills,
    designSkills,
    frameworksSkills,
    otherTools
} from "@/constants"

function Skills() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-3xl xl:text-4xl font-medium text-gray-100">Habilidades</h2>
                {/* <Image
                    src='/dev.png'
                    alt="developer"
                    width={500}
                    height={500}
                    className="object-contain h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                /> */}
            </div>

            {/* Backend */}
            <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Backend</p>
            <div className="flex relative gap-2 py-2 px-4 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    backendSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[80px] h-full max-h-8 sm:max-h-12 md:max-h-14 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div>

            {/* Frontend */}
            <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Frontend</p>
            <div className="flex relative gap-2 py-2 px-4 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    frontendSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[80px] h-full max-h-8 sm:max-h-12 md:max-h-14 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div>

            {/* Other tools */}
            <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Herramientas externas</p>
            <div className="flex relative gap-2 py-2 px-4 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    otherTools.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[80px] h-full max-h-8 sm:max-h-12 md:max-h-14 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div>

            {/* Frameworks */}
            <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Frameworks</p>
            <div className="flex relative gap-6 px-6 py-2 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-14 w-full rounded-lg">
                {
                    frameworksSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[105px] h-full max-h-8 sm:max-h-12 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div>

            {/* DB y ORM */}
            <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Bases de datos y ORMs</p>
            <div className="flex relative gap-6 px-4 py-2 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    databasesSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[80px] h-full max-h-8 sm:max-h-12 md:max-h-14 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div>



            {/* Design */}
            <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Diseño UX/UI</p>
            <div className="flex relative gap-6 px-4 py-2 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    designSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[80px] h-full max-h-8 sm:max-h-12 md:max-h-14 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div>

            {/* To learn */}
            {/* <p className="text-xs md:text-sm xl:text-base mt-6 mb-2 text-gray-300">Proximos a aprender</p>
            <div className="flex relative gap-2 py-2 px-4 md:py-3 items-center justify-start bg-neutral-800 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    skillsToLearn.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[80px] h-full max-h-8 sm:max-h-12 md:max-h-14 hover:scale-110 duration-300" key={skill.name}>
                            <Image
                                title={skill.title}
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                sizes="100px"
                                className="object-contain"
                            />
                        </div>
                    ))
                }
            </div> */}
        </>
    )
}

export default Skills