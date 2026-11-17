<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { company } from '../../config/company'
import { services } from '../../data/services'

const route = useRoute()
const whatsappUrl = computed(() => {
  const service = services.find((item) => item.path === route.path)
  const message = service?.whatsappMessage || company.whatsappMessage
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <a
    :href="whatsappUrl"
    class="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Cotizar por WhatsApp (se abre en una nueva pestaña)"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.3A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linejoin="round"
      />
      <path
        d="M9 8.5c0 3.2 2.3 5.5 5.5 5.5l1-1.5-2-1-1 1a5 5 0 0 1-2-2l1-1-1-2L9 8.5Z"
        fill="currentColor"
      />
    </svg>
    <span>Cotizar por WhatsApp</span>
  </a>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  right: max(20px, env(safe-area-inset-right, 0px));
  bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  z-index: 1100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 12px 20px;
  border: 1px solid #fff;
  border-radius: 999px;
  background: #146c38;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  box-shadow: 0 4px 18px rgb(0 0 0 / 25%);
}

.whatsapp-button:hover {
  background: #10582e;
}

.whatsapp-button:focus-visible {
  outline: 3px solid #111;
  outline-offset: 3px;
}

.whatsapp-button svg {
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .whatsapp-button {
    right: max(12px, env(safe-area-inset-right, 0px));
    bottom: calc(12px + env(safe-area-inset-bottom, 0px));
    padding: 12px 16px;
    font-size: 0.875rem;
  }
}
</style>
