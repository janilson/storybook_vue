<template>
  <span
    :class="[
      'inline-flex items-center justify-center font-medium rounded-full',
      sizeClasses,
      outline ? 'bg-transparent border' : 'text-white',
      props.class
    ]"
    :style="{
      backgroundColor: outline ? 'transparent' : finalColor,
      borderColor: outline ? finalColor : 'transparent',
      color: finalTextColor
    }"
  >
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '../../../../tokens/colors'

const props = defineProps({
  token: { type: String, default: 'green.700' },
  customColor: { type: String, default: null },
  textColor: { type: String, default: null },
  outline: { type: Boolean, default: false },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  class: { type: String, default: '' } 
})

const finalColor = computed(() => {
  if (props.customColor) return props.customColor
  const [group, shade] = props.token.split('.')
  return colors[group]?.[shade] ?? '#000'
})

const finalTextColor = computed(() => {
  if (props.textColor) return props.textColor
  return props.outline ? finalColor.value : '#fff'
})

const sizeClasses = computed(() => {
  return {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }[props.size]
})
</script>

