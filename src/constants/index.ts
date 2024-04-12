import { baseClientProjectsURL } from "@/libs/baseURL";

export const diplomas = [
    {
        name: "basic-code",
        src: "/basic-code.jpg",
        alt: "Code - Platzi",
    },
    {
        name: "design-figma",
        src: "/design-figma.jpg",
        alt: "Figma Design - Udemy",
    },
    {
        name: "design-interfaces",
        src: "/design-interfaces.jpg",
        alt: "Figma Design Interfaces - Udemy",
    },
    {
        name: "design-systems",
        src: "/design-systems.jpg",
        alt: "Design Systems - Domestika",
    },
    {
        name: "photoshop",
        src: "/photoshop.jpg",
        alt: "Photoshop - Domestika",
    },
    {
        name: "ilustrator",
        src: "/ilustrator.jpg",
        alt: "Illustrator - Domestika",
    },
    {
        name: "after-effects",
        src: "/after-effects.jpg",
        alt: "After Effects - Domestika",
    },
];

export const backendSkills = [
    {
        name: 'terminal',
        img: '/terminal.png',
        alt: 'terminal icon'
    },
    {
        name: 'git',
        img: '/git.png',
        alt: 'git icon'
    },
    {
        name: 'github',
        img: '/github-white.svg',
        alt: 'github icon'
    },
    {
        name: 'node.js',
        img: '/node.png',
        alt: 'node icon'
    },
    {
        name: 'typescript',
        img: '/typescript.png',
        alt: 'typescript icon'
    }
]

export const frontendSkills = [
    {
        name: 'html',
        img: '/html.png',
        alt: 'html icon'
    },
    {
        name: 'css',
        img: '/css.png',
        alt: 'css icon'
    },
    {
        name: 'javascript',
        img: '/js.png',
        alt: 'javascript icon'
    },
    {
        name: 'react',
        img: '/react.png',
        alt: 'react icon'
    },
    {
        name: 'tailwind',
        img: '/tailwind.png',
        alt: 'tailwind icon'
    },
    {
        name: 'vite.js',
        img: '/vite.png',
        alt: 'vite icon'
    }
]

export const databasesSkills = [
    {
        name: 'postgres',
        img: '/postgres.png',
        alt: 'postgres icon'
    },
    {
        name: 'mongo db',
        img: '/mongodb.png',
        alt: 'mongo db icon'
    },
    {
        name: 'prisma orm',
        img: '/prisma.svg',
        alt: 'prisma orm icon'
    }
]

export const designSkills = [
    {
        name: 'photoshop',
        img: '/photoshop.png',
        alt: 'photoshop icon'
    },
    {
        name: 'figma',
        img: '/figma.png',
        alt: 'figma icon'
    },
    {
        name: 'whimsical',
        img: '/whimsical.png',
        alt: 'whimsical icon'
    }
]

export const skillsToLearn = [
    {
        name: 'go',
        img: '/go.png',
        alt: 'go icon'
    },
    {
        name: 'docker',
        img: '/docker.png',
        alt: 'docker icon'
    }
]

export const frameworksSkills = [
    {
        name: 'next.js',
        img: '/next-js-white.svg',
        alt: 'next icon'
    },
    {
        name: 'express',
        img: '/express.png',
        alt: 'express icon'
    }
]

export const manufacturers = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
];

export const yearsOfProduction = [
    { title: "2015", value: "2015" },
    { title: "2016", value: "2016" },
    { title: "2017", value: "2017" },
    { title: "2018", value: "2018" },
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
];

export const fuels = [
    {
        title: "Gas",
        value: "gas",
    },
    {
        title: "Diesel",
        value: "diesel",
    },
    {
        title: "Electricity",
        value: "electricity",
    },
];

export const footerLinks = [
    {
        title: "About",
        links: [
            { title: "How it works", url: "" },
            { title: "Featured", url: "" },
            { title: "Partnership", url: "" },
            { title: "Bussiness Relation", url: "" },
        ],
    },
    {
        title: "Company",
        links: [
            { title: "Events", url: "" },
            { title: "Blog", url: "" },
            { title: "Podcast", url: "" },
            { title: "Invite a friend", url: "" },
        ],
    },
    {
        title: "Socials",
        links: [
            { title: "Discord", url: "" },
            { title: "Instagram", url: "" },
            { title: "Twitter", url: "" },
            { title: "Facebook", url: "" },
        ],
    },
];

