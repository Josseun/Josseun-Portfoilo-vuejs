<template>
  <article
    class="w-full h-full text-white lg:flex flex flex-col border-secondary border p-3 rounded-2xl font-body gap-5 place-items-center"
  >
    <!-- Image Section -->

    <div class="w-full max-w-base h-base">
      <a :href="liveLink" target="_blank" rel="noopener noreferrer">
        <img
          :src="image"
          :alt="title"
          class="object-scale-down w-full h-full border border-gray-600 rounded-lg"
        />
      </a>
    </div>

    <div class="">
      <!-- Content Section -->
      <section class="px-6 py-4 gap-3 flex flex-col">
        <header>
          <h3 class="font-bold text-xl mt-2 text-white font-heading uppercase">
            {{ title }}
          </h3>
        </header>
        <p class="text-gray-300 text-sm font-semibold">
          {{ description }}
        </p>
      </section>

      <!-- Actions Section -->
      <div class="px-6 pb-4 flex justify-between items-center">
        <a
          :href="liveLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary font-semibold hover:underline text-lg flex items-center group"
          >View Project
          <Icon
            class="size-10 text-secondary text-2xl transition-transform duration-300 group-hover:translate-x-2"
            icon="mdi:arrow-right-thin"
          />
        </a>
      </div>
    </div>
  </article>
</template>
<script setup>
import { useDarkMode } from "@/composables/DarkMode";

defineProps({
  title: {
    type: String,
    required: true,
    default: "Project Title",
  },
  description: {
    type: String,
    required: true,
    default: "Brief description of the project",
  },
  image: {
    type: String,
    required: true,
    default: "/",
  },
  // tags: {
  //   type: Array,
  //   required: false,
  //   default: () => ["Vue.js", "Tailwind Css"],
  // },
  liveLink: {
    type: String,
    required: false,
    default: null,
  },
  // codeLink: {
  //   type: String,
  //   required: true,
  //   default: "Project Title",
  // },
});
</script>
<style></style>
