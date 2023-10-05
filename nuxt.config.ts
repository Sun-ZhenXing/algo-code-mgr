// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // Content
    '@nuxtjs/mdc',

    // UI & style
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',

    // Router
    'nuxt-typed-router',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',

    // I18n
    '@nuxtjs/i18n',

    // SEO
    '@nuxtseo/module',
  ],
  mdc: {
    highlight: {
      theme: {
        system: 'dark-plus',
        light: 'dark-plus',
        dark: 'dark-plus',
      },
      preload: [
        'python',
        'java',
        'cpp',
      ],
    },
  },
  colorMode: {
    preference: 'system', // default theme 'system'
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  linkChecker: {
    enabled: false,
  },
})
