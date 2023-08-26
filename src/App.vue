<script setup lang="ts">
import { useIntl } from 'vue-intl';
import getContent from './config';
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import TheBanner from './components/TheBanner.vue';
import TheAboutSection from './components/TheAboutSection.vue';
import PorfolioSection from './components/PorfolioSection.vue';

const { locale } = useIntl();
const { mediumArticles, recentWorks, olderWorks } = getContent(locale);
</script>

<template>
  <TheHeader />
  <TheBanner />
  <TheAboutSection />

  <PorfolioSection
    id="medium-articles"
    :items="mediumArticles"
    title-id="mkms.nav.mediumArticles"
  />

  <PorfolioSection
    id="recent-work"
    :items="recentWorks"
    title-id="mkms.nav.recentwork"
  />

  <PorfolioSection
    id="older-work"
    :items="olderWorks"
    title-id="mkms.section.moreProjects"
    is-small
  />

  <TheFooter />
</template>
