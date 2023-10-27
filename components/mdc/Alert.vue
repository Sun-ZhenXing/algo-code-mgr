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
    <!-- Remove ClientOnly when nuxt-modules/icon#101 fixed.
      Reference: https://github.com/nuxt-modules/icon/issues/101
    -->
    <ClientOnly>
      <Icon :name="icon" />
    </ClientOnly>
    <MDCSlot unwrap="p" />
  </div>
</template>

<style>
.alert {
  color: rgba(255, 255, 255, 0.95) !important;
}
</style>
