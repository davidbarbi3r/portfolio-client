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
    admin: string
}

interface IConfig {
    firebase: IFirebase
    server: IServer
}

const config:IConfig = {
    firebase: {
        apiKey: import.meta.env.VITE_FIRE_APIKEY || "",
        authDomain: import.meta.env.VITE_FIRE_AUTHDOMAIN || "",
        projectId: "db-portfolio-c509f",
        storageBucket: "db-portfolio-c509f.appspot.com",
        messagingSenderId: import.meta.env.VITE_FIRE_SENDERID || "",
        appId: import.meta.env.FIRE_APPID || ""
    }, 
    server: {
        url: import.meta.env.VITE_SERVER_URL || "",
        admin: import.meta.env.VITE_SERVER_ADMIN || "",
    }
}

export default config