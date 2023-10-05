<script setup lang="ts">
const props = defineProps<{
  type?: 'info' | 'success' | 'warning' | 'error'
}>()

const icon = computed(() => {
  switch (props.type) {
    case 'info':
      return 'fluent:info-24-filled'
    case 'success':
      return 'fluent:checkmark-circle-24-filled'
    case 'warning':
      return 'fluent:warning-24-filled'
    case 'error':
      return 'fluent:error-circle-24-filled'
    default:
      return 'fluent:info-24-filled'
  }
})

const alertType = computed(() => {
  switch (props.type) {
    case 'info':
      return 'alert-info'
    case 'success':
      return 'alert-success'
    case 'warning':
      return 'alert-warning'
    case 'error':
      return 'alert-error'
    default:
      return 'alert-info'
  }
})
</script>

<template>
  <div class="alert m-2" :class="alertType">
    <Icon :name="icon" />
    <MDCSlot unwrap="p" />
  </div>
</template>
