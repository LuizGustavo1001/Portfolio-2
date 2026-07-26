<template>
  <aside class="sidebar flex-05 flex-column">
    <div class="flex-grow-1 flex-05 flex-column" style="gap: 2em;">
      <nav v-for="nav in sidebar" :key="nav.id" class="flex-05 flex-column">
        <h2 class="title"> {{ $t(`sidebar.sections.${nav.id}.title`) }}</h2>

        <ul class="flex-05 flex-column gap-1" style="gap: 1em;">
          <li v-for="item in nav.items">

            <template v-if="item.id in personalLinks" :key="item.id">
              <a :href="personalLinks[item.id].href"
                 class="btn link-btn"
                 :class="item.id === 'resume' ? 'btn-reverse-clr' : ''"
                 rel="external"
                 target="_blank">
                <div class="flex-05 align-center flex-grow-1">
                  <i class="icon" v-html="personalLinks[item.id].icon"></i>
                  <p>{{ $t(`personalLinks.${item.id}`) }}</p>
                </div>
                <i class="icon" v-html="icons.externalLink" style="--svg-width: 15px"></i>
              </a>
            </template>

            <template v-else-if="item.id === 'toggleLanguage'">
              <button class="btn align-center" @click="toggleLang">
                <i class="icon" v-html="icons.translate"></i>

                <span v-html="$t(`sidebar.language`)"></span>
              </button>
            </template>

            <template v-else>
              <button @click="toggleTheme" class="btn align-center">
                <i class="icon" v-html="icons.moonFilled"></i>

                <span v-html="$t(`sidebar.${props.theme}`)"></span>
              </button>
            </template>
          </li>
        </ul>
      </nav>
    </div>
    <span class="light-weight text-center">Luiz Gustavo de Almeida Lopes - Portfolio</span>
  </aside>
</template>

<style scoped>
  .sidebar{
    position: fixed;
    right: 0;
    min-height: 100dvh;
    width: 450px;
    max-width: 65dvw;

    padding: 2em 1em 1em 1em;

    background: var(--beige-100);
    z-index: 3;

    transform: translateX(100%);

    transition: transform 0.4s cubic-bezier(.35,-0.23,.45,.59);
  }
  .sidebar.active{
    transform: translateX(0);
  }

  h2{
    font-size: 20px;
    color: var(--brown-600);
    font-weight: 500;
  }

  .link-btn{
    text-decoration: none;
  }

  .btn {
    width: 100%;
  }

</style>

<script setup>
  import {personalLinks, sidebar} from "/src/locales/portfolioConfig.js"
  import { icons } from "/src/locales/icons.js"

  const emit  = defineEmits(['toggle-language', 'toggle-theme'])
  const props = defineProps(['theme'])

  const toggleLang  = () => emit("toggle-language")
  const toggleTheme = () => emit("toggle-theme")
</script>