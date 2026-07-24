<template>
  <header class="flex-05 align-center">
    <div class="flex-05 align-center flex-grow-1">
      <img src="/src/assets/images/me.jpg" alt="">
      <p><strong>Luiz Gustavo</strong> <br> de Almeida Lopes</p>
    </div>

    <button @click="toggleAside" class="btn" id="sidebar-toggle-btn" v-html="icons.sidebar"></button>
  </header>
</template>

<style scoped>

</style>

<script setup>
  import { icons } from "/src/locales/icons.js"

  const emits = defineEmits(["toggle-aside"])

  const toggleAside = () => emits("toggle-aside")
</script>