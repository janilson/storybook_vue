<template>
  <div v-if="badge" class="inline-flex items-center gap-2">
    <LeadBadgePill
      :primary="badge.primary"
      :secondary="badge.secondary"
      :extra-count="extraCount"
    />
  </div>
</template>

<script setup lang="ts">
import type { LeadBadge } from "../types";
import LeadBadgePill from "../atoms/LeadBadgePill.vue";

defineProps<{
  badge?: LeadBadge;
  extraCount?: number;
}>();
</script>
