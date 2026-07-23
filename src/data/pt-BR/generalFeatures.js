import { personalData } from './personal.js'

export const generalFeatures = {
    sections: {
        home: {
            role: "Desenvolvedor Web Full-Stack"
        },
        aboutMe: {
            title: {
                medium: "Sobre",
                bold: "Mim."
            }
        },
        projects: {
            title: {
                medium: "últimso",
                bold: "Projetos."
            }
        },
        contact: {
            title: {
                medium: "Entre em",
                bold: "Contato.",
            }
        },
        footer: {
            navLinks: [
                {
                    title: "Navegação",
                    links: [
                        {
                            name: "Início",
                            href: "#home"
                        },
                        {
                            name: "Sobre mim",
                            href: "#about-me"
                        },
                        {
                            name: "Projetos",
                            href: "#projects"
                        },
                        {
                            name: "Contato",
                            href: "#contact"
                        }
                    ]
                },
                {
                    title: "Outros",
                    links: [
                        {
                            name: personalData.mail.name,
                            href: personalData.mail.href
                        },
                        {
                            name: personalData.resume.name,
                            href: personalData.resume.href
                        },
                    ]
                }
            ]
        }
    }
}