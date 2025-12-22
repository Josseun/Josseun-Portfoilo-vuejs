<template>
  <div
    :class="[
      'min-h-screen',
      isDarkMode ? 'bg-[#080326] text-white' : 'bg-[#d4ebf8]',
    ]"
  >
    <Navbar />
    <HeroSection />
    <CountUp />
    <Service />
    <Skills />
    <WhyMe />
    <Projects />
    <Contact />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { useDarkMode } from "@/composables/DarkMode";

const { isDarkMode } = useDarkMode();

const Navbar = defineAsyncComponent(() =>
  import("@/components/layouts/Navbar.vue")
);
const HeroSection = defineAsyncComponent(() =>
  import("@/components/layouts/HeroSection.vue")
);
const CountUp = defineAsyncComponent(() =>
  import("@/components/layouts/CountUp.vue")
);
const Service = defineAsyncComponent(() =>
  import("@/components/layouts/Service.vue")
);
const Skills = defineAsyncComponent(() =>
  import("@/components/layouts/Skills.vue")
);
const WhyMe = defineAsyncComponent(() =>
  import("@/components/layouts/WhyMe.vue")
);
const Projects = defineAsyncComponent(() =>
  import("@/components/layouts/Projects.vue")
);
const Contact = defineAsyncComponent(() =>
  import("@/components/layouts/Contact.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/components/layouts/Footer.vue")
);
const BackToTop = defineAsyncComponent(() =>
  import("@/components/layouts/BackToTop.vue")
);
</script>
