<template>
  <span
    :style="{
      display: 'inline-block',
      width: sizeStyles,
      height: sizeStyles,
      borderRadius: '50%',
      backgroundColor: outline ? 'transparent' : finalColor,
      border: outline ? `${borderWidth}px solid ${finalColor}` : 'none'
    }"
  />
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '../../../../tokens/colors'

const props = defineProps({
  token: { type: String, default: 'green.700' },
  customColor: { type: String, default: null },
  outline: { type: Boolean, default: false },
  size: { type: String, default: 'md', validator: (v) => ['sm', 'md', 'lg'].includes(v) },
  borderWidth: { type: Number, default: 2 }
})

const finalColor = computed(() => {
  if (props.customColor) return props.customColor
  const [group, shade] = props.token.split('.')
  return colors[group]?.[shade] ?? '#000'
})

const sizeStyles = computed(() => {
  const sizes = { sm: '8px', md: '12px', lg: '16px' }
  return sizes[props.size]
})
</script>







