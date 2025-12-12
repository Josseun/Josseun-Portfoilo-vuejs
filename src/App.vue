<template>
  <div :class="['min-h-screen', isDarkMode ? 'bg-[#080326]' : 'bg-[#d4ebf8]']">
    <Navbar ref="navbarRef" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, computed } from "vue";

const Navbar = defineAsyncComponent(() =>
  import("@/components/layouts/Navbar.vue")
);

const navbarRef = ref(null);
const isDarkMode = computed(() => navbarRef.value?.isDarkMode || false);
</script>