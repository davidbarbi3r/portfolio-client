import IProject from "../interfaces/project";
import mehFeatured from "../assets/cardsWide/mehWide2.jpg"
import gaomataSmall from "../assets/cardsSmall/GaomataSmall.png"
import portfolioSmall from "../assets/cardsSmall/PortfolioSmall.png"
import portfolioBackSmall from "../assets/cardsSmall/portfolioBackSmall.jpg"
import rickSmall from "../assets/cardsSmall/RickSmall.png"
import quizSmall from "../assets/cardsSmall/QuizzicalSmall.png"
import onlineSmall from "../assets/cardsSmall/OnlineSmall.png"
import gaomataWide from "../assets/cardsWide/gaomataWide.jpg"
import mehWide from "../assets/cardsWide/mehWide.jpg"
import onlineWide from "../assets/cardsWide/onlineWide.jpg"
import portfolioWide from "../assets/cardsWide/portfolioWide.jpg"
import quizWide from "../assets/cardsWide/quizWide.jpg"
import rickWide from "../assets/cardsWide/rickWide.jpg"

export const ProjectsArray: IProject[] = [
    {
        id: 1,
        name: "Meh Fight",
        descriptionEN: "This App is a one page Deck-building card-game. Chose your hero & fight the enemies!",
        descriptionFR: "Cette application est un jeu de deck-building en onepage. Le but du jeu ? Tuer tous les ennemies!",
        featured: true,
        dateStarted: "06/22",
        stack: ["TypeScript", "React"],
        github: "https://github.com/davidbarbi3r/meh-fight-ts",
        live: "https://davidbarbi3r.github.io/meh-fight-ts/",
        imgSmall: ``,
        imgWide: `${mehWide}`,
        imgFeatured: `${mehFeatured}`,
        skills: ["React Router", "Game logic", "Multiple states management", "Effects", "OOP", "Responsive"]
    },
    {
        id: 2,
        name: "Portfolio",
        descriptionEN: "My portfolio, built to introduce me, my skills & my hobbies",
        descriptionFR: "Mon portfolio, créé pour me présenter, mes compétences et mes passions",
        featured: false,
        dateStarted: "08/22",
        stack: ["TypeScript", "React", "node.js"],
        github: "https://github.com/davidbarbi3r/portfolio-client",
        live: "",
        imgSmall: `${portfolioSmall}`,
        imgWide: `${portfolioWide}`,
        skills: ["React Router", "Game logic", "Multiple states management", "Effects", "OOP", "Responsive"]
    },
    {
        id: 3,
        name: "Portfolio",
        descriptionEN: "The REST API for my portfolio/blog built with Express & connected to Mongo Atlas",
        descriptionFR: "L'API REST de mon portfolio/blog, fait avec Express & connecté à une base Mongo Atlas",
        featured: false,
        dateStarted: "08/22",
        stack: ["TypeScript", "Node.js", "Express", "MongoDb"],
        github: "#",
        live: "",
        imgSmall: `${portfolioBackSmall}`,
        imgWide: `${rickWide}`,
        skills: ["Joi validation", "Postman", "Building Rest API", "Database connection"]
    }, 
    {
        id: 4,
        name: "Rick & Morty",
        descriptionEN: "This App is born because a friend made me discover Rick & Morty API",
        descriptionFR: "Cette application est née car un ami m'a fait découvrir l'API de Rick & Morty",
        featured: false,
        dateStarted: "08/22",
        stack: ["TypeScript", "React"],
        github: "https://github.com/davidbarbi3r/rick-morty",
        live: "https://rick-morty-one-kappa.vercel.app/",
        imgSmall: `${rickSmall}`,
        imgWide: `${rickWide}`,
        skills: ["React Router", "Dynamic Routes", "Fetching rest API", "Responsive"]
    }, 
    {
        id: 5,
        name: "GaoMata",
        descriptionEN: "A website created for a Yoga Teacher friend to present herself, Responsive and optimized",
        descriptionFR: "Site web créé pour une amie professeure de Yoga à Limoges. Le site est responsive et optimisé pour l'affichage web",
        featured: false,
        dateStarted: "07/22",
        stack: ["JavaScript", "React"],
        github: "https://github.com/davidbarbi3r/gao-mata",
        live: "https://www.gaomata.fr/",
        imgSmall: `${gaomataSmall}`,
        imgWide: `${gaomataWide}`,
        skills: ["React Router", "Project management", "CRM", "SEO", "Optimization"]
    },
    {
        id: 6,
        name: "Quizzical",
        descriptionEN: "This App is a Quiz game proposed as a self-paced challenge for Scrimba's front-end development path.",
        descriptionFR: "Un jeu de Quiz proposé lors de ma formation Scrimba en tant que Challenge non guidé.",
        featured: false,
        dateStarted: "05/22",
        stack: ["JavaScript", "React"],
        github: "https://github.com/davidbarbi3r/quizzical",
        live: "https://davidbarbi3r.github.io/quizzical/",
        imgSmall: `${quizSmall}`,
        imgWide: `${quizWide}`,
        skills: ["Fetching rest API", "Game Logic", "Spread Operator", "Responsive"]
    },
    {
        id: 7,
        name: "CV online",
        descriptionEN: "This is a one page webSite used as CV before I've made an other one more conventional",
        descriptionFR: "Mon CV en ligne que j'utilisais avant de créer un CV plus conventionnel et mieux présenté.",
        featured: false,
        dateStarted: "06/22",
        stack: ["TypeScript", "React"],
        github: "https://github.com/davidbarbi3r/cvdavidbarbi3r",
        live: "https://cvdavidbarbi3r.vercel.app/",
        imgSmall: `${onlineSmall}`,
        imgWide: `${onlineWide}`,
        skills: ["useContext Hook", "Responsive"]
    }
]