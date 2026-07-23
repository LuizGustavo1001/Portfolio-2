export const aboutMeData = {
    sections: [
        {
            id: "profile",
            title: "Perfil Profissional",
            titleIcon: "/src/assets/icons/id-alt-filled.svg",
            type: "text",
            content: {
                paragraphs: [
                    "Desenvolvedor Full-Stack, construo API’s com arquitetura REST com objetivo, principalmente, de integrar sistemas web utilizando Node.js e PHP com bancos de dados.",
                    "Desenvolvo interfaces pensando em experiências intuitívas, responsivas e amigáveis para diferentes perfis de usuários. Sempre planejando reusabilidade e facilidade de manutenção de códigos.",
                    "Possuo grande interesse por design em geral e por frameworks modernos, como Vue.js."
                ]
            }
        },
        {
            id: "skills",
            title: "Habilidades",
            titleIcon: "/src/assets/icons/code.svg",
            type: "grid-list",
            content: [
                { 
                    name: "JavaScript",
                    category: "Desenvolvimento Web",
                    icon: "/src/assets/icons/js.svg"
                },
                {
                    name: "Node.js",
                    category: "Engenharia Backend",
                    icon: "/src/assets/icons/node.svg"
                },
                {
                    name: "Docker",
                    category: "Empacotador de Aplicações",
                    icon: "/src/assets/icons/docker.svg"
                },
                {
                    name: "PHP",
                    category: "Desenvolvimento Web",
                    icon: "/src/assets/icons/php.svg"
                },
                {
                    name: "Scss/Sass",
                    category: "Pré-processador de Estilos",
                    icon: "/src/assets/icons/scss.svg"
                },
                {
                    name: "Figma",
                    category: "UI/UX Design",
                    icon: "/src/assets/icons/figma.svg"
                },
                {
                    name: "MySQL",
                    category: "Gerenciador de Banco de Dados",
                    icon: "/src/assets/icons/mysql.svg"
                },
                {
                    name: "HTML & CSS",
                    category: "Fundamentos Web",
                    icon: "/src/assets/icons/html.svg"
                },
                {
                    name: "C++",
                    category: "Backend/Scripting",
                    icon: "/src/assets/icons/cpp.svg"
                },
                {
                    name: "Vue.js",
                    category: "JavaScript Framework",
                    icon: "/src/assets/icons/vue.svg"
                },
                {
                    name: "Adobe Illustrator",
                    category: "Design",
                    icon: "/src/assets/icons/ai.svg"
                }
            ]
        },
        {
            id: "background",
            title: "Formação",
            titleIcon: "/src/assets/icons/cap-filled.svg",
            type: "regular-list",
            content: [
                {
                    title: "Universidade Federal de Lavras (UFLA)",
                    subtitle: "Bacharelado em Ciência da Computação",
                    period: "2024 - Cursando",
                    description: ""
                }
            ]
        },
        {
            id: "experience",
            title: "Experiências",
            titleIcon: "/src/assets/icons/pencil.svg",
            type: "regular-list",
            content: [
                {
                    title: "Desenvolvimento Full-Stack",
                    subtitle: "Empresa/Projeto",
                    period: "2023 - Presente",
                    description: "Descrição Aqui"
                }
            ]
        },
        {
            id: "languages",
            title: "Idiomas",
            titleIcon: "/src/assets/icons/language.svg",
            type: "regular-list",
            content: [
                {
                    title: "Português",
                    subtitle: "Nativo"
                },
                {
                    title: "Inglês",
                    subtitle: "Avançado",
                }
            ]
        }
    ]
}