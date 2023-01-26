<script setup lang="ts">
import ViteLogoIcon from './assets/vitelogo.svg?component'
import HelloComponent from './components/HelloComponent/HelloComponent.vue'
</script>

<template>
  <header>
    <!-- SVG Loader Example -->
    <ViteLogoIcon class="m-4 w-24 h-24" />
  </header>

  <main>
    <HelloComponent msg="Vue Ts boilerplate" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
