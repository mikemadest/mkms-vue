<script setup lang="ts">
const { points } = defineProps({
  points: String
});

const pointsList = points?.split('|') || null;
</script>

<template>
  <ul v-if="points?.length">
    <li v-for="point in pointsList">
      <font-awesome-icon icon="fa-solid fa-check" />
      {{ point }}
    </li>
  </ul>
</template>
