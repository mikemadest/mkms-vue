<script setup lang="ts">
import { useIntl } from 'vue-intl';
import getContent from './config';
import Footer from './components/Footer.vue';
import PageHeader from './components/PageHeader.vue';
import MainBanner from './components/MainBanner.vue';
import About from './components/About.vue';
import Section from './components/Section.vue';

const { locale } = useIntl();
const { mediumArticles, recentWorks, olderWorks } = getContent(locale);
</script>

<template>
  <PageHeader />
  <MainBanner />
  <About />

  <Section id="medium-articles" :items="mediumArticles" titleId="mkms.nav.mediumArticles" />
  <Section id="recent-work" :items="recentWorks" titleId="mkms.nav.recentwork" />
  <Section id="older-work" :items="olderWorks" titleId="mkms.section.moreProjects" isSmall />

  <Footer />
</template>
