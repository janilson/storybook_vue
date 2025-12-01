 <template>
  <div 
    class="flex items-center gap-2"
    :class="props.class"
  >
    <div
      class="flex items-center justify-center rounded-full border font-medium"
      :class="sizeMap[props.size]"
      :style="{
        borderColor: props.value ? finalColor : colors.gray[300],
        color: props.value ? finalColor : colors.gray[300]
      }"
    >
      {{ props.value ? '✓' : '✕' }}
    </div>

    <span
      class="font-medium"
      :class="textSizeMap[props.size]"
      :style="{
        color: props.value ? colors.gray[700] : colors.gray[400]
      }"
    >
      <slot />
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { colors } from '../../../../tokens/colors'

const props = defineProps({
  value: { type: Boolean, required: true },

  color: {
    type: String,
    default: 'blue.700' 
  },

  size: {
    type: String,
    default: 'md',
    validator(v) {
      return ['sm', 'md', 'lg'].includes(v)
    }
  },

  /**  
   * Permite sobrescrever classes Tailwind no componente
   */
  class: { type: String, default: '' }
})


/**
 * Mapa de tamanhos (somente classes Tailwind)
 */
const sizeMap = {
  sm: "w-[18px] h-[18px] text-[10px]",
  md: "w-[22px] h-[22px] text-[12px]",
  lg: "w-[28px] h-[28px] text-[16px]"
}

const textSizeMap = {
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[16px]"
}

const finalColor = computed(() => {
  const c = props.color

  if (c.startsWith('#')) return c

  const [group, shade] = c.split('.')
  const tokenColor = colors[group]?.[shade]

  if (!tokenColor) {
    console.warn(`[BooleanBadge] Token inválido: ${props.color}`)
    return '#000'
  }

  return tokenColor
})
</script>

