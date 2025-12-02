<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
}>();

const initials = computed(() => {
  if (!props.name) return "";
  const parts = props.name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return "";
  if (parts.length === 1) return parts[0]?.charAt(0)?.toUpperCase() ?? "";
  const firstInitial = parts[0]?.charAt(0) ?? "";
  const lastInitial = parts[parts.length - 1]?.charAt(0) ?? "";
  return (firstInitial + lastInitial).toUpperCase();
});
</script>

<template>
  <div
    class="w-6 h-6 rounded-full bg-[#E7EBEF] outline outline-1 outline-gray-900 flex items-center justify-center overflow-hidden"
  >
    <span class="body extra-small font-semibold text-gray-900 uppercase">
      {{ initials }}
    </span>
  </div>
</template>
