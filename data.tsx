import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "About",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Contact",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Mi primer contrato de trabajo",
        subtitle: "En Makito",
        description: "Después de las prácticas fuí contratado para trabajar en la empresa. Estuve actualizando la aplicación que desarrollé en las prácticas con Python y Django añadiendo nuevas funcionalidades y mejorando el rendimiento del mismo.",
        date: "Jun 2023 ",
    },
    {
        id: 2,
        title: "Prácticas en una empresa",
        subtitle: "En Makito",
        description: "Durante este periodo me dediqué a realizar programas en Java dedicados a filtrar información relevante, así como el inicio de un proyecto con python y Django con la finalidad de tener un cuadrante de horarios de los trabajadores del taller. Desarrollé dos apis en java y Sprinboot para actualizar la información de la base de datos del programa con la base de datos de la empresa. ",
        date: "Abril 2023 ",
    },
    {
        id: 3,
        title: "Inicio en el Grado Superior",
        subtitle: "Desarrollo de Aplicaciones Web",
        description: "Este grado superior me proporcionó una formación integral en el desarrollo de aplicaciones web, abarcando desde la planificación y diseño de interfaces hasta la programación backend. Aprendí a utilizar lenguajes como HTML, CSS, JavaScript y frameworks como React para el Front, y Sprinboot para el Backend, además de gestionar bases de datos con SQL. Esta formación me capacitó para crear soluciones web dinámicas y adaptables a las necesidades de los usuarios.",
        date: "Sept 2023",
    },
    {
        id: 4,
        title: "Inicio en prácticas",
        subtitle: "Mantenimiento de una web",
        description: "Durante este periodo me dediqué realizar el mantenimiento de la web de una tienda online así como solucionar los problemas y mejorar el rendimiento en los equipos electrónicos.",
        date: "Jun 2022",
    },
    {
        id: 5,
        title: "Inicio en una FP de Grado Medio",
        subtitle: "Sistemas Microinformático y Redes.",
        description: "Durante estas prácticas, adquirí conocimientos básicos y habilidades prácticas en el mantenimiento y configuración de sistemas microinformáticos y redes. Aprendí a instalar y gestionar sistemas operativos, configurar redes locales, realizar diagnósticos y solucionar problemas técnicos. Esta experiencia me permitió consolidar mi formación teórica y desarrollar una comprensión más profunda de las tecnologías informáticas esenciales.",
        date: "Sept 2021",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Proyectos en React",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text: "Proyectos en Vue",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos en Java",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 8,
        text: "Proyectos en Python",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];