
<template>
  <section class="main-section flex-05 flex-column justify-center align-center relative">
    <div class="content flex-05 flex-column align-center">
      <div class="content-wrapper">

        <div class="title relative">
          <h1>Portfolio.</h1>
          <div class="markup absolute"></div>
        </div>

        <div class="sub-title flex-05 flex-column">
          <p>- <strong>Luiz Gustavo</strong> de Almeida Lopes -</p>

          <i18n-t keypath="home.role"
                  tag="p"
                  scope="global"

                  class="right">
            <template #role>
              <strong>Full-Stack</strong>
            </template>
          </i18n-t>
        </div>
      </div>

      <img class="pfp" src="/public/images/me.jpg" alt="Profile Picture"/>
    </div>

    <div class="scroll-indicator flex-05 align-center absolute">
      <Icon :icon="icons.swipeDown" size="30px"></Icon>
      <span aria-hidden="false">{{ $t("home.scrollLabel") }}</span>
    </div>
  </section>
</template>

<style scoped>
  .content{
    width: calc(100dvw - 1em);
    max-width: 1500px;
    padding: 1em 3em;

    justify-content: center;
    gap: 2em;

    animation: fade-in-upper 0.75s cubic-bezier(.45,-0.04,0,.95);

    text-align: center;
  }
  .content h1{
    font-size: clamp(3.8em, 8vw, 8em);
    letter-spacing: 0.5dvw;
  }
  .content p{
    font-size: clamp(1em, 2dvw, 1.2em);
  }
  .content .pfp{
    width: 30dvw;
    min-width: 200px;
    max-width: 400px;

    border-radius: 24px;

    box-shadow: 0 0 20px var(--shadow);

    animation: pfp 5s cubic-bezier(.45,-0.04,0,.95) infinite;
  }

  .title{
    width: fit-content;
    margin: 0 auto;
  }

  .markup{
    width: 50%;
    height: 40%;
    background: var(--cream-300);

    bottom: 20px;
    right: 0;
    z-index: -1;
  }

  .scroll-indicator{
    bottom: 0;
    color: var(--slate-500);

    animation: opacity 3s ease-out infinite;
  }

  @media(min-width: 1024px){
    .content{
      text-align: inherit;
      justify-content: space-between;
      flex-direction: row;
    }
    .content-wrapper{
      width: fit-content;
    }
    .right{
      text-align: right;
    }
  }

  @keyframes opacity {
    0%{ opacity: 0 }
    50%{ opacity: 1 }
    100%{ opacity: 0 }
  }

  @keyframes pfp{
    0%{ transform: rotate(0); }
    25%{ transform: rotate(7deg); }
    50%{ transform: rotate(-7deg); }
    100%{ transform: rotate(0); }
  }

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

  /* DARK MODE */
  .dark-theme .markup{
    background: var(--slate-700);
  }

  .dark-theme .scroll-indicator{
    color: var(--slate-700);
  }
</style>

<script setup>
  import Icon from "/src/components/icon.vue"
  import { icons } from "/src/locales/icons.js"
</script>