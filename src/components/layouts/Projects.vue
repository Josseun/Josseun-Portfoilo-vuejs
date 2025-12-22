<template>
  <section id="projects" class="relative w-11/12 px-16 mx-auto">
    <SectionHeader title="My Projects" />

    <!-- Custom Navigation Buttons  -->

    <button
      :class="[
        'swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 p-4 text-white rounded-full',
        isDarkMode ? 'bg-secondary' : 'bg-primary',
      ]"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      :class="[
        'swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 p-4 text-white rounded-full',
        isDarkMode ? 'bg-secondary' : 'bg-primary',
      ]"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>

    <!-- swiper Component -->
    <swiper
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="navigationOption"
      loop
      pagination
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32"
    >
      <swiper-slide
        class="max-w-[300px]"
        v-for="(project, index) in Projects"
        :key="index"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'/src/assets/Images/' + project.image"
          :tags="project.tags"
          :liveLink="project.liveLink"
          :codeLink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import ProjectCard from "@/components/UI/ProjectCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify/vue";
import { useDarkMode } from "@/composables/DarkMode";
import { ref } from "vue";

const { isDarkMode } = useDarkMode();

// Navigation option
const navigationOption = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
};

const Projects = ref([
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.jpg",
    tags: ["VueJs", "tailwindcss"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Space-tourism-website",
   description: "Interactive space tourism website built with React, tailwindcss and React Router. Features destination guides, spacecraft details, and crew profiles with responsive design and smooth page transitions.",
    image: "/project1.png",
    tags: ["React", "Tailwindcss", "react-router-dom"],
    liveLink: "https://spacetouriapp.netlify.app/",
    codeLink: "https://github.com/Josseun/space-tourism",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project3.jpg",
    tags: ["VueJs", "tailwindcss"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.jpg",
    tags: ["VueJs", "tailwindcss"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project2.jpg",
    tags: ["VueJs", "tailwindcss"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project3.jpg",
    tags: ["VueJs", "tailwindcss"],
    liveLink: "/",
    codeLink: "/",
  },
]);
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
