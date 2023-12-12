import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <>
            <h2 className="text-xl md:text-3xl xl:text-4xl text-gray-100 font-semibold mb-6 md:mb-8 xl:mb-10">Proyectos</h2>
            <p className="leading-5 text-xs md:text-sm xl:text-base text-gray-300 mb-4 md:mb-6">En esta sección encontraras algunos mis proyectos personales, algunos de ellos, meramente de Diseño UX/UI utilizando herramientas como Figma y Photoshop, y otros desarrollados como Backend Developer, esto se debe a que antes de encontrar mi profesión como Developer estudié Diseño UX/UI.</p>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-6">
                <ProjectCard
                    altImage="ux/ui proyects"
                    urlImage="/ux-ui.png"
                    title="Diseño UX/UI"
                    text={`Te presento mis proyectos como Diseñador UX /UI`}
                    className="box-proyects__pills-design"
                    urlClick='/projects'
                    section={false}
                />

                <ProjectCard
                    altImage="code proyects"
                    urlImage="/code.png"
                    title="Web Developer"
                    text={`Te presento mis proyectos como Web Developer`}
                    className="box-proyects__pills-code"
                    urlClick='/projects'
                    section={true}
                />
            </div>
        </>
    )
}

export default Projects