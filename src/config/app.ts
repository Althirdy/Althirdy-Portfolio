type AppConfigType = {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
    name: import.meta.env.VITE_APP_NAME ?? "Portfolio",
    github: {
        title: "Althirdy-Portfolio",
        url: "https://github.com/Althirdy",
    },
    author: {
        name: "Althirdy",
        url: "https://github.com/Althirdy",
    }
}

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
