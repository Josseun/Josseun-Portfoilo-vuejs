<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
      <div class="dark:text-white text-3xl font-bold">LOGO</div>

      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            v-if="isMenuOpen"
            class="text-5xl md:text-primary text-white dark:text-white"
          >
            <Icon class="material-symbols:close-rounded" />
          </span>
          <span
            v-else
            class="text-5xl md:text-primary text-white dark:text-white"
          >
            <Icon icon="material-symbols:menu-rounded" />
          </span>
        </button>
      </div>

      <nav
        :class="[
          `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
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
              class="block transition ease-linear md:text-lg lg:text-xl font-bold text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
              @click="ScrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
        <button
          @click="toggleDarkMode"
          class="text-white ml-20 z-20 hidden md:block"
        >
          <Icon
            v-if="isDarkMode"
            icon="line-md:moon-filled"
            class="text-5xl text-primary"
          />
          <Icon
            v-else
            icon="line-md:sunny-outline"
            class="text-5xl text-secondary"
          />
        </button>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
// document.documentElement.classList.toggle('dark');

const isMenuOpen = ref(false);
const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Why me", href: "#whyme" },
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

const isDarkMode = ref(localStorage.getItem("theme") === "dark");

const toggleDarkMode = () => {
  const html = document.documentElement;
  if (isDarkMode.value) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  isDarkMode.value = !isDarkMode.value;
};

defineExpose({ isDarkMode });
</script>
