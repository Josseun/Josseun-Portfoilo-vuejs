<template>
  <section id="projects" class="relative w-11/12 mx-auto mt-32">
    <SectionHeader title="My Projects" />
    <div class="grid lg:grid-cols-2 mt-10 gap-5">
      <div class="" v-for="(project, index) in Projects" :key="index">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'/' + project.image"
          :tags="project.tags"
          :liveLink="project.liveLink"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import ProjectCard from "@/components/UI/ProjectCard.vue";
import { ref } from "vue";

const Projects = ref([
  {
    title: "Portfolio",
    description:
      "Built with Vue.js and Tailwind CSS. A fully responsive single-page application optimized for all devices.",
    image: "portfolio.png",
    liveLink: "/",
  },
  {
    title: "Space Tourism Website",
    description:
      "A fully responsive multi-page experience built with React, Tailwind CSS, and React Router, featuring smooth transitions and dynamic navigation.",
    image: "space-tourism.png",
    liveLink: "https://space-tourism-inky-rho.vercel.app/",
  },
  {
    title: "Blog Application",
    description:
      "A fully responsive Vue.js blog application powered by Vue Router and Tailwind CSS. Fetches and manages API data with structured loading states, error handling, and smooth navigation transitions.",
    image: "blog-app.png",
    liveLink: "https://blog-application-xi-three.vercel.app/",
  },
  {
    title: "E-commerce Application",
    description:
      "Built a fully responsive e-commerce app with Next.js and Tailwind CSS, featuring smooth page transitions, API-driven product data, advanced cart state management, and secure checkout integration with Paystack.",
    image: "E-Commerce-Project.png",
    liveLink: "https://josseun-ecommerce.vercel.app/",
  },
  // {
  //   title: "",
  //   description: "",
  //   image: "",
  //   liveLink: "",
  // },
  // {
  //   title: "",
  //   description: "",
  //   image: "",
  //   liveLink: "",
  // },
]);
</script>
