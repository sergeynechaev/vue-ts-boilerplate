<script setup lang="ts">
import ViteLogoIcon from './assets/vitelogo.svg?component'
import HelloComponent from './components/HelloComponent/HelloComponent.vue'
import AddToDoForm from './components/ToDo/AddToDoForm.vue'
import ToDoList from './components/ToDo/ToDoList.vue'
</script>

<template>
  <header>
    <!-- SVG Loader Example -->
    <ViteLogoIcon class="m-4 w-24 h-24" />
  </header>

  <main>
    <HelloComponent msg="Vue Ts boilerplate" />
    <div class="mt-8">
      <AddToDoForm />
      <ToDoList />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
