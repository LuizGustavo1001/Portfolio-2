<script setup>
  import {ref, watch, onMounted, onUnmounted, nextTick} from "vue"
  import { useI18n } from 'vue-i18n'
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger)

  const { locale } = useI18n()

  // Components
  import Overlay from "./components/overlay.vue"
  import Sidebar from "./components/sidebar.vue"
  import Header from "./components/sections/header.vue"
  import Home from "./components/sections/home.vue"
  import NavBar from "./components/navBar.vue"
  import AboutMe from "./components/sections/aboutMe.vue"
  import Projects from "./components/sections/projects.vue"
  import Contact from "./components/sections/contact.vue"
  import Footer from "./components/sections/footer.vue";

  // Toggle overlay
  const overlayIsOpen = ref(false)

  const toggleOverlay = () => {
    overlayIsOpen.value = !overlayIsOpen.value
    document.body.classList.toggle("overflow-hidden")
  }

  // Toggle language
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


  // Toggle theme
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


  // Toggle aside
  const asideIsOpen = ref(false)

  const handleToggleAside = () => {
    asideIsOpen.value = !asideIsOpen.value
    toggleOverlay()
  }

  const handleClickOutside = (event) => {
    const clickedInsideSidebar = event.target.closest('#sidebar')
    const clickedToggleButton = event.target.closest('#sidebar-toggle-btn')

    if(asideIsOpen.value && !clickedInsideSidebar && !clickedToggleButton){
      handleToggleAside()
    }
  }


  // Others
  const reloadPage = () => {
    window.location.reload()
  }

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href
  }

  const container = ref(null)
  let context

  onMounted(async () => {
    window.addEventListener('click', handleClickOutside)

    await nextTick()

    // scroll trigger main sections animation
    context = gsap.context( () => {
      const mainSections = gsap.utils.toArray('.scroll-trigger-section')

      mainSections.forEach(section => {
        const containerInside = section.querySelector(".container")
        const target = containerInside || section

        gsap.fromTo(
            target,
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
        )
      })
    }, container.value)

    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)

    if(context) context.revert()
  })
</script>

<template>
  <Overlay :class="overlayIsOpen ? 'active' : ''"/>

  <NavBar/>

  <Sidebar
      @toggle-language="handleToggleLanguage"
      @toggle-theme="handleToggleTheme"
      :theme="currentTheme"
      :class="asideIsOpen ? 'active' : ''" id="sidebar"
  />

  <Header @toggle-aside="handleToggleAside"/>

  <main>
    <Home id="home"/>

    <AboutMe id="aboutMe" class="scroll-trigger-section"/>

    <Projects id="projects" class="scroll-trigger-section"/>

    <Contact id="contact" class="scroll-trigger-section"/>
  </main>

  <Footer/>

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
