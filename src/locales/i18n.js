import { createI18n } from "vue-i18n"
import ptBR from "/src/locales/pt-BR.js"
import enUS from "/src/locales/en-US.js"

const defaultLanguage = navigator.language.startsWith('pt') ? 'ptBR' : 'enUS'

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: defaultLanguage,
    fallbackLocale: "enUS",
    messages: {
        ptBR,
        enUS
    }
})