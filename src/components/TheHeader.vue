<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TheNavigation from './TheNavigation.vue';

const isScrolled = ref(false);
const onScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <a
      href="#"
      class="basename"
    >
      <strong>MkMs</strong> - Mickaël MEAUSOONE
    </a>
    <TheNavigation />
  </header>
</template>
