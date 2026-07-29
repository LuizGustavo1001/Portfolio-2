<template>
  <header class="flex-05 align-center">
    <!-- Left Content -->
    <div class="flex-05 align-center flex-grow-1">
      <Icon :icon="icons.logo" size="45px" class="icon"/>
      <p><strong>Luiz Gustavo</strong> <br> de Almeida Lopes</p>
    </div>

    <!-- Right Content -->
    <IconBtn :icon="icons.sidebar" tag="button" size="25px" id="sidebar-toggle-btn" @click="toggleAside"/>
  </header>
</template>

<style scoped>
  header{
    position: fixed;
    width: 100%;
    padding: 0.5em;
    box-shadow: 0 4px 10px var(--lighter-shadow);
    backdrop-filter: blur(8px);

    z-index: 1;
  }

  header::before{
    content: '';
    position: absolute;
    inset: 0;

    background: var(--beige-100);
    opacity: 0.7;
    z-index: -1;
  }

  .icon{
    padding-right: 0.5em;
    border-right: 2px solid var(--light-shadow);
  }

  @media(min-width: 1024px){
    header{
      padding: 1em;
    }
  }
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"
  import IconBtn from "../buttons/iconBtn.vue"
  import Icon from "../icon.vue";

  const emits = defineEmits(["toggle-aside"])

  const toggleAside = () => { emits("toggle-aside") }
</script>