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

<style scoped>
.card {
  color: rgba(255, 255, 255, 0.95) !important;
  --tw-prose-counters: rgba(255, 255, 255, 0.95);
}
</style>
