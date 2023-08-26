<script setup lang="ts">
import PorfolioSectionArticle from './PorfolioSectionArticle.vue';
import type { ArticleType } from '../AllTypes';

const { isSmall, titleId } = defineProps({
  items: Array<ArticleType>,
  titleId: String,
  id: String,
  isSmall: Boolean
});
const itemClassName = isSmall ? 'small-row' : 'normal-row';
</script>

<template>
  <section
    :id="id"
    class="work-articles"
  >
    <h2>
      {{ $formatMessage({ id: titleId }) }}
    </h2>

    <div :class="itemClassName">
      <PorfolioSectionArticle
        v-for="article in items"
        :key="article.title"
        :title="article.title"
        :image="article.image"
        :href="article.href"
        :description="article.description"
        :image-alt="article.imageAlt"
        :tags="article.tags"
        :points="article.points"
        :button-label="article.linkLabel"
        :is-small="isSmall"
      />
    </div>
  </section>
</template>
