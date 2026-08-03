<template>
  <component
    :is="tag"
    :href="link || undefined"
    :target="!isButton ? target : undefined"
    :rel="target === '__blank' ? 'external' : 'internal'"
    class="icon-wrapper"
    v-html="icon"
  >
  </component>
</template>

<style scoped>
  .icon-wrapper{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    padding: 0.5em;
    border-radius: 8px;

    border: none;
    background: transparent;

    cursor: pointer;
    width: fit-content;
    transition: 0.2s ease;
  }
  .icon-wrapper:hover{
    background: var(--cream-200);
    transform: scale(1.1);
  }

  .icon-wrapper :deep(svg) {
    width: v-bind(size);
    height: v-bind(size);
  }

  .footer .icon-wrapper{
    background: var(--slate-900);
  }
  .reverse .icon-wrapper:hover{
    background: var(--slate-700);
  }
</style>

<script setup>
  import { computed } from "vue"

  const props = defineProps({
    tag: {
      type: String,
      default: 'a',
    },
    icon: {
      type: String,
      required: 'true'
    },
    link: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: 'external',
    },
    size: {
      type: [String, Number],
      default: '20px',
    }
  })

  const isButton = computed(() => props.tag === 'button')
</script>