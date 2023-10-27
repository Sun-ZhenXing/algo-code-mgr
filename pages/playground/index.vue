<script setup lang="ts">
if (!import.meta.env.SSR)
  import('katex/dist/contrib/copy-tex.mjs')

const md = ref(`# Simple MDC

## 1. Basic MarkDown

- **Bold**, *Italic*, ~~del~~, \`inline code\`
- Inline code with lang: \`const hello = () => console.log('Hello!')\`{lang="js"}
- [Link](#)
- Reference[^1]
- $\\LaTeX$

[^1]: Reference，<https://google.com>

\`\`\`js
function hello() {
  console.log('Hello, world!')
}
\`\`\`

$$L = \\frac{1}{2} \\rho v^2 S C_L$$

## 2. MarkDown Components

::alert{type="info"}
Info alert!
::

::alert{type="success"}
Success alert!
::

::alert{type="warning"}
Warning alert!
::

::alert{type="error"}
Error alert!
::

::card{title="Card Title"}
1. This is a card.
2. This is a card.
::
`)
</script>

<template>
  <div class="grid h-screen grid-cols-2">
    <textarea v-model="md" class="textarea w-full p-4 font-mono" placeholder="Input MDC code..." />
    <MDC v-slot="{ data, body, excerpt, toc }" tag="article" :value="md" class="m-2 box-border overflow-auto p-4">
      <template v-if="body">
        <MDCRenderer tag="div" :body="body" :data="data" class="prose mx-auto" />
      </template>
    </MDC>
  </div>
</template>
