<script setup lang="ts">
// @ts-ignore - vuedraggable types may not be available
import draggable from "vuedraggable";
import type { LeadCardData, PipelineColumnData } from "../types";
import LeadCard from "./LeadCard.vue";
import VectorsButtonAdd from "../vectors/ButtonAdd.vue";
import StageCounter from "../atoms/StageCounter.vue";

interface Props {
  column: PipelineColumnData;
  draggable?: boolean;
  disabled?: boolean;
  highlight?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  draggable: true,
  disabled: false,
  highlight: false,
});

const emit = defineEmits<{
  dragEnd: [event: { from: string; to: string; item: LeadCardData }];
  dragEnter: [columnId: string];
  dragLeave: [columnId: string];
  dragStart: [columnId: string];
}>();

const handleDragStart = () => {
  emit("dragStart", props.column.id);
};

const handleDragEnd = (evt: any) => {
  const { item, to } = evt;
  const columnIdTo = to?.closest?.("[data-column-id]")?.getAttribute?.("data-column-id") 
    || to?.getAttribute?.("id") 
    || props.column.id;
  
  const leadId = item?.getAttribute?.("data-id") 
    || item?.querySelector?.("[data-id]")?.getAttribute?.("data-id")
    || item?.dataset?.id;
  
  const lead = props.column.leads.find((l) => l.id === leadId);

  emit("dragEnd", {
    from: props.column.id,
    to: columnIdTo,
    item: lead || {} as LeadCardData, 
  });
};

const handleDragEnter = () => {
  emit("dragEnter", props.column.id);
};

const handleDragLeave = () => {
  emit("dragLeave", props.column.id);
};
</script>

<template>
  <div :class="['flex flex-col items-center', { highlight: highlight }]">
    <header class="p-4 bg-white flex flex-col w-[272px] flex-shrink-0 border border-gray-400">
      <h3 class="body large text-gray-900">
        {{ column.title }}
      </h3>
      <div class="flex items-center justify-between gap-2">
        <span class="body small font-medium text-gray-600">
          {{ column.amount }}
        </span>
        <StageCounter :value="column.leadsCount" />
      </div>
    </header>
    
    <section 
      class="flex flex-col bg-gray-300 !w-[256.6px] flex-1 col border border-gray-300"
      @dragenter.prevent="handleDragEnter"
      @dragover.prevent
    >
      <div class="p-2 flex flex-col gap-2 flex-1 min-h-0">
        <button
          type="button"
          class="h-10 p-1 inline-flex items-center gap-1 flex-shrink-0"
        >
          <VectorsButtonAdd />
          <span class="body medium font-medium text-blue-700">Novo Lead</span>
        </button>

        <draggable
          v-if="draggable"
          :id="column.id"
          :data-column-id="column.id"
          :list="column.leads"
          :animation="150"
          :delay="100"
          :delay-on-touch-only="true"
          :touch-start-threshold="5"
          :disabled="disabled"
          group="leads"
          item-key="id"
          class="flex flex-col gap-2 flex-grow min-h-0"
          style="min-height: 100%;"
          @start="handleDragStart"
          @end="handleDragEnd"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
        >
          <template #item="{ element }">
            <div :key="element.id" :data-id="element.id" class="item">
              <LeadCard :lead="element" />
            </div>
          </template>
        </draggable>

        <template v-else>
          <LeadCard v-for="lead in column.leads" :key="lead.id" :lead="lead" />
        </template>
      </div>
    </section>
  </div>
</template>
