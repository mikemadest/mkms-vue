<script setup lang="ts">
import Article from './Article.vue';

const { isSmall } = defineProps(['items', 'titleId', 'id', 'isSmall']);
const itemClassName = isSmall ? 'small-row' : 'normal-row';
</script>

<template>
  <section :id="id" class="work-articles">
    <h2>
      {{ $formatMessage({ id: titleId }) }}
    </h2>

    <div :class="itemClassName">
      <Article
        v-for="article in items"
        :key="article.title"
        :title="article.title"
        :image="article.image"
        :href="article.href"
        :description="article.description"
        :imageAlt="article.imageAlt"
        :tags="article.tags"
        :points="article.points"
        :buttonLabel="article.linkLabel"
        :isSmall="isSmall"
      />
    </div>
  </section>
</template>