export const personalCodeProjects = [
    {
        title: "CarHub",
        text: "Una pagina que te permite comprar y rentar los mejores autos a partir del modelo 2015, encontrá marcas y vehiculos que se ajusten a tus necesidades segun la ocasion y el destino a donde apuntes. Nosotros te damos el medio, mientras que vos disfrutas el camino",
        relevantDescription: "Te brindamos la posibilidad de alquilar autos por día o suscribirte a uno de nuestros planes mensuales. Cambiá de coche hasta 3 veces por mes a un coste mucho menor",
        urlIcon: "/car-icon-project.png",
        urlImage: "/carhub.png",
        altImage: "carhub",
        urlClick: `${baseClientProjectsURL}/cars-store`,
        github_repo: "https://github.com/alex-arraga/portfolio-next/blob/main/src/app/projects/cars-store/page.tsx"
    },
    {
        title: "Go API",
        text: "Una app creada con diversas tecnologías, un Backend creado con Go utilizando Fiber como framework, un Frontend con Next.js, una base de datos No SQL - MongoDB y deployada utilizando Docker",
        relevantDescription: "¡Crea productos, agrégales un precio y ve su renderización en el lado del cliente!",
        urlIcon: "/goapp-icon.png",
        urlImage: "/go-app.png",
        altImage: "go api app",
        urlClick: "https://docker-go-mongo-frontend.onrender.com/",
        github_repo: "https://github.com/alex-arraga/docker-go-mongo"
    },
    {
        title: "Calculadora",
        text: "Una calculadora que permite realizar cálculos básicos y cálculos logarítmicos. Esta diseñada y programada para que todas las operaciones junto a sus respectivos resultados, queden almacenados en un historial de registros. ",
        relevantDescription: "¡Podes recuperar las operaciones cuando vos quieras, tanto las expresiones como sus resultados!",
        urlIcon: "/calculator-icon.png",
        urlImage: "/calculator.png",
        altImage: "calculator",
        urlClick: `${baseClientProjectsURL}/calculator`,
        github_repo: "https://github.com/alex-arraga/portfolio-next/blob/main/src/app/projects/calculator/page.tsx"
    },
    {
        title: "To Do",
        text: 'No podría faltar el clasíco y mítico To Do en un buen portfolio, una lista de tareas con Responsive Design que de manera sencilla y rápida te permite anotar tareas pendientes a realizar y marcarlas como completadas una vez que la cumplas.',
        relevantDescription: '¡Utiliza una Base de Datos relacional para almacenar cada tarea y además permite realizar un check a cada una, guardandolas en una nueva sección llamada "completadas"!',
        urlIcon: "/tasks-icon.png",
        urlImage: "/to-do.png",
        altImage: "tasks",
        urlClick: `${baseClientProjectsURL}/tasks`,
        github_repo: "https://github.com/alex-arraga/portfolio-next/blob/main/src/app/projects/tasks/page.tsx"
    }
]

export const personalDesignProjects = [
    {
        title: "Patagonia Argentina",
        urlIcon: "/patagonia-icon.png",
        text: "Dinamica app en donde podes pedir delivery, o disfrutar tu pedido en el propio restaurante. Pensada para ahorrarle trabajo al personal y hacer vistoso un menu lleno de platos exisitos, integra un sistema de pago rapido y seguro, haciendo que la tarea de pagar no conlleve retrasos inesperados.",
        relevantDescription: "¿Necesitas pagar en efectivo estando en el restaurante? ¡No te preocupes, podes llamar al mozo solo con apretar un boton!",
        urlImage: "/patagonia.png",
        altImage: "patagonia",
        urlClick: "https://www.behance.net/gallery/149060887/Patagonia-Argentina",
    },
    {
        title: "Orfeus",
        urlIcon: "/orfeus-icon.png",
        text: "Una app de música gratuita, escuchá millones de canciones en alta calidad. Una interfaz intuitiva y fácil de usar,en donde podes adquirir Orfeus Premium y acceder a música sin anuncios y de mayor calidad, a un precio muy tentador respecto de sus competidores.",
        relevantDescription: "¡Con el plan Premium podes acceder a los videoclips oficiales de tu música favorita, probarlo gratis durante 30 días!",
        urlImage: "/orfeus.png",
        altImage: "orfeus",
        urlClick: "https://www.behance.net/gallery/146272239/Orfeus-App-UXUI",
    },
    {
        title: "SportShop",
        urlIcon: "/sportshop-icon.png",
        text: "SportShop es un tienda online especializada en el ambito deportivo, se destaca por sus excelentes precios y por trabajar con marcas top a nivel mundial. Encontrá ropa, pelotas, zapatillas, raquetas, botines o lo que necesites para realizar tu deporte e ir al siguiente nivel.",
        relevantDescription: "¡Trabajamos con marcas nacionales e internacionales para atletas de alto rendimiento, explorá la tienda que te llevará al siguiente nivel!",
        urlImage: "/sportshop.png",
        altImage: "sportshop",
        urlClick: "https://www.behance.net/gallery/148958819/SportShop",
    },
    {
        title: "Hotel Yacanto",
        urlIcon: "/yacanto-icon.png",
        text: "Fundado a principios del siglo XX en Córdoba, el Hotel Yacanto ofrece un estilo clásico, junto con un predio mayor a 9 hectareas, rodeadas de cierras, riachuelos y naturaleza, cuenta con un campo de golf entre otros servicios que háran que de sus vacaciones, placenteras. ",
        relevantDescription: "¡Organizamos tu boda soñada, te invitamos a vivir un evento inolvidable acompañado de nuestros mejores servicios de catering!",
        urlImage: "/yacanto.png",
        altImage: "hotel yacanto",
        urlClick: "https://www.behance.net/gallery/162372391/Hotel-Yacanto",
    }
]