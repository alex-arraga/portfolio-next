"use client"

import { useHomeContext } from "@/context/HomeContext"
import ProjectCard from "./ProjectCard"
import { personalCodeProjects, personalDesignProjects } from "@/constants"

function MyProjects() {
    const { codeProjects } = useHomeContext()

    return (
        <div className="w-full h-full">
            {
                codeProjects === false ?
                    <div className="flex flex-col h-full gap-4 xl:gap-6">
                        {personalDesignProjects.map((project) => (
                            <ProjectCard
                                type="design"
                                key={project.title}
                                title={project.title}
                                text={project.text}
                                relevantDescription={project.relevantDescription}
                                urlIcon={project.urlIcon}
                                urlImage={project.urlImage}
                                altImage={project.altImage}
                                urlClick={project.urlClick}
                            />
                        ))}
                    </div>

                    :

                    <div className="flex flex-col h-full gap-4 xl:gap-6">
                        {personalCodeProjects.map((project) => (
                            <ProjectCard
                                type="code"
                                key={project.title}
                                title={project.title}
                                text={project.text}
                                relevantDescription={project.relevantDescription}
                                typeProject={project.typeProject}
                                urlIcon={project.urlIcon}
                                urlImage={project.urlImage}
                                altImage={project.altImage}
                                urlClick={project.urlClick}
                                github_repo={project.github_repo}
                            />
                        ))}
                    </div>
            }
        </div>
    )
}

export default MyProjects