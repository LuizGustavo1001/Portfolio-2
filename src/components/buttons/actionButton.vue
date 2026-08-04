<template>
  <component
      :is="tag"
      :href="link || undefined"
      :target="!isButton ? target : undefined"
      :rel="target === '__blank' ? 'external' : 'internal'"
      :disabled="isButton ? props.disabled : undefined"
      :aria-disabled="isButton ? props.disabled : undefined"
      class="action-btn"
      :class="reverseClr ? 'reverse' : ''"
  >
    <span class="btn-content">
      <!-- Left Icon -->
      <slot name="leftIcon">
        <Icon v-if="leftIcon" :icon="leftIcon" class="icon-left" aria-hidden="true" />
      </slot>

      <!-- Text -->
      <span class="btn-text medium-weight">
        <slot name="label"> {{ label }} </slot>
      </span>

      <!-- Right Icon -->
      <slot name="rightIcon">
        <Icon v-if="rightIcon" :icon="rightIcon" class="icon-right" aria-hidden="true" />
      </slot>
    </span>
  </component>
</template>

<style scoped>
  a{
    text-decoration: none;
  }

  .action-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0.85em 1.25em;
    border-radius: 12px;
    border: none;

    background: var(--slate-800);
    color: var(--cream-100);
    box-shadow: 0 4px 5px var(--lighter-shadow);
    font-weight: bolder;
    font-size: 1.1em;

    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
  }

  .btn-content{
    display: inline-flex;
    align-items: center;
    gap: 0.5em;

    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  .icon-right{
    margin-right: -1.8em;
    opacity: 0;
    filter: blur(5px);
  }

  @media(min-width: 600px){ /* animations not available for mobile */
    .action-btn:hover .btn-content,
    .action-btn:active .btn-content{
      transform: translateX(-1.8em);
    }

    .action-btn:hover .icon-right,
    .action-btn:active .icon-right{
      opacity: 1;
      filter: blur(0);
    }

    .action-btn:hover .icon-left,
    .action-btn:active .icon-left{
      opacity: 0;
      filter: blur(5px);
    }
  }

  .action-btn.reverse{
    background: var(--cream-200);
    color: var(--slate-800);
  }

  .action-btn:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* DARK MODE */
  .dark-theme .action-btn{
    background: var(--cream-100);
    color: var(--slate-900);
    box-shadow: 0 4px 5px var(--shadow);
  }

  .dark-theme .action-btn.reverse{
    background: var(--slate-900);
    color: var(--cream-100);
  }
</style>

<script setup>
  import { computed } from 'vue'
  import { icons } from "/src/locales/icons.js"
  import Icon from "/src/components/icon.vue"

  const props = defineProps({
    leftIcon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
      required: 'true',
    },
    rightIcon: {
      type: String,
      default: icons.arrowRight,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    reverseClr: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
    link: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: 'external',
    }
  })

  const isButton = computed(() => props.tag === 'button')
</script>