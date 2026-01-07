<template>
  <section id="projects" class="relative w-11/12 px-16 mx-auto mt-32">
    <SectionHeader title="My Projects" />
    <div class="grid md:grid-cols-2 lg:grid-cols-2 mt-10 gap-5">
      <div class="" v-for="(project, index) in Projects" :key="index">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'/src/assets/Images/' + project.image"
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
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.png",
    liveLink: "/",
  },
  {
    title: "Space-tourism-website",
    description:
      "built with React, tailwindcss and React Router. responsive design and smooth page transitions.",
    image: "/project1.png",
    liveLink: "https://spacetouriapp.netlify.app/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.png",
    liveLink: "/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.png",
    liveLink: "/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.png",
    liveLink: "/",
  },
  {
    title: "Portfoilo-website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/project1.png",
    liveLink: "/",
  },
]);
</script>

