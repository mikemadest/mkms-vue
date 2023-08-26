<script setup lang="ts"></script>

<template>
  <footer v-once>
    <p>
      <strong>MkMs</strong> - Mickaël MEAUSOONE -
      {{ $formatMessage({ id: 'mkms.position' }) }}
      -
      <a
        href="https://www.linkedin.com/in/mickael-meausoone-webdeveloper/?locale=en_US"
        target="_blank"
        ><font-awesome-icon icon="fa-brands fa-linkedin" />
      </a>
    </p>
  </footer>
</template>
