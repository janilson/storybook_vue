<script setup lang="ts">
defineProps<{
  primary: string;
  secondary?: string;
  extraCount?: number;
}>();
</script>

<template>
 <div class="flex items-stretch gap-2">
  <div
    class="px-2 py-1 bg-[#D9EFFF] flex items-center gap-2 flex-wrap text-blue-700 uppercase w-fit"
  >
    <span class="body small font-semibold tracking-wide text-blue-700">
      {{ primary }}
    </span>
    <span v-if="secondary" class="body extra-small text-blue-700">
      {{ secondary }}
    </span>
  </div>
  <div
    v-if="extraCount && extraCount > 0"
    class="px-1.5 py-1 bg-[#D9EFFF] w-fit flex items-center justify-center"
  >
   <span class="body extra-small text-blue-700 uppercase"> +{{ extraCount }}</span>
  </div>
 </div>
</template>
