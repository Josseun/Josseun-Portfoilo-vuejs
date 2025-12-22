<template>
  <button
    @click="scrollToTop"
    v-if="isVisible"
    :class="[
      'fixed bottom-4 right-4 bg-gradient-to-r text-white rounded-full w-12 h-12 flex justify-center items-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-600',
      isDarkMode ? 'bg-secondary' : 'bg-primary',
    ]"
  >
    <Icon icon="line-md:arrow-up" class="font-bold" />
  </button>
</template>
<script setup>
import { useDarkMode } from "@/composables/DarkMode";
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";

const { isDarkMode } = useDarkMode();

const isVisible = ref(false);
const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

console.log(isVisible);
</script>
