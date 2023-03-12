<script setup lang="ts">
export interface TodoItem {
  title: string
  isCompleted: boolean
}

defineProps<TodoItem>()
</script>

<template>
  <div class="flex flex-row items-center">
    <div class="mr-2">
      <input type="checkbox" :checked="isCompleted" />
    </div>
    <div>{{ title }}</div>
  </div>
</template>
