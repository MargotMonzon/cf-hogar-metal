<script setup>
import { RouterView } from 'vue-router'
import WhatsappButton from './components/ui/WhatsappButton.vue'
</script>

<template>
  <div class="app-content">
    <RouterView />
  </div>
  <WhatsappButton />
</template>
<style scoped>
.app-content {
  padding-bottom: calc(96px + env(safe-area-inset-bottom, 0px));
}
</style>
