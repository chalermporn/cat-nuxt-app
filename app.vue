<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
useSeoMeta({
  title: 'Nuxt Color Mode',
  description: 'Demo of using @nuxtjs/color-mode for Nuxt, supporting dark mode and custom colors',
})
</script>

<template>
  <div class="container mx-auto text-center p-14">
    <NuxtLogo class="inline-block pb-5" title="logo" />
    <ColorModePicker />
    <NuxtPage />
  </div>
</template>
