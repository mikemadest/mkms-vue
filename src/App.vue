<script setup lang="ts">
import getContent from './config'
import Footer from './components/Footer.vue'
import PageHeader from './components/PageHeader.vue'
import MainBanner from './components/MainBanner.vue'
import About from './components/About.vue'

const { mediumArticles, recentWorks, olderWorks } = getContent('en')
console.log('mediumArticles = ', mediumArticles)
</script>

<template>
  <PageHeader />
  <MainBanner />
  <About />
  <Footer />
</template>
