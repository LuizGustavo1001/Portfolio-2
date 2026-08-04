<template>
  <div class="carousel flex-05 align-center justify-center relative w-full">
    <IconBtn tag="button" :icon="icons.arrowLeft" class="previous" size="30px"/>

    <ul class="container flex-05 align-center">
      <li class="card active">
        <img src="/src/assets/images/todo.webp" alt="Projeto 1">
        <div class="card-overlay medium-weight">
          <span class="text-muted">E-COMMERCE</span>
          <h3>Projeto Açaí 1.0</h3>
        </div>
      </li>
      <li class="card">
        <img src="/src/assets/images/cpp.png" alt="Projeto 1">
        <div class="card-overlay medium-weight">
          <span class="text-muted">E-COMMERCE</span>
          <h3>Projeto 2</h3>
        </div>
      </li>
      <li class="card">
        <img src="/src/assets/images/dicionario.png" alt="Projeto 1">
        <div class="card-overlay medium-weight">
          <span class="text-muted">E-COMMERCE</span>
          <h3>Projeto 3</h3>
        </div>
      </li>
      <li class="card">
        <img src="/src/assets/images/acai.webp" alt="Projeto 1">
        <div class="card-overlay medium-weight">
          <span class="text-muted">E-COMMERCE</span>
          <h3>Projeto 4</h3>
        </div>
      </li>
    </ul>

    <IconBtn tag="button" :icon="icons.arrowRight" class="next" size="30px"/>
  </div>
</template>

<style scoped>
  .carousel{
    --card-width: 500px;
    width: fit-content;
  }

  .container{
    width: calc(var(--card-width) + 1em);
    overflow: hidden;

    padding: 1em;

    border-radius: 16px;
  }

  .card{
    min-width: var(--card-width);
    height: 420px;
    border-radius: 16px;

    overflow: hidden;

    transition: 0.5s ease-in-out;

    transform: scale(0.85);
    opacity: 0.5;
    filter: brightness(0.6);

    z-index: 1;
    box-shadow: 0 10px 20px var(--transparent-30);
  }
  .card.active{
    transform: scale(1.1) translateZ(50px);
    opacity: 1;
    filter: brightness(1);
    z-index: 10;
  }
  .card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card .card-overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1em;

    background: linear-gradient(to top, var(--brown-700) 0%, transparent 100%);
    color: white;
  }
  .card-overlay span{
    text-transform: uppercase;
  }
  .card-overlay h3{
    font-size: 1.5em
  }

  .previous, .next{
    background: var(--transparent-30);
    backdrop-filter: blur(5px);
    color: var(--white);

    border-radius: 50%;
  }
  .previous:hover, .next:hover{
    transform: scale(1.1);
    background: var(--transparent-30);
  }


</style>

<script setup>
import { icons } from "/src/locales/icons.js"
import IconBtn from "./buttons/iconBtn.vue";
</script>