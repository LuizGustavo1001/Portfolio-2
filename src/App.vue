<script setup>
  import {ref, watch, onMounted, onUnmounted} from "vue"
  import { icons } from "/src/locales/icons.js"
  import { useI18n } from 'vue-i18n'
  import Overlay from "./components/overlay.vue";
  import Sidebar from "./components/sidebar.vue";
  import Header from "./components/header.vue";
  import Home from "./components/home.vue";
  import ActionButton from "./components/actionButton.vue";

  const { locale } = useI18n()

  /* toggle language */
  const getInitLang = () => {
    const savedLang = localStorage.getItem("lang")
    if(savedLang) return savedLang

    return locale.value
  }

  const currentLanguage = ref(getInitLang())
  locale.value = currentLanguage.value

  const handleToggleLanguage = () => {
    const newLang = currentLanguage.value === 'ptBR' ? 'enUS' : 'ptBR'

    currentLanguage.value = newLang
    locale.value = newLang
    localStorage.setItem("lang", newLang)
  }

  /* toggle theme */
  const getInitTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) return savedTheme

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'darkTheme' : 'lightTheme'
  }

  const currentTheme = ref(getInitTheme())

  watch(currentTheme, (newTheme) => {
    if(newTheme === "darkTheme") {
      document.body.classList.add("dark-theme")
    }else{
      document.body.classList.remove("dark-theme")
    }

    localStorage.setItem("theme", newTheme)
  }, {immediate: true})

  const handleToggleTheme = (theme) => {
    if(theme){
      currentTheme.value = theme
    }else{
      currentTheme.value = currentTheme.value === 'darkTheme' ? 'lightTheme' : 'darkTheme'
    }
  }


  const reloadPage = () => {
    window.location.reload()
  }

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href
  }


  /* toggle aside */
  const asideIsOpen = ref(false)

  const handleToggleAside = () => {
    asideIsOpen.value = !asideIsOpen.value
  }

  const handleClickOutside = (event) => {
    const clickedInsideSidebar = event.target.closest('#sidebar')
    const clickedToggleButton = event.target.closest('#sidebar-toggle-btn')

    if (asideIsOpen.value && !clickedInsideSidebar && !clickedToggleButton) {
      asideIsOpen.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
  })
</script>

<template>
  <Overlay :class="asideIsOpen ? 'active' : ''"/>

  <Sidebar
      @toggle-language="handleToggleLanguage"
      @toggle-theme="handleToggleTheme"
      :theme="currentTheme"
      :class="asideIsOpen ? 'active' : ''" id="sidebar"
  />

  <Header @toggle-aside="handleToggleAside"/>

  <main>
    <Home/>

  </main>

  <!-- Empty State Container -->
  <!--
  <template>
    <div class="flex-05 flex-column justify-center align-center" style="height: 100dvh;">
      <h1>Error trying to load modules</h1>
      <small>Reload the page and try again...</small>
      <button @click="reloadPage">Reload Page</button>
    </div>
  </template>
  -->
</template>
