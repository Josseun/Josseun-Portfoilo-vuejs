<template>
  <section class="flex items-center justify-center min-h-screen mt-20 lg:mt-0">
    <header
      :class="[
        'absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] left-10 top-0 hidden md:block',
        isDarkMode ? 'opacity-20 ' : ' opacity-30',
      ]"
    ></header>
    <header
      :class="[
        'absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] right-10 button-0 hidden md:block',
        isDarkMode ? 'opacity-20' : 'opacity-30',
      ]"
    ></header>
    <main
      class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8"
    >
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋 Hi, I'm
          <span
            :class="[
              'text-secondary stroke-text ',
              isDarkMode ? 'text-stroke-secondary' : 'text-stroke-primary',
            ]"
            >Joshua Oluwaseun</span
          >
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero
          quibusdam neque reiciendis non rerum animi quas, cum a obcaecati,
          ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.
        </p>
        <div class="mt-6 flex justify-center items-center lg:justify-start">
          <Button label="Hire Me" />
          <a
            href=""
            :class="[
              'font-semibold rounded-full ml-2 border-2 text-lg w-[10rem] h-[55px] flex justify-center items-center',
              isDarkMode
                ? 'text-secondary border-secondary bg-transparent'
                : 'bg-white border-primary text-primary',
            ]"
          >
            <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>
      <aside
        class="flex justify-center lg:justify-end mt-20 lg:mt-0 items-center flex-wrap"
      >
        <figure
          class="relative m-7.5 md:w-105 md:h-105 md:before:w-112.5 w-70 h-87.5 before:w-75 before:h-75 before:border-25 before:border-primary before:shadow-[7px_7px_21px_secondary,-7px_-7px_21px_secondary]"
        >
          <div
            class="relative w-full h-full bg-cover transform translate-x-2.5 translate-y-2.5"
          >
            <img
              src="@\assets\Images\King.jpg"
              alt="Hero Picture"
              class="rounded-2xl object-contain"
            />
          </div>
        </figure>
      </aside>
    </main>

    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.2"
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap in="sourceGraphic" scale="30" />
      </filter>
    </svg>
  </section>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";
import { useDarkMode } from "../../composables/DarkMode";

const { isDarkMode } = useDarkMode();
</script>

<style scoped>
.container .card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
}

.container .card:nth-of-type(1)::before {
  filter: url(#wavy1);
}
</style>
