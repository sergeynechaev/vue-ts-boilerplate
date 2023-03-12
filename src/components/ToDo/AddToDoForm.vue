<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const title = ref('')
const { addTodo } = useTodoStore()

const addTodoItem = () => {
  addTodo({
    title: title.value,
    isCompleted: false,
  })

  title.value = ''
}
</script>

<template>
  <div class="flex flex-row items-center">
    <div>
      <input type="text" v-model="title" class="p-2 rounded-md border-1 border-blue-700 mr-4" />
    </div>
    <div>
      <button @click="addTodoItem" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </div>
  </div>
</template>
