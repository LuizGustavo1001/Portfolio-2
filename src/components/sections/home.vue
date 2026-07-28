<template>
  <section class="main-section flex-05 flex-column justify-center">
    <div class="hero">
      <!-- Title -->
      <h1 class="title">Portfolio.</h1>

      <!-- Subtitle -->
      <div class="sub-title">
        <p>Luiz Gustavo de Almeida Lopes</p>
        <i18n-t keypath="home.role" tag="p" scope="global" style="text-align: right;">
          <template #role>
            <strong>Full-Stack</strong>
          </template>
        </i18n-t>
      </div>

      <!-- Buttons Navigation -->
      <div class="btns-wrapper flex-05 align-center justify-center flex-wrap">
        <template v-for="btn in home.btns" :key="btn.id">
          <ActionButton
              :leftIcon="personalLinks[btn.id].icon"
              :label="$t(`personalLinks.${btn.id}`)"
              :reverseClr="btn.type !=='first' && btn.type !=='last'"
              tag="a"
              :link="personalLinks[btn.id].href"
              class="header-link"
              :class="{
                first: btn.type === 'first',
                last: btn.type === 'last',
              }"
              style="font-size: clamp(1em, 2vw, 1.2em)"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section{
    background: url("/src/assets/images/lm-hero-bg.svg") no-repeat;
    background-size: cover;
  }
  h1{
    text-transform: uppercase;
    font-size: clamp(3rem, 10vw, 8rem);
    text-align: center;
  }

  .hero{
    width: fit-content;
    margin: 0 auto;
    padding: 1em;
  }
  .hero p{
    font-size: clamp(1em, 2dvw, 1.3em);
  }

  .sub-title{
    width: 100%;
  }

  .header-link{
    min-width: 150px;
  }

  @media(min-width: 500px){
    .header-link.first{
      border-bottom-left-radius: 32px;
    }
    .header-link.last{
      border-bottom-right-radius: 32px;
    }
  }

  .btns-wrapper{
    margin-top: 1em;
    gap: 1em;
  }

  @media(min-width: 1024px){
    .header-link{
      min-width: 200px;
    }
    .btns-wrapper{
      gap: 2em;
    }
  }

  .hero{
    animation: fade-in-upper 0.75s cubic-bezier(.45,-0.04,0,.95);
  }
  /*
  @keyframes fade-in-upper{
    from{
      opacity: 0;
      transform: rotate(-15deg) scale(0);
    }
    to{
      opacity: 1;
      transform: rotate(0) scale(1);
    }
  }
  */
  @keyframes fade-in-upper{
    from{
      opacity: 0;
      transform: rotate(7.5deg) translateY(10dvh);
    }
    to{
      opacity: 1;
      transform: rotate(0) translateY(0);
    }
  }

</style>

<script setup>
  import { home, personalLinks } from "../../locales/portfolioConfig.js"
  import ActionButton from "../buttons/actionButton.vue"
</script>
