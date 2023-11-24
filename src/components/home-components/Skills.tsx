import Image from "next/image"
import { backendSkills, frontendSkills, databasesSkills, designSkills } from "@/constants"

function Skills() {
    return (
        <>
            <h2 className="text-2xl font-medium text-gray-200">Habilidades</h2>
            <p className="mt-6 mb-2 text-gray-200">Backend</p>
            <div className="flex relative gap-4 items-center justify-center bg-slate-950 bg-opacity-80 h-16 w-full rounded-lg">
                {
                    backendSkills.map((skill) => (
                        <div className="relative w-full h-full max-h-14" key={skill.name}>
                            <Image
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                className="object-contain py-2"
                            />
                        </div>
                    ))
                }
            </div>

            <p className="mt-6 mb-2 text-gray-200">Bases de Datos</p>
            <div className="flex relative gap-4 items-center justify-start bg-slate-950 bg-opacity-80 h-16 w-full rounded-lg">
                {
                    databasesSkills.map((skill) => (
                        <div className="relative w-20 h-full max-h-14" key={skill.name}>
                            <Image
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                className="object-contain py-2"
                            />
                        </div>
                    ))
                }
            </div>

            <p className="mt-6 mb-2 text-gray-200">Frontend</p>
            <div className="flex relative gap-4 items-center justify-center bg-slate-950 bg-opacity-80 h-16 w-full rounded-lg">
                {
                    frontendSkills.map((skill) => (
                        <div className="relative w-full h-full max-h-14" key={skill.name}>
                            <Image
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                className="object-contain py-2"
                            />
                        </div>
                    ))
                }
            </div>

            <p className="mt-6 mb-2 text-gray-200">Diseño UX/UI</p>
            <div className="flex relative gap-4 items-center justify-start bg-slate-950 bg-opacity-80 h-16 w-full rounded-lg">
                {
                    designSkills.map((skill) => (
                        <div className="relative flex w-20 h-full max-h-14" key={skill.name}>
                            <Image
                                src={skill.img}
                                alt={skill.alt}
                                fill
                                className="object-contain py-2"
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Skills