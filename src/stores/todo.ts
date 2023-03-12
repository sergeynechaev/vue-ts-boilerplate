import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TodoItem } from '@/components/ToDo/ToDoItem.vue'

export const useTodoStore = defineStore('todo', () => {
  const items = ref<TodoItem[]>([])
  const count = computed(() => items.value.length)

  const addTodo = (item: TodoItem) => {
    items.value.push(item)
  }

  const removeTodoAt = (index: number) => {
    items.value.splice(index, 1)
  }

  const toggleCompleted = (index: number) => {
    items.value[index].isCompleted = !items.value[index].isCompleted
  }

  return { count, items, addTodo, removeTodoAt, toggleCompleted }
})
