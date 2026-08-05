<template>
  <!-- About Me Section -->
  <section class="section-box flex-05 align-center justify-center">
    <div class="container flex-05 justify-center translucent relative">
      <div class="background-text absolute">
        <span>{{ $t(`aboutMe.title.medium`) }} {{ $t(`aboutMe.title.bold`) }}</span>
      </div>

      <div class="container-body w-full">
        <!-- Sidebar -->
        <nav class="sidebar flex-05 flex-column" role="navigation" aria-label="about me main navigation" style="gap: 1em;">
          <div class="flex-05 flex-column">
            <div class="flex-05 align-center">
              <div class="flex-05 align-center flex-grow-1">
                <div class="dot" style="--color: lightgreen"></div>
                <div class="dot" style="--color: yellow"></div>
                <div class="dot"></div>
              </div>
              <Icon :icon="icons.userIdFilled"/>
            </div>
            <h1 class="line-overflow">{{ $t(`aboutMe.title.medium`) }} <strong>{{ $t(`aboutMe.title.bold`) }} </strong>.</h1>
          </div>

          <menu v-if="aboutMe.sections" class="menu">
            <li v-for="item in aboutMe.sections"
                :key="item.id"
                class="menu-item flex-05 align-center item medium-weight"
                :class="item.id === selectedItem ? 'active' : undefined" :data-id="item.id"
                @click="toggleSelected(item.id)"
            >
              <div class="highlight-bar"></div>

              <Icon :icon="item.icon"/>

              <p class="flex-grow-1">{{ $t(`aboutMe.sections.${item.id}.title`) }}</p>
            </li>
          </menu>
        </nav>

        <!-- Content -->
        <div class="content-panel flex-05 flex-column flex-grow-1">
          <div v-for="section in aboutMe.sections"
                :key="section.id"
                v-show="section.id === selectedItem"
                class="flex-05 flex-column content-panel-animation" style="gap: 1.5em; overflow: hidden"
          >
            <h2>{{ $t(`aboutMe.sections.${section.id}.title`) }}</h2>
            <div class="content flex-grow-1"
                  :class="[
                     section.type === 'grid-list' ? 'grid-list' : undefined,
                     section.type === 'text' ? ['flex-05', 'flex-column'] : undefined,
                     section.type === 'regular-list' ? ['flex-05', 'flex-column', 'regular-list'] : undefined
                  ]"
            >
              <!-- Regular Text Section Type -->
              <template v-if="section.type === 'text'">
                <template v-for="paragraph in $tm(`aboutMe.sections.${section.id}.content.paragraphs`)" :key="paragraph.tag">
                  <component :is="paragraph.tag ?? 'p'" :class="paragraph.classes ?? ''" class="paragraph">
                    {{ paragraph.content ?? '' }}.
                  </component>
                </template>
              </template>

              <!-- Grid List Section Type -->
              <template v-else-if="section.type === 'grid-list'">
                <div v-for="skill in skills" :key="skill.id" class="grid-item flex-05 align-center">
                  <img :src="`/images/${skill.icon}`" :alt="skill.id">

                  <div class="flex-05 flex-column" style="gap: 0;">
                    <h3>{{ skill.name }}</h3>
                    <p class="text-muted medium-weight">{{ $t(`skills.content.${skill.id}.category`) }}</p>
                  </div>
                </div>
              </template>

              <!-- Flex List Section Type -->
              <template v-else-if="section.type === 'regular-list'">
                <div v-for="item in section.content" :key="item.id" class="flex-05 align-center">
                  <div class="vertical-line"></div>

                  <div class="flex-05 flex-column" style="gap: 0.3em">
                    <h3>{{ $tm(`aboutMe.sections.${section.id}.content.${item.id}.title`) }}</h3>
                    <p class="text-muted medium-weight">
                      {{ $tm(`aboutMe.sections.${section.id}.content.${item.id}.subtitle`) }}

                      <span v-if="$t(`aboutMe.sections.${section.id}.content.${item.id}.period`)">
                        • <em>({{ $t(`aboutMe.sections.${section.id}.content.${item.id}.period`) }})</em>
                      </span>
                    </p>

                    <p v-if="$te(`aboutMe.sections.${section.id}.content.${item.id}.description`)">
                      {{ $t(`aboutMe.sections.${section.id}.content.${item.id}.description`) }}
                    </p>

                    <a v-if="$te(`aboutMe.sections.${section.id}.content.${item.id}.link`)"
                       :href="$t(`aboutMe.sections.${section.id}.content.${item.id}.link`)"
                       rel="noopener noreferrer"
                       target="_blank"
                       style="width: fit-content"
                       class="text-muted medium-weight"
                    >
                      Certificate
                    </a>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .background-text{
    top: 0;
    left: 50%;
    transform: translate(-50%, -70%);
    font-size: clamp(3em, 15dvw, 12em);
    z-index: -1;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  .background-text span{
    opacity: 0.5;
    background: linear-gradient(to bottom, var(--slate-600), transparent);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .container{
    height: 100dvh;
    max-height: 750px;

    background: radial-gradient(var(--transparent-30) 90%, transparent), url("/images/paint04.webp") no-repeat center center ;
    background-size: cover;
    box-shadow: 0 5px 10px var(--shadow-bold);
    border-radius: 16px;
  }

  .container-body{
    padding: 0.5em;
    max-width: 1200px;

    background: var(--transparent-gradient);
    box-shadow: 0 0 5px var(--shadow);
    border: 1.5px solid var(--transparent-border-30);
    border-radius: 8px;
    backdrop-filter: blur(20px);

    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .sidebar{
    min-height: 0;
    max-height: 100%;

    padding: 0.5em 0.5em 0 0.5em;
  }
  .sidebar h1{
    font-weight: 500;
    padding-bottom: 0.2em;
    border-bottom: 2px solid var(--transparent-border-30);
  }

  .menu{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    overflow: scroll;
  }

  .menu-item{
    padding: 0.6em 0.6em 0.6em 0;
    color: var(--grey);
    border-radius: 4px;

    transition: all 0.2s ease;
    cursor: pointer;
  }
  .menu-item.active,
  .menu-item:hover{
    background: var(--transparent-border-20);
    color: var(--white);
  }
  .menu-item.active .highlight-bar{
    opacity: 1;
  }

  .content-panel{
    padding: 1em;
    background: var(--transparent-gradient);
    border: 1.5px solid var(--transparent-border-20);
    border-radius: 8px;

    max-height: 100%;
    min-height: 0;

    position: relative;
    overflow: hidden;
  }
  .content-panel h2{
    font-size: clamp(1.5em, 3dvw, 1.8em);
    padding-bottom: 0.2em;

    border-bottom: 3px dashed var(--transparent-border-30);
  }
  
  .content-panel-animation{
    animation: fade-in-items 0.5s cubic-bezier(1, -0.3, 0.3, 0.94);
  }

  .content{
    overflow: auto;
  }
  .content h3{
    font-size: clamp(0.9em, 2dvw, 1em);
  }
  .content p{
    font-size: clamp(0.8em, 1.5dvw, 0.9em);
  }
  .content .paragraph{
    text-align: justify;
    font-size: clamp(0.9em, 2vw, 1.1em);
    word-spacing: 5px;

    line-height: 1.7em;
  }

  .highlight-bar{
    width: 4px;
    height: 20px;

    background: var(--white);
    border-radius: 0 16px 16px 0;
    opacity: 0;
  }

  .grid-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;
  }
  .grid-item{
    background: var(--transparent-border-20);
    border-radius: 4px;
    padding: 0.5em;
  }
  .grid-item h3{
    font-size: 0.9em;
  }
  .grid-item p{
    font-size: 0.75em;
  }

  .regular-list{
    gap: 1em;
  }

  .vertical-line{
    width: 3px;
    min-height: 80px;
    height: 100%;
    background: var(--grey);
  }

  @media(min-width: 1024px){
    .container{
      border-radius: 32px;
      width: calc(100dvw - 3em);
      height: calc(100dvh - 200px);
      max-height: 750px;
    }

    .container-body{
      display: grid;
      grid-template-columns: 300px 1fr;
    }

    .menu{
      display: flex;
      flex-direction: column;
    }

    .content-panel{
      padding: 2em;
    }
  }

  @keyframes fade-in-items{
    from{
      opacity: 0;
      transform: translateY(100%);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"
  import { aboutMe, skills } from "/src/locales/portfolioConfig.js"
  import { ref } from "vue"
  import Icon from "/src/components/icon.vue"

  const selectedItem = ref(localStorage.getItem("selectedItemAboutMe") ?? aboutMe.sections[0].id)

  const toggleSelected = (newValue) => {
    localStorage.setItem("selectedItemAboutMe", newValue)
    selectedItem.value = newValue
  }
</script>