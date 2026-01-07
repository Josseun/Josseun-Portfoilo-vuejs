import { ref } from "vue";

const isMenuOpen = ref(false);
const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

export function useMenu() {
  const ScrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
      section.ScrollIntoView({ behavior: "smooth " });
    }
  };
  return {
    isMenuOpen,
    Menu,
    ScrollToSection,
  };
}
