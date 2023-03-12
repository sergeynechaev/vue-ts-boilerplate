<script setup lang="ts">
import ComponentItem from './ComponentItem.vue'
import VueLogoIcon from '@/assets/vuelogo.svg?component'
import ViteLogoIcon from '@/assets/vitelogo.svg?component'
import { useCounterStore } from '@/stores/counter'

defineProps<{
  msg: string
}>()

const counter = useCounterStore()
</script>

<template>
  <div>
    <div class="message">{{ msg }}</div>
    <div class="flex flex-row items-center">
      <ComponentItem href="https://vuejs.org/">
        <template #icon>
          <VueLogoIcon class="w-8 h-8 pr-1" />
        </template>
        <template #heading>Vue 3</template>
      </ComponentItem>
      <div class="px-2">+</div>
      <ComponentItem href="https://vitejs.dev/">
        <template #icon>
          <ViteLogoIcon class="w-8 h-8 pr-1" />
        </template>
        <template #heading>Vite</template>
      </ComponentItem>
      <div class="px-2">+</div>
      <ComponentItem href="https://tailwindcss.com/">
        <template #heading>Tailwind</template>
      </ComponentItem>
      <div class="px-2">+</div>
      <ComponentItem href="https://pinia.vuejs.org/">
        <template #heading>Pinia</template>
      </ComponentItem>
      <div class="px-2">+</div>
      <ComponentItem href="https://vitest.dev/">
        <template #heading>Vitest</template>
      </ComponentItem>
      <div class="px-2">+</div>
      <ComponentItem>
        <template #heading>ESLint</template>
      </ComponentItem>
      <div class="px-2">+</div>
      <ComponentItem>
        <template #heading>Prettier</template>
      </ComponentItem>
    </div>
  </div>
  <div class="mt-10">
    <div class="font-bold">
      Counter example:
      <div>Single: {{ counter.count }}</div>
      <div>Double: {{ counter.doubleCount }}</div>
    </div>
    <button @click="counter.increment" class="counter-button mr-2 mt-2">+</button>
    <button @click="counter.decrement" class="counter-button">-</button>
  </div>
</template>

<style scoped>
/* Tailwind in CSS example */
.message {
  @apply text-2xl font-bold text-cyan-500 mb-4;
}
.counter-button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
