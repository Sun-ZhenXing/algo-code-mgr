<script setup lang="ts">
const md = `
::alert
Hello MDC
::
`
</script>

<template>
  <MDC :value="md" tag="article" />
</template>
