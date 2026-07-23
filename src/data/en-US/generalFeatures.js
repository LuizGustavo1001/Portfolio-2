import { personalData } from './personal.js'

export const generalFeatures = {
    sections: {
        home: {
            role: "Full-Stack Web Developer"
        },
        aboutMe: {
            title: {
                medium: "About",
                bold: "Me."
            }
        },
        projects: {
            title: {
                medium: "Latest",
                bold: "Projects."
            }
        },
        contact: {
            title: {
                medium: "Get in",
                bold: "Touch.",
            }
        },
        footer: {
            navLinks: [
                {
                    title: "Navigation",
                    links: [
                        {
                            name: "Home",
                            href: "#home"
                        },
                        {
                            name: "About me",
                            href: "#about-me"
                        },
                        {
                            name: "Projects",
                            href: "#projects"
                        },
                        {
                            name: "Contact",
                            href: "#contact"
                        }
                    ]
                },
                {
                    title: "Others",
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