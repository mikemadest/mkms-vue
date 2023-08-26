<script setup lang="ts">
import { ref } from 'vue';
import { Waypoint, type WaypointState } from 'vue-waypoint';
import BaseIllustration from './BaseIllustration.vue';
import BaseTagsList from './BaseTagsList.vue';
import BasePointsList from './BasePointsList.vue';

const { points, isSmall, image, tags } = defineProps({
  title: String,
  imageAlt: String,
  image: String,
  href: String,
  description: String,
  tags: String,
  points: String,
  buttonLabel: String,
  isSmall: Boolean
});

const isScrolled = ref(false);

function onChange(waypointState: WaypointState) {
  isScrolled.value = waypointState.going === 'IN';
}
</script>

<template>
  <article :class="{ scrolled: isScrolled }">
    <BaseIllustration
      :is-small="isSmall"
      :image="image"
      :image-alt="imageAlt"
      :href="href"
    />

    <div class="content">
      <Waypoint @change="onChange">
        <h3>
          <font-awesome-icon icon="fa-solid fa-square" />
          {{ title }}
        </h3>
      </Waypoint>

      <p>
        {{ description }}
        <br />
        <BaseTagsList :tags="tags" />
      </p>

      <BasePointsList :points="points" />
      <a
        v-if="href"
        :href="href"
        target="_blank"
        class="see-more"
      >
        {{ buttonLabel }}
      </a>
    </div>
  </article>
</template>
