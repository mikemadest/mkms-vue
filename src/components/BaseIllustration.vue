<script setup lang="ts">
const { isSmall, image } = defineProps({
  imageAlt: String,
  image: String,
  href: String,
  isSmall: Boolean
});
const styles = isSmall ? { backgroundImage: `url(${image})` } : {};
</script>

<template>
  <div
    class="illustration"
    :style="styles"
  >
    <a
      v-if="href"
      :href="href"
      target="_blank"
      :title="imageAlt"
    >
      <img
        :src="image"
        :alt="imageAlt"
      />
    </a>
    <img
      v-else
      :src="image"
      :alt="imageAlt"
    />
  </div>
</template>
