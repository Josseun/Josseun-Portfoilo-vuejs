<template>
  <header>
    <div
      class="flex justify-between items-center p-8 pb-0 px-4 lg:px-12 relative z-20"
    >
      <div
        class="text-3xl font-bold flex justify-center items-center text-[#FFA240]"
      >
        <Icon
          icon="mdi:alpha-j-circle-outline"
          class="lg:size-10 md:size-8 size-6"
        />
        <Icon
          icon="mdi:alpha-b-circle-outline"
          class="lg:size-10 md:size-8 size-6"
        />
        <Icon
          icon="mdi:alpha-o-circle-outline"
          class="lg:size-10 md:size-8 size-6"
        />
        <Icon
          icon="mdi:alpha-s-circle-outline"
          class="lg:size-10 md:size-8 size-6"
        />
        <Icon
          icon="mdi:alpha-s-circle-outline"
          class="lg:size-10 md:size-8 size-6"
        />
      </div>

      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            v-if="isMenuOpen"
            class="text-5xl stroke-white md:text-primary text-white"
          >
            <Icon icon="material-symbols-light:close-rounded" />
          </span>
          <span v-else class="text-5xl md:text-primary text-white">
            <Icon icon="material-symbols:menu-rounded" />
          </span>
        </button>
      </div>

      <nav
        :class="[
          `fixed inset-0 z-20 flex flex-col items-center justify-center uppercase bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
            isMenuOpen ? 'block' : 'hidden'
          }`,
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
        >
          <li v-for="(item, index) in Menu" :key="index">
            <a
              :href="item.href"
              class="block transition ease-linear md:text-lg lg:text-xl font-bold hover:text-secondary text-white"
              @click="ScrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const isMenuOpen = ref(false);
const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const ScrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.ScrollIntoView({ behavior: "smooth " });
  }
};
</script>
