import dotenv from "dotenv"

dotenv.config()

interface IFirebase {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

interface IServer {
    url: string
}

interface IConfig {
    firebase: IFirebase
    server: IServer
}

const config:IConfig = {
    firebase: {
        apiKey: process.env.FIRE_APIKEY || "",
        authDomain: process.env.FIRE_AUTHDOMAIN || "",
        projectId: "db-portfolio-c509f",
        storageBucket: "db-portfolio-c509f.appspot.com",
        messagingSenderId: process.env.FIRE_SENDERID || "",
        appId: process.env.FIRE_APPID || ""
    }, 
    server: {
        url: process.env.SERVER_URL || ""
    }
}

export default config