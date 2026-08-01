<template>
  <nav class="flex-05" style="gap: 1em;">
    <button v-for="item in navbar.items"
            :key="item.id"
            class="medium-weight flex-05 align-center"
            :class="[item.id === selectedItem ? 'active' : '']"
            :data-id="item.id"
            style="gap: 0.2em"
            @click="toggleSelected(item.id)"
    >
      <Icon :icon="item.id === selectedItem ? item.iconActive : item.icon"/>
      <span class="label">{{ $t(`navbar.items.${item.id}.label`) }}</span>
    </button>
  </nav>
</template>

<style scoped>
  nav{
    position: fixed;
    bottom: 1.5em;
    left: 50%;
    transform: translateX(-50%);

    background: var(--cream-100);

    padding: 0.5em;

    border-radius: 16px;
    width: max-content;
    box-shadow: 0 0 10px var(--light-shadow);

    z-index: 3;
    animation: fade-in-upper 1s ease;
  }

  button{
    color: var(--slate-700);
    text-decoration: none;
    border: none;
    background: none;

    padding: 0.8em;
    border-radius: 8px;

    font-size: 0.8em;
    transition: 0.2s ease;
    cursor: pointer;
  }

  button.active,
  button:hover,
  button:active{
    background: var(--cream-200);
  }

  button:hover,
  button:active{
    transform: scale(1.05);
  }

  @media(max-width: 768px){
    nav button .label{
      display: none;
    }
  }

  @keyframes fade-in-upper{
    from{
      opacity: 0;
      transform: translate(-50%, 10dvh);
    }
    to{
      opacity: 1;
      transform:  translate(-50%, 0);
    }
  }
</style>

<script setup>
  import { ref, onMounted } from "vue"
  import { navbar } from "/src/locales/portfolioConfig.js"
  import Icon from "/src/components/icon.vue"

  const selectedItem = ref(localStorage.getItem("selectedItemNavBar") ?? navbar.items[0].id)
  const headerHeight = 75

  const toggleSelected = (newValue) => {
    const element = document.getElementById(newValue)

    if(element){
      localStorage.setItem("selectedItemNavBar", newValue)
      selectedItem.value = newValue

      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  onMounted(() => {
    toggleSelected(selectedItem.value)
  })


</script>