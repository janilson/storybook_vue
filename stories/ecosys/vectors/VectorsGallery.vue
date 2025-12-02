<template>
  <div class="p-8">
    <div class="mb-8 pb-6 border-b-2 border-gray-300">
      <h1 class="m-0 mb-2 text-3xl font-bold text-gray-800">Vetores do Ecosys-ui</h1>
      <p class="m-0 text-base text-gray-600">
        Total de {{ vectors.length }} vetor{{ vectors.length !== 1 ? "es" : "" }}
        disponível{{ vectors.length !== 1 ? "eis" : "" }} no sistema
      </p>
    </div>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 max-w-full">
      <div
        v-for="vector in vectors"
        :key="vector.name"
        class="flex flex-col items-center p-6 border border-gray-300 rounded-lg bg-gray-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      >
        <div class="flex items-center justify-center w-[100px] h-[100px] mb-4 bg-white rounded border border-gray-300">
          <component :is="vector.component" />
        </div>
        <h3 class="m-0 mb-2 text-base font-semibold text-gray-800 text-center">
          {{ vector.name }}
        </h3>
        <p class="m-0 text-sm text-gray-600 text-center">
          {{ vector.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const vectorModules = import.meta.glob<{ default: any }>(
  "../../../src/components/ecosys/vectors/*.vue",
  { eager: true }
);

const vectors = computed(() => {
  return Object.entries(vectorModules).map(([path, module]) => {
    const fileName = path.split("/").pop()?.replace(".vue", "") || "";
    
    return {
      name: fileName,
      component: module.default,
      description: `Ícone ${fileName}`,
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
});
</script>

