<script setup lang="ts">
defineProps<{
  href?: string
  blank?: boolean
}>()
</script>

<template>
  <component :is="href ? 'a' : 'div'" :href="href" :target="href && blank ? '_blank' : undefined" rel="noopener">
    <div class="flex flex-row items-center">
      <div>
        <slot name="icon"></slot>
      </div>
      <div>
        <slot name="heading"></slot>
      </div>
    </div>
  </component>
</template>

<style scoped>
/* styles */
</style>
