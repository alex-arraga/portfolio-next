import Image from "next/image"
import { backendSkills, frontendSkills, databasesSkills, designSkills, skillsToLearn, frameworksSkills } from "@/constants"

function Skills() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-[20px] md:text-[30px] xl:text-[36px] font-medium text-gray-100">Habilidades</h2>
                <Image
                    src={'/dev.png'}
                    alt="developer"
                    width={500}
                    height={500}
                    className="object-contain h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                />
            </div>

            {/* Backend */}
            <p className="text-[10px] md:text-[14px] xl:text-[16px] mt-6 mb-2 text-gray-300">Backend</p>
            <div className="flex relative gap-2 py-3 items-center justify-between bg-slate-950 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    backendSkills.map((skill) => (
                        <div className="relative w-full h-full max-h-8 sm:max-h-12 md:max-h-14" key={skill.name}>
                            <Image
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
            <p className="text-[10px] md:text-[14px] xl:text-[16px] mt-6 mb-2 text-gray-300">Frameworks</p>
            <div className="flex relative gap-2 py-3 items-center justify-start bg-slate-950 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    frameworksSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[100px] h-full max-h-8 sm:max-h-12 md:max-h-14" key={skill.name}>
                            <Image
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
            <p className="text-[10px] md:text-[14px] xl:text-[16px] mt-6 mb-2 text-gray-300">Bases de Datos y ORM</p>
            <div className="flex relative gap-2 py-3 items-center justify-start bg-slate-950 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    databasesSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[100px] h-full max-h-8 sm:max-h-12 md:max-h-14" key={skill.name}>
                            <Image
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
            <p className="text-[10px] md:text-[14px] xl:text-[16px] mt-6 mb-2 text-gray-300">Frontend</p>
            <div className="flex relative gap-2 py-3 items-center justify-between bg-slate-950 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    frontendSkills.map((skill) => (
                        <div className="relative w-full h-full max-h-8 sm:max-h-12 md:max-h-14" key={skill.name}>
                            <Image
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
            <p className="text-[10px] md:text-[14px] xl:text-[16px] mt-6 mb-2 text-gray-300">Diseño UX/UI</p>
            <div className="flex relative gap-2 py-3 items-center justify-start bg-slate-950 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    designSkills.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[100px] h-full max-h-8 sm:max-h-12 md:max-h-14" key={skill.name}>
                            <Image
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

            <p className="text-[10px] md:text-[14px] xl:text-[16px] mt-6 mb-2 text-gray-300">Proximos a aprender</p>
            <div className="flex relative gap-2 py-3 items-center justify-start bg-slate-950 bg-opacity-80 h-10 sm:h-12 md:h-16 w-full rounded-lg">
                {
                    skillsToLearn.map((skill) => (
                        <div className="relative w-full max-w-[50px] md:max-w-[100px] h-full max-h-8 sm:max-h-12 md:max-h-14" key={skill.name}>
                            <Image
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
        </>
    )
}

export default Skills