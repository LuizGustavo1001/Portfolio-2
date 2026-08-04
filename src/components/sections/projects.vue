<template>
  <section class="main-section flex-05 justify-center align-center relative">
    <div class="container flex-05 flex-column justify-between align-center" style="gap: 1em;">
      <div class="title flex-05 flex-column">
        <h1>{{ $t("projectsSection.title.medium") }} <br> <strong>{{ $t("projectsSection.title.bold") }}</strong>.</h1>

        <p class="text-muted">{{ $t('projectsSection.subtitle') }}.</p>

        <ActionButton
            tag="a"
            :href="personalLinks.github.href"
            :rightIcon="icons.externalLink"
            :leftIcon="personalLinks.github.icon"
            :label="$t('projectsSection.actions.github')"
            class="action-button"
        />
      </div>

      <ul class="content flex-05 flex-column">
        <li v-for="project in projects"
            :key="project.id"
            @click="expandProject(project.id)"
            class="project flex-05 relative"
            :style="{ '--background': project.href }"
        >
          <div class="project-title translucent medium-weight line-overflow">
            <p class="text-muted line-overflow"> {{ $t(`projects.${project.id}.subtitle`) }}</p>
            <h2 class="line-overflow">{{ $t(`projects.${project.id}.title`) }}</h2>
          </div>

          <div class="expand-icon flex-05 align-center justify-center absolute">
            <Icon :icon="icons.expandScreen" size="30px"></Icon>
          </div>
        </li>
      </ul>
    </div>

    <div class="expanded-project">
      <div class="expanded-content flex-05 flex-column" style="gap: 1em;">
        <div class="title">
          <p v-if="selectedProject.subtitle"
             class="medium-weight text-muted">
            {{ selectedProject.subtitle }}
          </p>
          <h3>{{ selectedProject.title }}</h3>
        </div>

        <div class="description flex-grow-1" style="font-size: clamp(0.9em, 1.5dvw, 1.1em)">
          <p>{{ selectedProject.description }}.</p>
        </div>

        <ul class="stacks flex-05 flex-wrap">
           <li v-for="stack in selectedProject.stacks"> {{ stack }} </li>
        </ul>

        <div class="links flex-05 flex-column" style="gap: 1em;">
          <ActionButton
              v-if="selectedProject.demoLink"
              tag="a"
              :link="selectedProject.demoLink"
              :leftIcon="icons.code"
              :label="$t(`projects.demo`)"
              :reverseClr="true" class="w-full"
          />

          <ActionButton
              v-if="selectedProject.repository"
              tag="a"
              :link="selectedProject.repository"
              :leftIcon="icons.github"
              :label="$t(`projects.repository`)"
              class="w-full"
          />
        </div>
      </div>

      <div class="img" :style="{ '--background': selectedProject.image }"></div>

      <IconBtn
          tag="button"
          :icon="icons.closeFull"
          class="absolute close-expanded"
          havePadding= 0,
          padding="8px"
          @click="closeExpandedProject"
      />
    </div>

  </section>
</template>

