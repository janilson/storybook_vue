<script setup lang="ts">
import { ref } from "vue";
import type { LeadCardData, PipelineColumnData } from "../types";
import PipelineColumn from "../organisms/PipelineColumn.vue";

interface Props {
  columns: PipelineColumnData[];
  draggable?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  draggable: true,
  disabled: false,
});

interface DragEndEvent {
  from: string;
  to: string;
  item: LeadCardData;
}

const emit = defineEmits<{
  dragEnd: [event: DragEndEvent];
  dragEnter: [columnId: string];
  dragLeave: [columnId: string];
  dragStart: [columnId: string];
}>();

const hoveredColumn = ref<string | null>(null);
const draggingColumn = ref<string | null>(null);
let dragLeaveTimeout: ReturnType<typeof setTimeout> | null = null;
let isDragging = false;

const columnEnterCount = new Map<string, number>();

const handleDragStart = (columnId: string) => {
  isDragging = true;
  draggingColumn.value = columnId;
  hoveredColumn.value = columnId;
  columnEnterCount.clear();
  columnEnterCount.set(columnId, 1);
  emit("dragStart", columnId);
};

const handleDragEnd = (event: DragEndEvent) => {
  if (!isDragging) {
    return;
  }
  
  if (dragLeaveTimeout) {
    clearTimeout(dragLeaveTimeout);
    dragLeaveTimeout = null;
  }
  
  isDragging = false;
  hoveredColumn.value = null;
  draggingColumn.value = null;
  columnEnterCount.clear();
  
  emit("dragEnd", event);
};

const handleDragEnter = (columnId: string) => {
  if (!isDragging) {
    return;
  }
  
  if (dragLeaveTimeout) {
    clearTimeout(dragLeaveTimeout);
    dragLeaveTimeout = null;
  }
  
  const currentCount = columnEnterCount.get(columnId) || 0;
  columnEnterCount.set(columnId, currentCount + 1);
  
  hoveredColumn.value = columnId;
  emit("dragEnter", columnId);
};

const handleDragLeave = (columnId: string) => {
  if (!isDragging || !draggingColumn.value) {
    return;
  }
  
  const currentCount = columnEnterCount.get(columnId) || 0;
  const newCount = Math.max(0, currentCount - 1);
  columnEnterCount.set(columnId, newCount);
  
  dragLeaveTimeout = setTimeout(() => {
    if (!draggingColumn.value) {
      dragLeaveTimeout = null;
      return;
    }
    
    const finalCount = columnEnterCount.get(columnId) || 0;
    if (finalCount === 0 && hoveredColumn.value === columnId && draggingColumn.value !== columnId) {
      hoveredColumn.value = null;
    }
    dragLeaveTimeout = null;
  }, 150);
  
  emit("dragLeave", columnId);
};
</script>

<template>
  <section class="w-full h-screen overflow-auto">
    <div 
      class="min-w-[1200px] flex items-stretch"
      style="min-height: 100vh; height: auto;"
    >
      <PipelineColumn
        v-for="column in columns"
        :key="column.id"
        :column="column"
        :draggable="draggable"
        :disabled="disabled"
        :highlight="draggingColumn !== null && ((draggingColumn === column.id) || (hoveredColumn === column.id))"
        @drag-start="handleDragStart"
        @drag-end="handleDragEnd"
        @drag-enter="handleDragEnter"
        @drag-leave="handleDragLeave"
      />
    </div>
  </section>
</template>

<style>
.item.sortable-chosen {
  background: #f8f8f8;
  cursor: grabbing;
}

.item.sortable-ghost {
  background: #E7EBEF;
  border: 1px dashed #42a5f5;
  transition: transform 0.18s ease;
  transform: rotate(1deg);
  will-change: transform;
}

.highlight .col {
  background: #42a4f538 !important;
  border: 1px dashed #42a5f5 !important;
}
</style>
