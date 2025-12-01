<template>
  <div class="min-h-screen bg-gray-50 px-10 py-8 font-sans text-gray-800">
    <header class="mb-10 bg-purple-600 text-white p-4 rounded-xl shadow-md">
      <h1 class="text-3xl font-bold mb-1">🔠 FONTES</h1>
      <p class="text-purple-100 text-sm">
        Escalas e estilos tipográficos do sistema
      </p>
    </header>

    <section class="space-y-10">
      <div class="bg-white rounded-2xl shadow-sm border border-purple-200 p-8">
        <div
          class="flex items-center gap-6 bg-purple-100 text-purple-700 rounded-2xl p-2"
        >
          <div
            class="px-3 flex items-center justify-center bg-purple-300 rounded-full text-3xl"
          >
            💻
          </div>
          <div class="flex flex-col leading-tight">
            <h4 class="text-2xl font-bold uppercase text-purple-700">TITLE</h4>
            <p class="font-medium text-purple-600">
              Poppins Semibold → font-weight: 600
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-10">
          <div class="mt-6 space-y-6">
            <div
              v-for="(style, key) in headingTextStyles"
              :key="'desktop-' + key"
              class="p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-sm mb-3"
            >
              <div class="flex items-center mb-3">
                <h4 class="font-semibold text-gray-800 capitalize">
                  {{ formatName(key as string) }}
                </h4>
                <span class="text-sm text-gray-600 font-mono px-3">
                  font-size: {{ style.fontSize }} &nbsp; | &nbsp; line-height:
                  {{ style.lineHeight }}
                </span>
              </div>

              <p :style="style" class="text-gray-900">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border border-purple-200 rounded-2xl p-8 shadow-sm">
        <div
          class="flex items-center gap-6 bg-purple-100 text-purple-700 rounded-2xl p-2"
        >
          <div
            class="px-3 flex items-center justify-center bg-purple-300 rounded-full text-3xl"
          >
            🅱️
          </div>
          <div class="flex flex-col leading-tight">
            <h4 class="text-2xl font-bold uppercase text-purple-700">BODY</h4>
            <p class="font-medium text-purple-600">
              Inter Medium -> font-weight: 500
            </p>
          </div>
        </div>

        <div class="mt-6 space-y-6">
          <div
            v-for="(style, key) in bodyTextStyles"
            :key="'body-' + key"
            class="p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-sm mb-3"
          >
            <div class="flex items-center mb-3">
              <h4 class="font-semibold text-gray-800 capitalize">{{ key }}</h4>
              <span class="text-sm text-gray-600 font-mono px-3">
                font-size: {{ style.fontSize }} &nbsp; | &nbsp; line-height:
                {{ style.lineHeight }}
              </span>
            </div>

            <p :style="style" class="text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div
      class="mt-12 bg-purple-50 border border-purple-200 rounded-2xl p-8 shadow-sm"
    >
      <div
        class="flex items-center gap-6 bg-purple-100 text-purple-700 rounded-2xl p-2"
      >
        <div
          class="px-3 flex items-center justify-center bg-purple-300 rounded-full text-3xl"
        >
          📱
        </div>
        <div class="flex flex-col leading-tight">
          <h4 class="text-2xl font-bold uppercase text-purple-700">MOBILE</h4>
          <p class="font-medium text-purple-600">
            Poppins Semibold → font-weight: 600 (versão mobile)
          </p>
        </div>
      </div>

      <!-- Moldura simulando o smartphone -->
      <div
        class="mx-auto mt-8 w-[360px] border-[10px] border-gray-800 rounded-[40px] overflow-hidden shadow-lg bg-black"
      >
        <div class="bg-white h-[640px] p-4 overflow-y-auto rounded-[30px]">
          <div class="space-y-6">
            <div
              v-for="(style, key) in headingTextStyles"
              :key="'mobile-heading-' + key"
              class="p-5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
            >
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800 capitalize">
                  {{ formatName(key as string) }}
                </h4>
                <span class="text-xs text-gray-600 font-mono">
                  font-size: {{ toMobileSize(style.fontSize) }} | line-height:
                  {{ toMobileLineHeight(style.lineHeight) }}
                </span>
              </div>

              <p
                :style="{
                  ...style,
                  fontSize: toMobileSize(style.fontSize),
                  lineHeight: toMobileLineHeight(style.lineHeight),
                }"
                class="text-gray-900"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div
              class="flex items-center gap-4 bg-purple-100 text-purple-700 rounded-2xl p-2 mt-10"
            >
              <div
                class="px-3 flex items-center justify-center bg-purple-300 rounded-full text-3xl"
              >
                🅱️
              </div>
              <div class="flex flex-col leading-tight">
                <h4 class="text-2xl font-bold uppercase text-purple-700">
                  BODY
                </h4>
                <p class="font-medium text-purple-600">
                  Inter Medium → font-weight: 500
                </p>
              </div>
            </div>

            <div
              v-for="(style, key) in bodyTextStyles"
              :key="'mobile-body-' + key"
              class="p-5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
            >
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800 capitalize">
                  {{ key }}
                </h4>
                <span class="text-xs text-gray-600 font-mono">
                  font-size: {{ toMobileSize(style.fontSize) }} | line-height:
                  {{ toMobileLineHeight(style.lineHeight) }}
                </span>
              </div>

              <p
                :style="{
                  ...style,
                  fontSize: toMobileSize(style.fontSize),
                  lineHeight: toMobileLineHeight(style.lineHeight),
                }"
                class="text-gray-900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { typography } from "../../tokens/typography";

function formatName(name: string) {
  return name
    .replace(/([a-z])([0-9])/g, "$1 $2")
    .replace(/^./, (s) => s.toUpperCase());
}

function toMobileSize(size: string) {
  const num = parseInt(size);
  return isNaN(num) ? size : `${Math.round(num * 0.8)}px`;
}

function toMobileLineHeight(line: string) {
  const num = parseInt(line);
  return isNaN(num) ? line : `${Math.round(num * 0.8)}px`;
}

const headingTextStyles = Object.fromEntries(
  Object.entries(typography.textStyles).filter(
    ([key]) => !key.startsWith("Body")
  )
);

const bodyTextStyles = Object.fromEntries(
  Object.entries(typography.textStyles).filter(([key]) =>
    key.startsWith("Body")
  )
);
</script>
