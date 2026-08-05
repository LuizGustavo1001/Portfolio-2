<template>
  <component
    :is="tag"
    :href="link || undefined"
    :target="!isButton ? target : undefined"
    :rel="target === '__blank' ? 'external' : 'internal'"
    class="icon-wrapper"
    :class="reverseClr ? 'reverse' : ''"
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

    color: var(--slate-800);

    border: none;
    background: transparent;

    cursor: pointer;
    width: fit-content;
    transition: 0.2s cubic-bezier(1, -0.56, 0.33, 0.94);
  }
  .icon-wrapper:hover{
    background: var(--cream-200);
    transform: scale(1.1);
  }

  .icon-wrapper.reverse{
    background: var(--slate-800);
    color: var(--cream-100);
  }

  .icon-wrapper :deep(svg) {
    width: v-bind(size);
    height: v-bind(size);
  }

  .icon-wrapper.reverse:hover{
    background: var(--slate-700);
  }

  /* DARK MODE*/
  .dark-theme .icon-wrapper{
    color: var(--cream-100);
  }
  .dark-theme .icon-wrapper:hover{
    background: var(--slate-800);
  }

  .dark-theme .reverse .icon-wrapper:hover{
    background: var(--cream-200);
  }

  .dark-theme .icon-wrapper.reverse{
    background: var(--cream-100);
    color: var(--slate-800);
  }

  .dark-theme .icon-wrapper.reverse:hover{
    background: var(--cream-200);
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
    reverseClr: {
      type: Boolean,
      default: false,
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