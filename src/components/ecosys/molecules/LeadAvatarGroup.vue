<script setup lang="ts">
import type { LeadOwner } from "../types";
import LeadAvatar from "../atoms/LeadAvatar.vue";

defineProps<{
  owners: LeadOwner[];
}>();
</script>

<template>
  <div class="flex items-center -space-x-2">
    <LeadAvatar
      v-for="owner in owners"
      :key="owner.name"
      :name="owner.name"
    />
  </div>
</template>
