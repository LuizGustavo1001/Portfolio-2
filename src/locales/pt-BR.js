export default {
    personalLinks: {
        mail: "Email",
        resume: "Currículo",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram"
    },
    skills: {
        title: "Habilidades",
        content: {
            js: {
                category: "Desenvolvimento Web"
            },
            node: {
                category: "Engenharia Back-End"
            },
            docker: {
                category: "Empacotador de Aplicações"
            },
            php: {
                category: "Desenvolvimento Web"
            },
            scss: {
                category: "Pré-processador de Estilos"
            },
            figma: {
                category: "UI/UX Design"
            },
            mysql: {
                category: "Gerenciador de Banco de Dados"
            },
            html: {
                category: "Fundamentos Web"
            },
            cpp: {
                category: "Backend/Scripting"
            },
            vue: {
                category: "Framework JavaScript"
            },
            illustrator: {
                category: "Design"
            }
        }
    },
    projects: {
        dictionary: {
            title: "Dicionário de Estudos",
            description: "Sistema funciona como gerenciador de vocabulário com foco em estudantes e pesquisadores, separando termos em pastas, sendo possível filtrar e realizar operações do tipo CRUD para cada um deles. A plataforma conta com uma arquitetura de API RESTful, com autenticação JWT para cada usuário cadastrado, contando com armazenamento na nuvem utilizando Cloudinary API. ",
        },
        acai: {
            title: "Projeto Açaí 2.0",
            description: "Plataforma de e-commerce completa, com gerenciamento de usuários, controle de vendas e painel administrativo com suporte a operações CRUD. Aplicação desenvolvida inteiramente em PHP, garantindo organização e segurança no fluxo de informações. A cada pedido realizado, os dados da transação são automaticamente registrados em uma planilha online, incluindo informações do cliente, produtos adquiridos e locales da compra, facilitando o acompanhamento e a gestão das vendas."
        },
        todo: {
            title: "Lista de Tarefas",
            description: "Lista de tarefas online contendo filtros e tema escuro utilizando JavaScript. A aplicação recebe dados a partir de um arquivo JSON, responsável por armazenar informações sobre cada tarefa. Implementa um CRUD simples, permitindo criar, visualizar, atualizar e remover tarefas, além de gerenciar seus estados entre concluída e em andamento."
        },
        animeList: {
            title: "Lista de Animes",
            description: "C++ Anime catalog developed using a purely declared double linked list. The project features CRUD operations, show especific sorted/filtered interval and save changes option."
        }
    },
    home: {
        role: "Desenvolvedor Web {role}",
    },
    aboutMe: {
        title: {
            medium: "Sobre",
            bold: "Mim"
        },
        sections: {
            profile: {
                title: "Perfil Profissional",
                content: {
                    paragraphs: [
                        {
                            tag: "p",
                            classes: [],
                            content: "Desenvolvedor Full-Stack, construo API’s com arquitetura REST com objetivo, principalmente, de integrar sistemas web utilizando Node.js e PHP com bancos de dados."
                        },
                        {
                            tag: "p",
                            classes: [],
                            content: "Desenvolvo interfaces pensando em experiências intuitívas, responsivas e amigáveis para diferentes perfis de usuários. Sempre planejando reusabilidade e facilidade de manutenção de códigos."
                        },
                        {
                            tag: "p",
                            classes: [],
                            content: "Possuo grande interesse por design em geral e por frameworks modernos, como Vue.js."
                        }
                    ]
                }
            },
            skills: {
                title: "Habilidades"
            },
            backgrounds: {
                title: "Formação",
                content: {
                    ufla: {
                        title: "Bacharelado em Ciência da Computação",
                        subtitle: "Universidade Federal de Lavras (UFLA)",
                        period: "2024 - Em Andamento",
                        description: ""
                    }
                }

            },
            experiences: {
                title: "Experiências",
                content: {
                    project01: {
                        title: "Desenvolvedor Full-Stack",
                        subtitle: "Empresa X",
                        period: "2023 - Atualmente",
                        description: "Descrição aqui"
                    }
                }
            },
            languages: {
                title: "Idiomas",
                content: {
                    ptbr: {
                        title: "Português",
                        subtitle: "Nativo",
                        period: "",
                        description: ""
                    },
                    en: {
                        title: "Inglês",
                        subtitle: "Avançado",
                        period: "",
                        description: ""
                    }
                }
            }
        }
    },
    projectsSection: {
        title: {
            medium: "Últimos",
            bold: "Projetos"
        }
    },
    contact: {
        island: "Contact",
        title: {
            medium: "Entre em",
            bold: "Contato",
        },
        subtitle: "Sinta-se à vontade para contatar-me utilizando as opções abaixo."
    },
    sidebar: {
        resume: "Baixar Currículo",
        language: "Idioma - Português",
        lightTheme: "Tema - Claro",
        darkTheme: "Tema - Escuro",
        sections: {
            social: {
                title: "Redes Sociais"
            },
            others: {
                title: "Outros"
            }
        }
    },
    navbar: {
        items: {
            home: {
                label: "Início"
            },
            aboutMe: {
                label: "Sobre Mim",
            },
            projects: {
                label: "Projetos",
            },
            contact:{
                label: "Contato",
            }
        }
    }
}