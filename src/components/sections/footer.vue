<template>
  <footer class="footer reverse">
    <div class="container flex-05 flex-column" style="gap: 2em">
      <div class="top flex-05 flex-wrap justify-between" style="gap: 2em">
        <div class="left flex-05 flex-column">
          <div class="flex-05 flex-column" style="gap: 0">
            <h1 class="medium-weight"><strong>Luiz Gustavo</strong> <br> de Almeida Lopes</h1>

            <i18n-t keypath="home.role"
                    tag="p"
                    scope="global"

                    class="right text-muted">
              <template #role>
                <strong>Full-Stack</strong>
              </template>
            </i18n-t>
          </div>

          <nav class="nav flex-05 align-center" style="gap: 1em">
            <IconBtn v-for="link in footer.personal"
                     :key="link.id"
                     :icon="personalLinks[link].icon"
                     :link="personalLinks[link].href"
                     size="25px"
            />
          </nav>
        </div>

        <div class="right flex-05 justify-between flex-wrap" style="gap: 2em">
          <nav v-for="section in footer.section" :key="section.id" class="flex-05 flex-column">
            <h2>{{ $t(`footer.section.${section.id}.title`) }}</h2>

            <span class="flex-05 flex-column">
            <a v-for="link in section.links" :href="link.href"
               class="text-muted">{{ $t(`footer.section.${section.id}.links.${link.id}.label`) }}</a>
          </span>
          </nav>
        </div>
      </div>

      <hr>

      <div class="bottom">
        <span class="text-muted"> {{ $t(`footer.thanks`) }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer{
    padding: 2em;
    background: var(--slate-800);
  }

  a{
    text-decoration: none;
    font-size: 0.9em;
  }
  a:hover{
    text-decoration: underline;
  }

  hr{
    color: var(--slate-700);
  }

  h2{
    font-size: 1em;
  }

  .container{
    max-width: 1500px;
    margin: 0 auto;
  }
</style>

<script setup>
  import { footer, personalLinks } from "/src/locales/portfolioConfig.js"
  import IconBtn from "/src/components/buttons/iconBtn.vue"
</script>