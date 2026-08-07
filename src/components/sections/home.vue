
<template>
  <!-- Home Section -->
  <section class="section-box flex-05 flex-column justify-center align-center relative">
    <div class="container flex-05 flex-column align-center">
      <div class="content">
        <!-- Title -->
        <div class="title relative">
          <h1>Portfolio.</h1>
          <div class="markup absolute"></div>
        </div>

        <div class="sub-title flex-05 flex-column text-muted">
          <p><strong>Luiz Gustavo</strong> de Almeida Lopes</p>

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

      <!-- Profile Picture -->
      <img class="pfp" src="/images/me.jpg" alt="Profile Picture"/>
    </div>

    <div ref="scrollIndicator" class="scroll-indicator flex-05 align-center absolute">
      <Icon :icon="icons.swipeDown" size="30px"></Icon>
      <span aria-hidden="false">{{ $t("home.scrollLabel") }}</span>
    </div>
  </section>
</template>

<style scoped>
  .container{
    padding: 1em 3em;
    text-align: center;
    justify-content: center;
    gap: 2em;

    animation: fade-in-home 0.75s cubic-bezier(.45,-0.04,0,.95);
  }
  .container h1{
    font-size: clamp(3.8em, 8vw, 8em);
    letter-spacing: 0.5dvw;
    font-family: var(--font-styling);
  }
  .container p{
    font-size: clamp(1em, 2dvw, 1.2em);
  }
  .container .pfp{
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
    background: var(--cream-200);

    bottom: 10px;
    right: 0;
    z-index: -1;
  }

  .scroll-indicator{
    bottom: 0;
    color: var(--slate-500);

    animation: opacity 3s ease-out infinite;
  }

  @media(min-width: 1024px){
    .container{
      text-align: inherit;
      justify-content: space-between;
      flex-direction: row;
    }
    .content{
      width: fit-content;
    }
    .right{
      text-align: right;
    }
  }

  @media(min-width: 1300px){
    .markup{
      bottom: 25px;
    }
  }

  @keyframes pfp{
    0%{ transform: rotate(0); }
    25%{ transform: rotate(7deg); }
    50%{ transform: rotate(-7deg); }
    100%{ transform: rotate(0); }
  }

  @keyframes fade-in-home{
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
    background: var(--slate-800);
  }

  .dark-theme .scroll-indicator{
    color: var(--slate-700);
  }
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"
  import Icon from "/src/components/icon.vue"
  import {onMounted, onUnmounted, ref} from "vue"
  import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger)

  const scrollIndicator = ref(null)
  let context

  onMounted(async () => {
    if(!scrollIndicator.value){
      console.log('ASdad')
    }

    context = gsap.context(() => {
      gsap.fromTo(
          scrollIndicator.value,
          {
            display: "inherit"
          },
          {
            display: "none",
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: scrollIndicator.value,
              start: "top 50%",
              toggleActions: "play none none reverse"
            }
          }
      )
    })
    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    if (context) context.revert()
  })

</script>