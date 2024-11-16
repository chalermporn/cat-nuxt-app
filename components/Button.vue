<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'black',
  },
})
</script>

<template>
  <button class="ui-button" :style="{ color }">
    <slot />
  </button>
</template>

<style>
.ui-button {
  background-color: #333;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white !important;
}
</style>
