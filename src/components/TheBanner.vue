<template>
  <section
    id="big-banner"
    v-once
  >
    <div class="banner-content">
      <div>
        <h1>
          {{ $formatMessage({ id: 'mkms.bigbanner.title' }) }}
        </h1>
        <p>
          {{ $formatMessage({ id: 'mkms.bigbanner.content' }) }}
        </p>
      </div>
    </div>
  </section>
</template>
