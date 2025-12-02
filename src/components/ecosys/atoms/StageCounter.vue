<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<template>
  <div
    class="px-2 bg-[#E7EBEF] rounded-full flex items-center justify-center w-fit"
  >
    <span class="body small font-medium text-gray-600"> {{ value }}</span>
  </div>
</template>
