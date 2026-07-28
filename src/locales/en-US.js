export default {
    personalLinks: {
        mail: "Email",
        resume: "Resume",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
    },
    skills: {
        title: "Skills",
        content: {
            js: {
                category: "Web Development"
            },
            node: {
                category: "Backend Engineering"
            },
            docker: {
                category: "Application packager"
            },
            php: {
                category: "Web Development"
            },
            scss: {
                category: "Style Preprocessor"
            },
            figma: {
                category: "UI/UX Design"
            },
            mysql: {
                category: "Database Manager"
            },
            html: {
                category: "Web Fundamentals"
            },
            cpp: {
                category: "Backend/Scripting"
            },
            vue: {
                category: "JavaScript Framework"
            },
            illustrator: {
                category: "Design"
            }
        }
    },
    projects: {
        dictionary: {
            title: "Studies Dictionary",
            description: "The system works as a vocabulary manager focused on students and researchers who need a space to centralize their Knowledge, separating terms inside folders, allowing the user to filter and perform CRUD operations for each of them. The plataform features RESTful API architecture, with JWT authentication for registered user, as well as cloud storage using Cloudinary API.",
        },
        acai: {
            title: "Açaí Project 2.0",
            description: "Complete e-commerce plataform, with user management, sales control and administrative panel supporting CRUD operations. Application developed entirely using PHP, ensuring organization and security at locales flow. With each order placed, the transaction locales is automatically recorded in an online spreadsheet, including client locales, the acquired products and buying date, making it easier to track and manage sales.",
        },
        todo: {
            title: "ToDo List",
            description: "Online To-Do List featuring filters and dark mode, developed using JavaScript. The application retrieves locales from a JSON file responsible for storing task information. It implements a simple CRUD system, allowing users to create, view, update, and delete tasks, as well as manage their status between completed and in progress.",
        },
        animeList: {
            title: "Anime List",
            description: "C++ Anime catalog developed using a purely declared double linked list. The project features CRUD operations, show especific sorted/filtered interval and save changes option.",
        }
    },
    home: {
        role: "{role} Web Developer",
    },
    aboutMe: {
        title: {
            medium: "About",
            bold: "Me"
        },
        sections: {
            profile: {
                title: "Professional Profile",
                content: {
                    paragraphs: [
                        {
                            tag: "p",
                            classes: "",
                            content: "Full-Stack Developer, i build API's with REST architecture aiming, mainly, integrate web systems using Node.js and PHP with databases."
                        },
                        {
                            tag: "p",
                            classes:  [],
                            content: "I develop interfaces with intuitive, responsive and friendly experiences in mind for all different users profile. Always planning codes for reuse and for ease of maintenance.",
                        },
                        {
                            tag: "p",
                            classes: "",
                            content: "I have a strong interest in design in general and in modern Front-End Frameworks, such as Vue.js."
                        }
                    ]
                }
            },
            skills:{
              title: "Skills"
            },
            backgrounds: {
                title: "Background",
                content: {
                    ufla: {
                        title: "Bachelor's degree in Computer Science",
                        subtitle: "Universidade Federal de Lavras (UFLA)",
                        period: "2024 - Currently",
                        description: ""
                    }
                }
            },
            experiences: {
                title: "Experiences",
                content: {
                    project01: {
                        title: "Full-Stack Development",
                        subtitle: "Project/Enterprise",
                        period: "2023 - Now",
                        description: "Description here"
                    }
                }
            },
            languages: {
                title: "Languages",
                content: {
                    ptbr: {
                        title: "Portuguese",
                        subtitle: "Native",
                        period: "",
                        description: ""
                    },
                    en: {
                        title: "English",
                        subtitle: "Advanced",
                        period: "",
                        description: ""
                    }
                }
            }
        }
    },
    projectsSection: {
        title: {
            medium: "Latest",
            bold: "Projects"
        }
    },
    contact: {
        island: "Contact",
        title: {
            medium: "Get in",
            bold: "Touch",
        },
        subtitle: "Fell free to contact me using the options down bellow."
    },
    sidebar: {
        resume: "View Resume",
        language: "Languange - English",
        lightTheme: "Theme - Light",
        darkTheme: "Theme - Dark",
        sections: {
            social: {
                title: "Social Media"
            },
            others: {
                title: "Others"
            }
        }
    },
    navbar: {
        items: {
            home: {
                label: "Home"
            },
            aboutMe: {
                label: "About Me",
            },
            projects: {
                label: "Projects",
            },
            contact:{
                label: "Contact",
            }
        }
    }
}