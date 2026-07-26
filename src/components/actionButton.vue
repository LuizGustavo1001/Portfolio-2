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
        <i class="icon-wrapper icon-left" aria-hidden="true" v-if="leftIcon" v-html="leftIcon"></i>
      </slot>

      <!-- Text -->
      <span class="btn-text">
        <slot name="label"> {{ label }} </slot>
      </span>

      <!-- Right Icon -->
      <slot name="rightIcon">
        <i class="icon-wrapper icon-right" aria-hidden="true" v-if="rightIcon" v-html="rightIcon"></i>
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
    border-radius: 8px;
    border: none;

    background: var(--brown-800);
    color: var(--beige-100);
    font-weight: 500;
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

  .icon-wrapper{
    display: inline-flex;
    width: fit-content;
    height: fit-content;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .icon-right{
    margin-right: -1.8em;
    opacity: 0;
    filter: blur(5px);
  }

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

  .action-btn:focus-visible{
    outline: 4px double var(--beige-400);
    outline-offset: 2px;
  }

  .action-btn:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }

  .action-btn.reverse{
    background: var(--beige-200);
    color: var(--brown-800);
    box-shadow: 0 4px 10px var(--light-shadow);
  }
</style>

<script setup>
  import { computed } from 'vue'
  import { icons } from "../locales/icons.js"

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

  const isButton = computed(() => props.tag.value === 'button')
</script>