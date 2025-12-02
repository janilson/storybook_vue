
<script setup lang="ts">
import { computed } from "vue";
import type { LeadCardData } from "../types";
import LeadAvatarGroup from "../molecules/LeadAvatarGroup.vue";
import LeadBadgeSummary from "../molecules/LeadBadgeSummary.vue";
import VectorsWhatsapp from "../vectors/Whatsapp.vue";

const props = defineProps<{
  lead: LeadCardData;
}>();

const toneClasses: Record<string, string> = {
  default: "text-gray-900",
  subtle: "text-gray-600",
  alert: "text-red-700",
  success: "text-green-500",
};

const indicatorClasses: Record<string, string> = {
  default: "bg-icon-subtle",
  subtle: "bg-icon-subtle",
  alert: "bg-text-alert",
  success: "bg-text-success",
};

const containerClasses = computed(() => [
  "",
  props.lead.borderTone === "alert" ? "border-t border-red-700" : "",
]);

const contactToneClass = computed(
  () => toneClasses[props.lead.contactTone ?? "subtle"],
);

const statusToneClass = computed(
  () => toneClasses[props.lead.statusTone ?? "default"],
);

const hasBars = computed(
  () => props.lead.highlightBars && props.lead.highlightBars.length > 0,
);
</script>

<template>
  <article :class="containerClasses" class="flex flex-col gap-2 justify-between bg-white !w-[240px] min-h-[84px] p-4 shadow-sm">
    <header class="w-full flex items-center gap-4">
      <div class="flex-1">
        <p class="body large font-semibold text-gray-900 line-clamp-1">
          {{ lead.name }}
        </p>
      </div>
      <LeadAvatarGroup :owners="lead.owners" />
    </header>

    <div class="w-full flex justify-between items-start gap-4">
      <div class="flex items-center gap-1" >
        <VectorsWhatsapp :color="lead.contactTone === 'success' ? '#4DA025' : '#7D7E80'" />
        <span class="body extra-small font-medium" :class="contactToneClass">{{ lead.contactInfo }}</span>
      </div>
      <span :class="['body extra-small font-semibold', statusToneClass]">
        {{ lead.statusLabel }}
      </span>
    </div>

    <LeadBadgeSummary
      v-if="lead.badge && lead.showBadge !== false"
      :badge="lead.badge"
      :extra-count="lead.badgeExtraCount"
    />

    <footer v-if="hasBars" class="w-full flex items-center gap-1">
      <span
        v-for="bar in lead.highlightBars"
        :key="bar.color + (bar.title ?? '')"
        class="h-1 !w-[19px]"
        :style="{ backgroundColor: bar.color }"
        :title="bar.title"
      />
    </footer>
  </article>
</template>
