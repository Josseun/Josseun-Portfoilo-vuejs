<template>
  <section>
    <h2
      class="text-2xl md:text-4xl lg:text-6xl font-bold uppercase font-heading text-center text-[C9B59C]"
      data-aos="fade-up"
    >
      {{ title }}
    </h2>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
