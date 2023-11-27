"use client"

import { useHomeContext } from "@/context/HomeContext"
import { baseClientProjectsURL } from "@/libs/baseURL"
import ProjectCard from "./ProjectCard"

function MyProjects() {
    const { codeProjects } = useHomeContext()

    return (
        <div className="w-full h-full">
            {
                codeProjects === false ?
                    <div className="flex flex-col h-full gap-4 xl:gap-6">
                        <ProjectCard type="projects"
                            urlIcon="/patagonia-icon.png"
                            title="Patagonia Argentina"
                            text="Una dinamica app que te brinda la posilibidad de elegir entre pedir delivery, o comer el plato en el propio restaurante. Pensada para ahorrarle trabajo a los mozos y hacer vistoso un menu lleno de platos exisitos, además cuenta con un sistema de pago rapido y seguro, haciendo que la tarea de pagar el menu no conlleve a retrasos inesperados."
                            relevantDescription="¿Necesitas pagar en efectivo estando en el restaurante? ¡No te preocupes, podes llamar al mozo solo con apretar un boton!"
                            urlImage="/patagonia.png"
                            altImage="patagonia"
                            urlClick="https://www.behance.net/gallery/149060887/Patagonia-Argentina"
                        />
                        <ProjectCard type="projects"
                            urlIcon="/orfeus-icon.png"
                            title="Orfeus"
                            text="Orfeus es una aplicación de música gratuita que te permite escuchar millones de canciones de alta calidad, sin importar dónde te encuentres. Con una interfaz intuitiva y fácil de usar. Ademas podes adquirir el plan Premium y acceder a música sin anuncios y de mayor calidad, a un precio muy tentador respecto de sus competidores."
                            relevantDescription="¡Con el plan Premium podes acceder a los videoclips oficiales de tu música favorita, probarlo gratis durante 30 días!"
                            urlImage="/orfeus.png"
                            altImage="orfeus"
                            urlClick="https://www.behance.net/gallery/146272239/Orfeus-App-UXUI"
                        />
                        <ProjectCard type="projects"
                            urlIcon="/sportshop-icon.png"
                            title="SportShop"
                            text="SportShop es un tienda online especializada en el ambito deportivo, se destaca por sus excelentes precios y por trabajar con marcas top a nivel mundial. Encontrá ropa, pelotas, zapatillas, raquetas, botines o lo que necesites para realizar tu deporte e ir al siguiente nivel."
                            relevantDescription="¡Trabajamos con marcas nacionales e internacionales para atletas de alto rendimiento, explorá la tienda que te llevará al siguiente nivel!"
                            urlImage="/sportshop.png"
                            altImage="sportshop"
                            urlClick="https://www.behance.net/gallery/148958819/SportShop"
                        />
                        <ProjectCard type="projects"
                            urlIcon="/yacanto-icon.png"
                            title="Hotel Yacanto"
                            text="Fundado a principios del siglo XX, cuando Córdoba recibía una importante cantidad de visitantes ingleses. El Hotel Yacanto ofrece un estilo clásico, junto con un predio mayor a 9 hectareas, rodeadas de cierras, riachuelos y naturaleza, cuenta con un campo de golf entre otros servicios que háran que de sus vacaciones, placenteras. "
                            relevantDescription="¡Organizamos tu boda soñada, te invitamos a vivir un evento inolvidable acompañado de nuestros mejores servicios de catering!"
                            urlImage="/yacanto.png"
                            altImage="hotel yacanto"
                            urlClick="https://www.behance.net/gallery/162372391/Hotel-Yacanto"
                        />
                    </div>

                    :

                    <div className="flex flex-col h-full gap-4 xl:gap-6">
                        <ProjectCard type="projects"
                            urlIcon="/car-icon-project.png"
                            styleIcon=""
                            title="CarHub"
                            text="Una pagina que te permite comprar y rentar los mejores autos a partir del modelo 2015, encontrá marcas y vehiculos que se ajusten a tus necesidades segun la ocasion y el destino a donde apuntes. Nosotros te damos el medio, mientras que vos disfrutas el camino"
                            relevantDescription="Trabajamos con todos los medios de pago y te brindamos la posibilidad de alquilar autos por día o suscribirte a uno de nuestros planes mensuales, y con el cambiá de coche hasta 3 veces por mes a un coste mucho menor"
                            urlImage="/carhub.png"
                            altImage="carhub"
                            urlClick={`${baseClientProjectsURL}/cars-store`}
                        />
                        <ProjectCard type="projects"
                            urlIcon="/calculator-icon.png"
                            title="Calculadora"
                            text="Una calculadora que permite realizar cálculos básicos y cálculos logarítmicos. Esta diseñada y programada para que todas las operaciones junto a sus respectivos resultados, queden almacenados en un historial de registros. "
                            relevantDescription="¡Podes recuperar las operaciones cuando vos quieras, tanto las expresiones como sus resultados!"
                            urlImage="/calculator.png"
                            altImage="calculator"
                            urlClick={`${baseClientProjectsURL}/calculator`}
                        />
                        <ProjectCard type="projects"
                            urlIcon="/tasks-icon.png"
                            title="To Do"
                            text='No podría faltar el clasíco y mítico To Do en un buen portfolio, una lista de tareas con Responsive Design que de manera sencilla y rápida te permite anotar tareas pendientes a realizar y marcarlas como completadas una vez que la cumplas.'
                            relevantDescription='¡Utiliza una Base de Datos relacional para almacenar cada tarea y además permite realizar un check a cada una, guardandolas en una nueva sección llamada "completadas"!'
                            urlImage="/to-do.png"
                            altImage="tasks"
                            urlClick={`${baseClientProjectsURL}/tasks`}
                        />
                    </div>
            }
        </div>
    )
}

export default MyProjects