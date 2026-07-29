<template>
  <section class="main-section">
    <div class="container">
      <div class="title">
        <div class="icon-wrapper">
          <Icon :icon="icons.bubbleFilled" size="60px" class="relative"/>
          <Icon :icon="icons.cubeFilled" size="35px" class="absolute"/>
        </div>
        <h1 class="medium-weight">{{ $t("projectsSection.title.medium") }} <strong>{{ $t("projectsSection.title.bold") }}</strong>.</h1>
      </div>

    </div>
  </section>
</template>

<style scoped>



.menu{
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1em;
}
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"
  import IconBtn from "../buttons/iconBtn.vue";
  import ActionButtonAlt from "../buttons/actionButtonAlt.vue";
  import Icon from "../icon.vue";
</script>