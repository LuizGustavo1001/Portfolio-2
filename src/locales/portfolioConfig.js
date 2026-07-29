import { icons } from "./icons.js"

export const personalLinks = {
    mail: {
        href: "mailto:gustavw1001@gmail.com",
        icon: icons.mailFilled,
    },
    resume: {
        href: "",
        icon: icons.documentFilled,
    },
    github: {
        href: "https://github.com/LuizGustavo1001",
        icon: icons.github,
    },
    instagram: {
        href: "https://www.instagram.com/luiz_g1001/",
        icon: icons.instagram,
    },
    linkedin: {
        href: "https://www.linkedin.com/in/luizgustavo1001/",
        icon: icons.linkedinFilled,
    }
}

export const projects = {
    dictionary: {
      href: "/src/assets/images/dicionario.png",
      skills: ["Node.js", "Javascript", "Docker", "npm", "JWT", "Sass", "Express.js", "MySQL", "Figma", "Cloudinary API", "RESTful API"],
      repository: "https://github.com/LuizGustavo1001/Dicionario_Estudos",
      demo: ""
    },
    acai: {
        href: "/src/assets/images/acai.webp",
        skills: ["PHP OOP", "MySQL", "HTML5", "CSS3", "Cloudinary API", "Composer", "Google Cloud API", "Figma"],
        repository: "https://github.com/LuizGustavo1001/Projeto-Acai-2.0",
        demo: ""
    },
    todo: {
        href: "/src/assets/images/todo.webp",
        skills: ["JavaScript", "JSON", "Node.js", "Scrapping", "CRUD"],
        repository: "https://github.com/LuizGustavo1001/TODO-WebPage-JS",
        demo: "https://vercel-todo-list-js.vercel.app/"
    },
    animeList: {
        href: "/src/assets/images/cpp.webp",
        skills: ["C++", "CSV Scrapping"],
        repository: "https://github.com/LuizGustavo1001/Anime-Catalog-in-cpp",
        demo: ""
    }
}

export const aboutMe = {
    sections: [
        {
            id: "profile",
            icon: icons.userIdFilled,
            type: "text"
        },
        {
            id: "skills",
            icon: icons.code,
            type: "grid-list"
        },
        {
            id: "backgrounds",
            icon: icons.capFilled,
            type: "regular-list",
            content: [
                {
                    id: "ufla"
                }
            ]
        },
        {
            id: "experiences",
            icon: icons.pencilFilled,
            type: "regular-list",
            content: [
                {
                    id: "project01"
                }
            ]
        },
        {
            id: "languages",
            icon: icons.translate,
            type: "regular-list",
            content: [
                {
                    id: "ptbr"
                },
                {
                    id: "en"
                }
            ]
        }
    ]
}

export const skills = [
    {
        id: "js",
        name: "JavaScript",
        icon: "/src/assets/images/js.svg",
    },
    {
        id: "node",
        name: "Node.js",
        icon: "/src/assets/images/node.svg",
    },
    {
        id: "docker",
        name: "Docker",
        icon: "/src/assets/images/docker.svg"
    },
    {
        id: "php",
        name: "PHP",
        icon: "/src/assets/images/php.svg"
    },
    {
        id: "scss",
        name: "Scss/Sass",
        icon: "/src/assets/images/scss.svg"
    },
    {
        id: "figma",
        name: "Figma",
        icon: "/src/assets/images/figma.svg"
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: "/src/assets/images/mysql.svg"
    },
    {
        id: "html",
        name: "HTML & CSS",
        icon: "/src/assets/images/html.svg"
    },
    {
        id: "cpp",
        name: "C++",
        icon: "/src/assets/images/cpp.svg"
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: "/src/assets/images/vue.svg"
    },
    {
        id: "illustrator",
        name: "Adobe Illustrator",
        icon: "/src/assets/images/illustrator.svg"
    }
]

export const backgrounds = [
    {
        id: "ufla"
    },
]

export const experiences = [
    {
        id: "project01"
    }
]

export const sidebar = [
    {
        id: "social",
        items: [
            {
                id: "github"
            },
            {
                id: "linkedin"
            },
            {
                id: "instagram"
            }
        ]
    },
    {
        id: "others",
        items: [
            {
                id: "resume"
            },
            {
                id: "toggleLanguage"
            },
            {
                id: "toggleTheme"
            }
        ]
    }
]

export const navbar = {
    items: [
        {
            id: "home",
            href: "#home",
            icon: icons.home,
            iconActive: icons.homeFilled
        },
        {
            id: "aboutMe",
            href: "#aboutMe",
            icon: icons.userFrame,
            iconActive: icons.userFrameFilled
        },
        {
            id: "projects",
            href: "#projects",
            icon: icons.cube,
            iconActive: icons.cubeFilled
        },
        {
            id: "contact",
            href: "#contact",
            icon: icons.inbox,
            iconActive: icons.inboxFilled
        }
    ]
}