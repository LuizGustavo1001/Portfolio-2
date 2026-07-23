<script setup>
  import { ref, onMounted } from "vue"

  let language = ref('pt-BR')
  const isActive = ref(false)
  const isLoading = ref(true)
  const selectedProj = ref('1')

  // Load Preferred Language
  const personalData  = ref(null)
  const aboutMeData   = ref(null)
  const projectsData  = ref(null)
  const generalData   = ref(null)

  const loadData = async (lang) => {
    isLoading.value = true
    language.value = lang

    try{
      const [personalMod, aboutMeMod, projectsMod, generalMod] = await Promise.all([
        import(`./data/${lang}/personal.js`),
        import(`./data/${lang}/about-me.js`),
        import(`./data/${lang}/projects.js`),
        import(`./data/${lang}/generalFeatures.js`)
      ])

      personalData.value = personalMod.personalData
      aboutMeData.value  = aboutMeMod.aboutMeData
      projectsData.value = projectsMod.projectsData
      generalData.value  = generalMod.generalFeatures
    }catch(err){
      console.error('Error trying to load modules:', err)
    }finally{
      isLoading.value = false
    }
  }

  const toggleLanguage = () => {
    const newLang = language.value === 'pt-BR' ? 'en-US' : "pt-BR"
    loadData(newLang)
  }

  onMounted(async () => {
    const preferredLanguages = navigator.languages || []
    const initialLang = preferredLanguages.includes('pt-BR') ? 'pt-BR' : 'en-US'

    await loadData(initialLang)
  })

  const reloadPage = () => {
    window.location.reload()
  }

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href
  }
</script>

