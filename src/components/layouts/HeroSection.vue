```vue
<template>
  <section
    data-aos="zoom-in"
    class="flex items-center justify-center min-h-screen mt-20 lg:mt-0"
  >
    <header
      :class="[
        'absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] left-10 top-0 hidden md:block',
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
      class="absolute mx-5 lg:mx-10 grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8"
    >
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋 Hi, I'm
          <span
            :class="[
              'text-secondary stroke-text',
              isDarkMode ? 'text-stroke-secondary' : 'text-stroke-primary',
            ]"
            >Joshua Oluwaseun</span
          >
        </h1>
        <p  class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold leading-relaxed">Junior Frontend Developer • React • Tailwind CSS • Building Responsive Web Apps</p>
        <p
          class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold leading-relaxed"
        >
          I’m a Junior Frontend Developer trained at AltSchool Africa. I build
          responsive, interactive web applications using React and modern CSS
          frameworks.
          <span class="block mt-2 font-normal opacity-80">
            Currently seeking frontend internships and junior roles.
          </span>
        </p>

        <div class="mt-6 flex justify-center items-center lg:justify-start">
          <a
            href="/Joshua_Oluwaseun_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'font-semibold rounded-full ml-2 border-2 text-lg w-[12rem] h-[55px] flex justify-center items-center',
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
        class="container flex justify-center lg:justify-end mt-20 pr-10 lg:mt-0 items-center flex-wrap"
      >
        <div class="relative w-full max-w-110 aspect-square">
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary animate-spin"
          ></div>
          <div
            class="absolute inset-[10px] rounded-full overflow-hidden bg-white"
          >
            <img
              class="w-full h-full object-cover"
              loading="lazy"
              src="@/assets/Images/King.jpg"
              alt="Portrait of Joshua Oluwaseun, Junior Frontend Developer"
            />
          </div>
        </div>
      </aside>
    </main>
  </section>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";
import { useDarkMode } from "@/composables/DarkMode";

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
