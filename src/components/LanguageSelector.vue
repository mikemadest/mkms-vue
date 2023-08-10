<script setup lang="ts">
import { useIntl } from 'vue-intl'
const { locale } = useIntl()
</script>

<template>
  <div class="language-selector">
    <font-awesome-icon icon="fa-solid fa-language" />
    <a v-if="locale === 'en'" href="/fr">Français</a>
    <a v-else href="/en">english</a>
  </div>
</template>
