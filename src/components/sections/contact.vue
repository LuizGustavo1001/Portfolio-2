<template>
  <section class="main-section flex-05 align-center justify-center">
    <div class="container flex-05 flex-column align-center justify-between translucent">
      <div class="island flex-05 align-center justify-between medium-weight">
        <span>{{ $t(`contact.island`)}}</span>
        <Icon :icon="icons.soundwaves"></Icon>
      </div>

      <div class="container-body flex-05 flex-column align-center justify-between">
        <div class="title flex-05 flex-column align-center">
          <h1 class="line-overflow medium-weight">{{ $t(`contact.title.medium`) }} <strong>{{ $t(`contact.title.bold`) }} </strong>.</h1>
          <p class="text-muted">{{ $t(`contact.subtitle`) }}.</p>
        </div>

        <img src="/public/images/me.jpg" alt="" class="pfp">

        <ul class="content flex-05 flex-column w-full" style="gap: 1em">
          <template v-for="item in personalLinks" :key="item.id">
            <li v-if="item.id !== 'resume'" class="item">
              <a :href="item.href" rel="external" target="_blank" class="flex-05 align-center">
                <div class="flex-05 align-center flex-grow-1">
                  <Icon :have-padding="true" padding="8px" :icon="item.icon" size="30px" class="icon"/>
                  <div class="flex-05 flex-column flex-grow-1" style="gap: 0">
                    <span class="text-muted"> {{ $t(`personalLinks.${item.id}`) }}</span>
                    <span class="medium-weight">{{ item.value }}</span>
                  </div>
                </div>
                <Icon :icon="icons.externalLink" style="align-self: flex-start"/>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
  a{
    text-decoration: none;
  }
  .title{
    text-align: center;
  }

  .island{
    background: var(--black);
    padding: 0.8em;

    border-radius: 12px;
    box-shadow: 0 4px 10px var(--transparent-30);

    transition: 0.3s cubic-bezier(1, -0.56, 0.33, 0.94);

    min-width: 200px;
    cursor: default;
  }

  .island:hover{
    transform: scale(1.1);
  }

  .container{
    width: calc(100dvw - 1em);
    max-width: 1500px;
    min-height: 800px;

    gap: 2em;

    padding: 2em 1em;

    background: radial-gradient(var(--transparent-30) 90%, transparent), url("/public/images/paint03.webp") no-repeat center center ;
    background-size: cover;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.62);
    border-radius: 16px;
  }

  .container-body{
    padding: 1em;
    gap: 2em;
    width: fit-content;
    background: radial-gradient(transparent, var(--transparent-30) 90%);
    border: 2px solid var(--transparent-border-30);
    border-radius: 16px;
    backdrop-filter: blur(20px);
  }
  .container-body .title h1{
    font-size: clamp(1.5em, 3dvw, 2em);
  }
  .container-body .title p{
    font-size: clamp(0.8em, 2dvw, 1em);
  }
  .container-body .pfp{
    width: 150px;
    border-radius: 16px;
    box-shadow: 0 0 10px var(--light-shadow);
  }

  .content .item{
    background: var(--transparent-30);
    padding: 0.5em;

    border: 2px solid var(--transparent-border-30);
    border-radius: 8px;

    font-size: clamp(0.8em, 2dvw, 0.9em);

    transition: 0.3s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .content .item:hover{
    transform: scale(1.03);
  }

  .content .item .icon{
    background: var(--transparent-30);
    border-radius: 8px;
  }
</style>

<script setup>
  import { icons } from "/src/locales/icons.js"
  import Icon from "/src/components/icon.vue"
  import {personalLinks} from "/src/locales/portfolioConfig.js"
</script>
