<template>
  <header class="flex-05 align-center">
    <div class="flex-05 align-center flex-grow-1">
      <img src="/src/assets/images/me.jpg" alt="Profile Picture">
      <p><strong>Luiz Gustavo</strong> <br> de Almeida Lopes</p>
    </div>

    <button @click="toggleAside" class="btn icon-btn" id="sidebar-toggle-btn" v-html="icons.sidebar" style="--size: 25px"></button>
  </header>
</template>

<style scoped>
  header{
    position: absolute;
    width: 100%;
    padding: 0.5em;
    box-shadow: 0 4px 10px var(--light-shadow);

    z-index: 1;
  }

  header::before{
    content: '';
    position: absolute;
    inset: 0;

    background: var(--beige-100);
    opacity: 0.5;
    z-index: -1;
  }

  header img{
    width: 50px;
    border-radius: 8px;
  }

  @media(min-width: 1024px){
    header{
      padding: 1em;
    }
  }
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"

  const emits = defineEmits(["toggle-aside"])

  const toggleAside = () => emits("toggle-aside")
</script>