<template>
  <div v-if="isLoading" class="stand-by-container">...</div>

  <!-- Header -->
  <template v-if="personalData && aboutMeData && projectsData">
    <header class="flex-05 align-center justify-between">
      <div class="flex-05 align-center">
        <img alt="Profile Picture" src="./assets/images/paint03.webp" width="50">
        <p>
          <strong>Luiz Gustavo</strong>
          <br>
          de Almeida Lopes
        </p>
      </div>
      <button class="btn icon-btn"><img src="./assets/icons/sidebar.svg" alt="sidebar icon"></button>
    </header>
    <!-- Main -->
    <main>
      <!-- Home Section -->
      <section id="home">
        <h1>Portfolio.</h1>
        <div class="flex-05 flex-column">
          <p>Luiz Gustavo de Almeida Lopes</p>
          <p>{{ generalData.sections.home.role }}</p>
        </div>
        <span class="flex-05 align-center">
          <a
            v-if="personalData.github"
            :href="personalData.github.href"
            class="btn btn-link"
            role="button"
            tabindex="0"
            ref="external"
            target="_blank"
          >
            <img :src="getImageUrl(personalData.github.icon)" :alt="personalData.github.name">
            <span>{{ personalData.github.name }}</span>
            <img src="./assets/icons/external-link.svg" alt="External arrow icon">
          </a>
          <a
            v-if="personalData.resume"
            :href="personalData.resume.href"
            class="btn btn-link"
            role="button"
            tabindex="0"
            ref="external"
            target="_blank"
          >
            <img :src="getImageUrl(personalData.resume.icon)" :alt="personalData.resume.name">
            <span>{{ personalData.resume.name }}</span>
            <img src="./assets/icons/external-link.svg" alt="External arrow icon">
          </a>
          <a
            v-if="personalData.linkedin"
            :href="personalData.linkedin.href"
            class="btn btn-link"
            role="button"
            tabindex="0"
            ref="external"
            target="_blank"
          >
            <img :src="getImageUrl(personalData.linkedin.icon)" :alt="personalData.linkedin.name">
            <span>{{ personalData.linkedin.name }}</span>
            <img src="./assets/icons/external-link.svg" alt="External arrow ">
          </a>
        </span>
      </section>

      <!-- About me Section -->
      <section id="about-me" class="flex-05 align-center justify-center">
        <div class="container">
          <div class="hero translucent">
            <aside class="flex-05 flex-column">
              <div class="flex-05 align-center">
                <div class="circle" style="--size: 20px; --color: green"></div>
                <div class="circle" style="--size: 20px; --color: yellow"></div>
                <div class="circle" style="--size: 20px; --color: red"></div>
                <img src="./assets/icons/id-alt.svg" alt="User id icon">
              </div>
              <div class="flex-05 flex-column">
                <h1><span class="medium-weight">{{ generalData.sections.aboutMe.title.medium }}</span> {{generalData.sections.aboutMe.title.bold }}</h1>
                <menu class="flex-5 flex-column">
                  <li
                    v-for="item in aboutMeData.sections"
                    :key="item.id"
                    class="btn btn-translucent"
                    role="button"
                    tabindex="0"
                  >
                    <div v-if="isActive" class="vertical-line thickness-4 border-rounded"></div>
                    <img :src="getImageUrl(item.titleIcon)" :alt="item.titleIcon">
                    <span>{{ item.title }}</span>
                  </li>
                </menu>
              </div>
              <div>
                <button class="btn btn-translucent"><img src="./assets/icons/arrow-left.svg" alt="Arrow left icon"></button>
                <button class="btn btn-translucent"><img src="./assets/icons/arrow-right.svg" alt="Arrow right icon"></button>
              </div>
            </aside>

            <div class="content translucent">
              <template v-for="section in aboutMeData.sections" :key="section.id" >
                <h2>{{ section.title }}</h2>

                <!-- Text Section -->
                <div v-if="section.type === 'text'">
                  <p v-for="p in section.content.paragraphs" :key="p"> {{ p }} </p>
                </div>

                <!-- Grid Section -->
                <menu v-else-if="section.type === 'grid-list'">
                  <li v-for="skill in section.content" :key="skill.name">
                    <img :src="getImageUrl(skill.icon)" :alt="skill.icon">
                    <div>
                      <p><strong>{{ skill.name }}</strong></p>
                      <p>{{ skill.category }}</p>
                    </div>
                  </li>
                </menu>

                <!-- Flex List Section -->
                <menu v-else-if="section.type === 'regular-list'">
                  <li v-for="item in section.content" :key="item.name">
                    <p><strong>{{item.title}}</strong></p>
                    <p>
                      {{ item.subtitle }}
                      <span v-if="item.period">• <strong>{{ item.period }}</strong></span>
                    </p>
                    <p><em>{{ item.description }}</em></p>
                  </li>
                </menu>
              </template>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Projects Section -->
      <section id="projects">
        <div class="container">
          <div class="section-title">
            <span>
              <img src="/src/assets/icons/bubble-filled.svg" alt="bubble icon" class="relative">
              <img src="/src/assets/icons/cube-filled.svg" alt="" class="absolute">
            </span>
            <h1><span class="medium-weight">{{ generalData.sections.projects.title.medium }}</span> {{ generalData.sections.projects.title.bold }}</h1>
          </div>

          <nav>
            <button class="btn"><img src="/src/assets/icons/arrow-left.svg" alt=""></button>
            <menu>
              <li v-for="project in projectsData" :key="project.id">
                <button>{{ project.title }}</button>
              </li>
            </menu>
            <button class="btn"><img src="/src/assets/icons/arrow-right.svg" alt=""></button>
          </nav>

          <div class="hero">
            <template v-for="project in projectsData" :key="project.id">
              <template v-if="selectedProj === project.id">
                <div class="image">
                  <nav>
                    <a :href="project.demo ? project.demo : '#'"
                        :hidden="!project.demo"
                        rel="external"
                        target="_blank">
                      Demo
                    </a>
                    <a :href="project.github" rel="external" target="_blank">Repositório</a>
                  </nav>
                  <picture>
                    <img :src="project.href" alt="" width="500">
                  </picture>
                </div>
                <div class="content translucent">
                  <div>
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                  </div>
                  <ul>
                    <li v-for="skill in project.skills" :key="skill">{{ skill }}</li>
                  </ul>
                </div>
              </template>
            </template>
          </div>
        </div>
      </section>
    
      <!-- Contact me Section -->
      <section id="contact">
        <div class="container relative">
          <div class="island absolute">
            <span>Contato</span>
            <img src="/src/assets/icons/waves.svg" alt="">
          </div>

          <div class="hero translucent">
            <div class="title">
              <h1><span class="medium-weight">{{ generalData.sections.contact.title.medium }}</span> {{ generalData.sections.contact.title.bold }}</h1>
              <p>Sinta-se à vontade para contatar-me utilizando as opções abaixo.</p>
            </div>

            <img src="/src/assets/images/me.jpg" alt="Profile Picture" width="100">

            <menu>
              <li v-for="item in personalData" :key="item.name" class="translucent">
                <div class="icon-wrapper">
                  <img :src="item.icon" :alt="item.name">
                </div>

                <div>
                  <p class="muted-text">{{ item.name }}</p>
                  <p><strong>{{ item.placeholder }}</strong></p>
                </div>

                <a :href="item.href" rel="external" target="_blank"> <img src="/src/assets/icons/external-link.svg" alt=""> </a>
              </li>
            </menu>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div>
        <div>
          <div>
            <h2>Luiz Gustavo <span class="medium-weight">de Almeida Lopes</span></h2>
            <p class="muted-text">{{ generalData.sections.home.role }}</p>
          </div>

          <nav>
            <a :href="personalData.github.href"
               class="btn-link"
               rel="external"
               target="_blank">
              <img :src="personalData.github.icon" alt="github icon">
            </a>
            <a :href="personalData.linkedin.href"
               class="btn-link"
               rel="external"
               target="_blank">
              <img :src="personalData.linkedin.icon" alt="linkedin icon">
            </a>
            <a :href="personalData.instagram.href"
               class="btn-link"
               rel="external"
               target="_blank">
              <img :src="personalData.instagram.icon" alt="instagram icon">
            </a>
          </nav>
        </div>

        <div>
            <nav v-for="item in generalData.sections.footer.navLinks" :key="item.title">
              <h2>{{ item.title }}</h2>
              <ul>
                <li v-for="link in item.links" :key="link.name"><a :href="link.href"></a>{{ link.name }}</li>
              </ul>
            </nav>
        </div>
      </div>

      <hr>

      <div>
        <a href="" class="muted-text">Images credits</a>
        <p class="muted-text">Developed with 💚 by <strong>Luiz Gustavo</strong> utilizando <strong>Vue.js</strong></p>
      </div>
    </footer>

    <button @click="toggleLanguage" :disabled="isLoading">Trocar idioma</button>
  </template>

  <!-- Empty State Container -->
  <template v-else>
    <div class="flex-05 flex-column justify-center align-center" style="height: 100dvh;">
      <h1>Error trying to load modules</h1>
      <small>Reload the page and try again...</small>
      <button @click="reloadPage">Reload Page</button>
    </div>
  </template>
</template>
