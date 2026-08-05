<script setup>
</script>
<template>
  <!-- Overlay -->
  <div id="overlay"></div>
</template>

<style scoped>
  #overlay{
    position: fixed;

    height: 100dvh;
    width: 100dvw;
    background: var(--transparent-30);

    z-index: 4;

    backdrop-filter: blur(10px);

    display: none;
  }
  #overlay.active{
    display: block;
  }
</style>