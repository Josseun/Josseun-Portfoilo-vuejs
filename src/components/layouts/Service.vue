<template>
  <section class="relative text-white lg:mt-15 mt-50" id="services">
    <div class="max-w-7xl mx-auto px-4">
      <SectionHeader title="Services" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          data-aos="fade-up"
          :data-aos-delay="service.id * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import { ref } from "vue";
import { useDarkMode } from "@/composables/DarkMode";
import ServiceCard from "../UI/ServiceCard.vue";

const services = ref([
  {
    id: 1,
    icon: "mdi:responsive",
    title: "Responsive Web Development",
    description:
      "Creating mobile-first, responsive websites that work seamlessly across all devices and screen sizes.",
  },
  {
    id: 2,
    icon: "mdi:react",
    title: "Reactjs Development",
    description:
      "Building modern, interactive single-page applications using React.jsx with clean and maintainable code.",
  },
  {
    id: 2,
    icon: "mdi:vuejs",
    title: "Vuejs Development",
    description:
      "Building modern, interactive single-page applications using Vue.js with clean and maintainable code.",
  },
  {
    id: 3,
    icon: "mdi:palette",
    title: "UI/UX Implementation",
    description:
      "Converting design mockups from Figma or Adobe XD into pixel-perfect, functional websites.",
  },
  {
    id: 4,
    icon: "mdi:api",
    title: "API Integration",
    description:
      "Integrating RESTful APIs and third-party services to create dynamic, data-driven applications.",
  },
  {
    id: 6,
    icon: "mdi:wrench",
    title: "Website Maintenance",
    description:
      "Providing ongoing support, bug fixes, and updates to keep your website running smoothly.",
  },
]);
</script>
