<script setup lang="ts">
import { useIntl } from 'vue-intl';
import getContents from '../config';
import TheLanguageSelector from './TheLanguageSelector.vue';

const { locale } = useIntl();
const { menu } = getContents(locale);
</script>

<template>
  <nav v-once>
    <ul>
      <li
        v-for="item in menu"
        class="menu-item"
        :key="item.link"
      >
        <a href="{{item.link}}">
          <font-awesome-icon :icon="['fa-solid', item.icon]" />
          {{ item.label }}</a
        >
      </li>

      <li class="menu-item">
        <a
          href="https://www.linkedin.com/in/mickael-meausoone-webdeveloper/?locale=en_US"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          LinkedIn
        </a>
      </li>

      <li>
        <TheLanguageSelector />
      </li>
    </ul>
  </nav>
</template>
