<template>
  <div
    class="p-8 transition-all duration-300 cursor-pointer font-body border-green-300 border-2 hover:shadow-xl"
  >
    <div class="flex justify-center mb-4">
      <Icon :icon="service.icon" class="text-6xl text-secondary" />
    </div>

    <h3 class="text-xl font-bold mb-3 uppercase text-center font-heading text-secondary">
      {{ service.title }}
    </h3>

    <p class="text-center mb-4 text-white">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>
