"use client"

import { useHomeContext } from "@/context/HomeContext"
import Pills from "./Pills"

function MyProjects() {
    const { codeProjects, setCodeProjects } = useHomeContext()

    return (
        <div className="bg-red-900 bg-opacity-30 w-full h-full">
            {
                codeProjects === true ?
                    <div className="flex flex-col h-full gap-6">
                        <Pills type="projects"
                            urlIcon="/patagonia-icon.png"
                            title="Patagonia Argentina"
                            text="Una dinamica app que te brinda la posilibidad de elegir entre pedir delivery, o comer el plato en el propio restaurante. Pensada para ahorrarle trabajo a los mozos y hacer vistoso un menu lleno de platos exisitos, además cuenta con un sistema de pago rapido y seguro, haciendo que la tarea de pagar el menu no conlleve a retrasos inesperados."
                            relevantDescription="¿Necesitas pagar en efectivo estando en el restaurante?¡No te preocupes, podes llamar al mozo solo con apretar un boton!"
                            urlImage="/patagonia.png"
                            altImage="pataonia"
                        />
                        <Pills type="projects"
                            urlIcon="/orfeus-icon.png"
                            title="Orfeus"
                            text="Orfeus es una aplicación de música gratuita que te permite escuchar millones de canciones de alta calidad, sin importar dónde te encuentres. Con una interfaz intuitiva y fácil de usar. Ademas podes adquirir el plan Premium y acceder a música sin anuncios y de mayor calidad, a un precio muy tentador respecto de sus competidores."
                            relevantDescription="¡Con el plan Premium podes acceder a los videoclips oficiales de tu música favorita, probarlo gratis durante 30 días!"
                            urlImage="/orfeus.png"
                            altImage="orfeus"
                        />
                        <Pills type="projects"
                            urlIcon="/orfeus-icon.png"
                            title="Orfeus"
                            text="Orfeus es una aplicación de música gratuita que te permite escuchar millones de canciones de alta calidad, sin importar dónde te encuentres. Con una interfaz intuitiva y fácil de usar. Ademas podes adquirir el plan Premium y acceder a música sin anuncios y de mayor calidad, a un precio muy tentador respecto de sus competidores."
                            relevantDescription="¡Con el plan Premium podes acceder a los videoclips oficiales de tu música favorita, probarlo gratis durante 30 días!"
                            urlImage="/orfeus.png"
                            altImage="orfeus"
                        />
                        <Pills type="projects"
                            urlIcon="/orfeus-icon.png"
                            title="Orfeus"
                            text="Orfeus es una aplicación de música gratuita que te permite escuchar millones de canciones de alta calidad, sin importar dónde te encuentres. Con una interfaz intuitiva y fácil de usar. Ademas podes adquirir el plan Premium y acceder a música sin anuncios y de mayor calidad, a un precio muy tentador respecto de sus competidores."
                            relevantDescription="¡Con el plan Premium podes acceder a los videoclips oficiales de tu música favorita, probarlo gratis durante 30 días!"
                            urlImage="/orfeus.png"
                            altImage="orfeus"
                        />
                    </div>

                    :

                    <p>NO CODE</p>
                // <Pills />
            }
        </div>
    )
}

export default MyProjects