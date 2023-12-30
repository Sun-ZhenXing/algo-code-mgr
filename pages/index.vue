<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/dist/runtime'
import { daisyEnableThemes } from '~/settings'

const colorMode = useColorMode()
const md = ref(`::alert
Hello MDC
::

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$
`)
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
      <button class="btn" @click="$router.push('/playground')">
        Goto Playground
      </button>
    </div>
    <MDC :value="md" tag="article" />
    <textarea v-model="md" class="textarea w-full" rows="10" />
  </div>
</template>
