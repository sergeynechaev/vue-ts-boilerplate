<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import ToDoItem from './ToDoItem.vue'

const { items } = useTodoStore()
</script>

<template>
  <div v-for="item in items" :key="item.title" class="flex flex-col">
    <ToDoItem v-bind="item" />
  </div>
</template>
