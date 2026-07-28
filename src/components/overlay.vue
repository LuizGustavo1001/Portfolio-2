<template>
  <div id="overlay"></div>
</template>

<style scoped>
  #overlay{
    position: fixed;
    inset: 0;
    background: var(--transparent-30);

    z-index: 3;

    display: none;
  }
  #overlay.active{
    display: block;
  }
</style>