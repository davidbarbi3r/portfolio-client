import IProject from "../interfaces/project";
import mehSmall from "../assets/mehfightSmall.jpg"
import mehLarge from "../assets/MehWide.png"
import gaomataSmall from "../assets/GaomataSmall.png"
import portfolioSmall from "../assets/PortfolioSmall.png"
import rickSmall from "../assets/RickSmall.png"
import quizSmall from "../assets/QuizzicalSmall.png"
import onlineSmall from "../assets/OnlineSmall.png"


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
        imgWide: `${mehLarge}`,
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
        imgWide: `${mehLarge}`,
        skills: ["React Router", "Game logic", "Multiple states management", "Effects", "OOP", "Responsive"]
    },
    {
        id: 3,
        name: "Rick & Morty",
        descriptionEN: "This App is born because a friend made me discover Rick & Morty API",
        descriptionFR: "Cette application est née car un ami m'a fait découvrir l'API de Rick & Morty",
        featured: false,
        dateStarted: "08/22",
        stack: ["TypeScript", "React"],
        github: "https://github.com/davidbarbi3r/rick-morty",
        live: "https://rick-morty-one-kappa.vercel.app/",
        imgSmall: `${rickSmall}`,
        imgWide: `https://rickandmortyapi.com/api/character/avatar/2.jpeg`,
        skills: ["React Router", "Dynamic Routes", "Fetching rest API", "Responsive"]
    }, 
    {
        id: 4,
        name: "GaoMata",
        descriptionEN: "A website created for a Yoga Teacher friend to present herself, Responsive and optimized",
        descriptionFR: "Site web créé pour une amie professeure de Yoga à Limoges. Le site est responsive et optimisé pour l'affichage web",
        featured: false,
        dateStarted: "07/22",
        stack: ["JavaScript", "React"],
        github: "https://github.com/davidbarbi3r/gao-mata",
        live: "https://www.gaomata.fr/",
        imgSmall: `${gaomataSmall}`,
        imgWide: `${gaomataSmall}`,
        skills: ["React Router", "Project management", "CRM", "SEO", "Optimization"]
    },
    {
        id: 5,
        name: "Quizzical",
        descriptionEN: "This App is a Quiz game proposed as a self-paced challenge for Scrimba's front-end development path.",
        descriptionFR: "Un jeu de Quiz proposé lors de ma formation Scrimba en tant que Challenge non guidé.",
        featured: false,
        dateStarted: "05/22",
        stack: ["JavaScript", "React"],
        github: "https://github.com/davidbarbi3r/quizzical",
        live: "https://davidbarbi3r.github.io/quizzical/",
        imgSmall: `${quizSmall}`,
        imgWide: `${quizSmall}`,
        skills: ["Fetching rest API", "Game Logic", "Spread Operator", "Responsive"]
    },
    {
        id: 6,
        name: "CV online",
        descriptionEN: "This is a one page webSite used as CV before I've made an other one more conventional",
        descriptionFR: "Mon CV en ligne que j'utilisais avant de créer un CV plus conventionnel et mieux présenté.",
        featured: false,
        dateStarted: "06/22",
        stack: ["TypeScript", "React"],
        github: "https://github.com/davidbarbi3r/cvdavidbarbi3r",
        live: "https://cvdavidbarbi3r.vercel.app/",
        imgSmall: `${onlineSmall}`,
        imgWide: `${onlineSmall}`,
        skills: ["useContext Hook", "Responsive"]
    }
]