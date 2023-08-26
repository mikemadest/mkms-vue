<script setup lang="ts">
import tagsLinks from '../helpers';

const { tags } = defineProps({
  tags: String
});

const tagList = tags?.split(' ');
</script>

<template>
  <span class="highlight-features">
    <template
      v-for="tag in tagList"
      :key="tag"
    >
      <a
        v-if="tagsLinks[tag]"
        :href="tagsLinks[tag]"
        >{{ tag }}</a
      >
      <span v-else>{{ tag }}</span>
    </template>
  </span>
</template>
