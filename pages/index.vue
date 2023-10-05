<script setup lang="ts">
import { daisyEnableThemes } from '~/settings'

const colorMode = useColorMode()
const md = `
::alert
Hello MDC
::
`
</script>

<template>
  <div>
    <div class="flex gap-4 p-4">
      <button class="btn">
        Hello daisyUI
      </button>
      <select v-model="colorMode.preference" class="select w-full max-w-xs">
        <option disabled selected>
          Theme
        </option>
        <option v-for="theme of daisyEnableThemes" :key="theme">
          {{ theme }}
        </option>
      </select>
    </div>
    <MDC :value="md" tag="article" />
  </div>
</template>
