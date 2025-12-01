<template>
  <div class="min-h-screen bg-gray-50 px-10 py-8 font-sans text-gray-800">
    <header class="mb-10 bg-purple-600 text-white p-3 rounded-xl shadow-md">
      <h1 class="text-3xl font-bold mb-1">🎨 CORES</h1>
      <p class="text-purple-100 text-sm">Paleta de cores usada no sistema</p>
    </header>

    <section class="mb-10 max-w-3xl">
      <h2 class="text-2xl font-semibold mb-3 text-purple-700">
        Cores de Base (Brand)
      </h2>
      <p class="text-sm leading-relaxed text-gray-700">
        Também chamadas de <strong>Cores da Marca</strong> (Brand Colors), são
        usadas pela equipe de design para definir a harmonia e contraste das
        interfaces digitais.
      </p>

      <div
        class="mt-6 bg-purple-100 border border-purple-400 p-4 rounded-lg flex flex-wrap items-center gap-2"
      >
        <span class="text-sm text-gray-700"
          >Caso tenha interesse em saber mais sobre teoria das cores:</span
        >
        <a
          href="https://next-ds.estaleiro.serpro.gov.br/fundamentos/design-token"
          target="_blank"
          class="text-xs bg-purple-200 hover:bg-purple-300 text-purple-700 px-3 py-1 rounded-md font-semibold transition-all"
        >
          Chief of Design – Teoria das Cores
        </a>
      </div>
    </section>

    <section class="space-y-10">
      <div
        v-for="(group, groupName) in colors"
        :key="groupName"
        class="p-8 rounded-2xl shadow-sm border border-purple-200"
      >
        <h3
          class="text-xl font-semibold mb-6 uppercase tracking-wide bg-purple-100 text-purple-700 border border-purple-400 p-2 rounded-lg px-3"
        >
          {{ groupName }}
        </h3>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
        >
          <div
            v-for="(colorValue, shadeName) in group"
            :key="shadeName"
            class="flex flex-col items-center"
          >
            <div
              class="w-20 h-20 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-xs font-semibold"
              :style="{
                backgroundColor: colorValue,
                color: getContrastColor(colorValue),
              }"
            >
              {{
                isNaN(Number(shadeName))
                  ? String(shadeName).toUpperCase()
                  : String(shadeName)
              }}
            </div>

            <div class="text-[11px] text-gray-700 mt-2 font-mono uppercase">
              HEX
            </div>
            <code class="text-xs text-gray-600 font-mono">{{
              colorValue
            }}</code>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { colors } from "../../tokens/colors";

function getContrastColor(hex: string): string {
  if (!hex || hex === "transparent" || hex === "currentColor") return "#000";
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000" : "#fff";
}
</script>
