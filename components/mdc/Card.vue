<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="card mx-auto w-96 bg-accent">
    <div class="card-body">
      <span class="card-title text-xl font-bold">
        {{ props.title || 'Card' }}
      </span>
      <MDCSlot />
    </div>
  </div>
</template>
