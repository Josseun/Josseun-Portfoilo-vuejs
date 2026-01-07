<template>
  <footer
    class="z-10 flex justify-center text-white border-t-2 border-t-white bg-primary mt-20"
  >
    <div
      class="container p-8 flex flex-col gap-10 justify-between items-center"
    >
      <div
        class="text-3xl font-bold flex justify-center items-center text-[#FFA240]"
      >
        <Icon
          icon="mdi:alpha-j-circle-outline"
          class="lg:size-10 md:size-8 size-8"
        />
        <Icon
          icon="mdi:alpha-b-circle-outline"
          class="lg:size-10 md:size-8 size-8"
        />
        <Icon
          icon="mdi:alpha-o-circle-outline"
          class="lg:size-10 md:size-8 size-8"
        />
        <Icon
          icon="mdi:alpha-s-circle-outline"
          class="lg:size-10 md:size-8 size-8"
        />
        <Icon
          icon="mdi:alpha-s-circle-outline"
          class="lg:size-10 md:size-8 size-8"
        />
      </div>
      <div class="flex flex-col gap-5">
        <ul
          class="flex justify-center items-center md:flex-row md:space-x-5 md:space-y-0"
        >
          <li v-for="(item, index) in Menu" :key="index">
            <a
              :href="item.href"
              class="transition ease-linear text-sm md:text-lg lg:text-xl font-bold hover:text-secondary uppercase text-white flex items-center justify-center"
              @click="ScrollToSection(item.href)"
            >
              {{ item.name }}
              <Icon
                class="text-3xl text-secondary font-black"
                icon="ci:line-xl"
                v-if="index < Menu.length - 1"
              />
            </a>
          </li>
        </ul>
        <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
          <a
            href="mailto:josseun123@gmail.com"
            target="_blank"
            class="text-secondary bg-tarary rounded-full border-2 hover:text-blue-500"
          >
            <Icon
              icon="material-symbols-light:mail-outline"
              style="font-size: 2rem"
              class="size-10 text-secondary p-2 rounded-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/josseun123"
            target="_blank"
            class="text-secondary bg-tarary rounded-full border-2 hover:text-blue-700"
          >
            <Icon
              icon="basil:linkedin-outline"
              style="font-size: 2rem"
              class="size-10 text-secondary p-2 rounded-full"
            />
          </a>
          <a
            href="https://github.com/Josseun"
            target="_blank"
            class="text-secondary bg-tarary rounded-full border-2 hover:text-gray-800"
          >
            <Icon
              icon="mynaui:github"
              style="font-size: 2rem"
              class="size-10 text-secondary p-2 rounded-full"
            />
          </a>
          <a
            href=""
            target="_blank"
            class="text-secondary bg-tarary rounded-full border-2 hover:text-pink-500"
          >
            <Icon
              icon="stash:social-whatsapp"
              style="font-size: 2rem"
              class="size-10 text-secondary p-2 rounded-full"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col lg:flex items-center justify-center ml-2 gap-1 text-sm">
        <span class="flex items-center text-gray-500 font-bold"><Icon icon="bx:copyright" />2026</span>
        <span class="font-bold">ODUSANYA JOSHUA OLUWASEUN.</span> 
        <span class="text-gray-500 font-bold">All rights reserved</span>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useMenu } from "@/composables/menuItem";
import { Icon } from "@iconify/vue";

const { Menu, ScrollToSection } = useMenu();
</script>