<style scoped>
  .container{
    width: calc(100dvw - 1em);
    max-width: 1500px;
    height: 100dvh;
    max-height: 850px;

    padding: 2em 1em;
  }

  .container .title h1{
    font-size: clamp(2.5em, 6dvw, 5.5em);
    text-transform: uppercase;
    font-weight: normal;
  }
  .container .title .action-button{
    width: 100%;
    margin-top: 0.5em;
    align-self: flex-end;
  }

  .content{
    background: url("/public/images/paint01.webp") no-repeat bottom;
    background-size: cover;
    border-radius: 16px;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.62);

    width: 100%;
    max-width: 700px;
    max-height: 100%;
    padding: 2em;

    overflow: auto;
    gap: 1em;
  }

  .project{
    justify-content: flex-start;
    align-items: flex-end;

    min-height: 300px;
    max-height: 300px;
    padding: 1em;
    border-radius: 16px;
    overflow: hidden;
    color: var(--white);

    background: var(--background) no-repeat top left;
    background-size: cover;

    cursor: pointer;
    transition: 0.3s ease-out;
  }
  .project::after{
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(to top, var(--slate-700), transparent 60%);
    border-radius: 16px;

    z-index: 1;
    transition: 0.15s ease-out;
  }

  .project .project-title,
  .project .expand-icon{
    z-index: 2;
  }

  .project:hover{
    transform: scale(1.02);
  }

  .project:hover::after{
    transform: translateY(15%);
  }

  .project .expand-icon{
    top: 1em;
    right: 1em;

    background: var(--transparent-30);
    padding: 0.5em;
    backdrop-filter: blur(10px);
    border-radius: 50%;

    opacity: 0;
    transform: scale(0);
    transition: 0.3s ease-out;
  }
  .project:hover .expand-icon{
    transform: scale(1);
    opacity: 1;
  }

  .project .project-title{
    transition: 0.3s ease-in-out;

    text-transform: uppercase;
  }
  .project:hover .project-title{
    padding-left: 1em;
  }

  .project .project-title h2{
    font-size: clamp(1.5em, 3dvw, 2em);
  }
  .project .project-title p{
    text-align: left;
  }


  .expanded-project{
    position: absolute;
    inset: 0;

    width: calc(100dvw - 3em);
    max-width: 1500px;

    height: calc(100dvh - 3em);
    max-height: 800px;
    margin: auto;

    border-radius: 16px;
    padding: 1em;

    background: var(--white);
    box-shadow: 0 0 20px rgb(0 0 0 / 0.2);

    z-index: 5;

    /*display: v-bind(expandedDisplay);*/
    display: grid;
    grid-template-rows: auto 1fr;
    flex-direction: column-reverse;
    gap: 1em;

    animation: fade-in 1s ease-in-out;
  }
  .expanded-project .img{
    background: var(--background) no-repeat top left;
    background-size: cover;
    width: 100%;
    height: 100%;

    border-radius: 16px;
  }
  .expanded-project .title h3{
    font-size: clamp(1.5em, 3dvw, 1.8em);
  }

  .expanded-project .stacks li{
    padding: 0.3em;
    background: var(--white);
    box-shadow: 4px 4px 5px var(--lighter-shadow);
    font-size: 0.9em;
    border-radius: 8px;
  }

  .close-expanded{
    left: 1em;
    top: 1em;
    border-radius: 50%;
  }

  @keyframes fade-in{
    from{
      opacity: 0;
      transform: translateY(100%) scale(0);
    }
    to{
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  @keyframes fade-out{
    from{
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to{
      opacity: 0;
      transform: translateY(100%) scale(0);
    }
  }

  @media(min-width: 1024px){
    .container{
      flex-direction: row-reverse;
    }
    .container .title{
      text-align: right;
    }
    .title .action-button{
      width: fit-content;
    }
    .expanded-project{
      display: v-bind(expandedDisplay);
      grid-template-rows: initial;
      grid-template-columns: 350px 1fr;
      border-radius: 32px;
    }
    .expanded-content{
      padding-top: 2em;
    }
  }

</style>

<script setup>
  import { ref } from "vue"
  import { useI18n } from "vue-i18n"
  import { icons } from "/src/locales/icons.js"
  import { personalLinks, projects } from "/src/locales/portfolioConfig.js"
  import Icon from "/src/components/icon.vue"
  import IconBtn from "/src/components/buttons/iconBtn.vue"
  import ActionButton from "/src/components/buttons/actionButton.vue"

  const { t } = useI18n()

  const emits = defineEmits(["toggleOverlay"])

  const expandedDisplay = ref("none")

  const expandProject = (projectId) => {
    const project = projects[projectId]

    if(!project) return

    expandedDisplay.value = "grid"

    selectedProject.value = {
      title: t(`projects.${projectId}.title`),
      subtitle: t(`projects.${projectId}.subtitle`),
      description: t(`projects.${projectId}.description`),
      stacks: project.stacks,
      demoLink: project.demo,
      repository:  project.repository,
      image: project.href
    }

    emits("toggleOverlay")
  }

  const closeExpandedProject = () => {
    selectedProject.value = {
      title: "",
      subtitle: "",
      description: "",
      stacks: [],
      demoLink: "",
      repository: "",
      image: ""
    }

    expandedDisplay.value = "none"

    emits("toggleOverlay")
  }

  const selectedProject = ref({
    title: "",
    subtitle: "",
    description: "",
    stacks: [],
    demoLink: "",
    repository: "",
    image: ""
  })
</script>