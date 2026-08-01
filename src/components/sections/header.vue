<template>
  <header class="w-full">
    <div class="content flex-05 align-center w-full"><!-- Left Content -->
      <div class="flex-05 align-center flex-grow-1">
        <Icon :icon="icons.logo" size="45px" class="icon"/>
      </div>

      <!-- Right Content -->
      <IconBtn :icon="icons.sidebar" tag="button" size="25px" id="sidebar-toggle-btn" @click="toggleAside"/>
    </div>
  </header>
</template>

<style scoped>
  header{
    position: fixed;
    padding: 0.5em;
    box-shadow: 0 4px 10px var(--lighter-shadow);
    backdrop-filter: blur(8px);

    z-index: 3;
  }

  .content{
    max-width: 1500px;
    margin-inline: auto;
  }

  header::before{
    content: '';
    position: absolute;
    inset: 0;

    background: linear-gradient(to bottom, var(--cream-100), transparent);
    opacity:1;
    z-index: -1;
  }

  @media(min-width: 1024px){
    header{
      padding-inline: 3em;
    }
  }
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"
  import IconBtn from "/src/components/buttons/iconBtn.vue"
  import Icon from "/src/components/icon.vue"

  const emits = defineEmits(["toggle-aside"])

  const toggleAside = () => { emits("toggle-aside") }
</script>