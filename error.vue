<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const props = defineProps<{
  error: object
}>()

const isDev = import.meta.env.DEV

// refresh page on error
// const refreshPage = () => window.location.reload()
// handle error and redirect to home page
// const handleError = () => clearError({ redirect: '/' })
// error ref
const processingError = useError() as Ref<NuxtError>

onMounted(() => {
  if (!import.meta.env.SSR && isDev)
    console.error(props.error)
})
</script>

<template>
  <div class="m-[0_auto] flex h-screen w-full max-w-[620px] flex-col items-center justify-center">
    <span>{{ processingError.message }}</span>
  </div>
</template>
