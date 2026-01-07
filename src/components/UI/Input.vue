<template>
  <div class="relative z-10">
    <label
      :for="id"
      :class="[
        'block mb-2 text-sm font-medium',
        isDarkMode ? 'text-gray-300' : 'text-gray-900',
      ]"
    >
      {{ label }}
    </label>

    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :rows="type === 'textarea' ? rows : undefined"
      :placeholder="placeholder"
      class="bg-tarary
        shadow-sm text-white text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500 border border-secondary"
    />
  </div>
</template>
<script setup>
import { useDarkMode } from "@/composables/DarkMode";

const isDarkMode = useDarkMode();

defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  rows: { type: Number, default: 4 },

  modelValue: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
<style></style>
