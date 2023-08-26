<script setup lang="ts">
import { ref } from 'vue';
import { Waypoint, type WaypointState } from 'vue-waypoint';
import tagsLinks from '../helpers';

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

// seems necessary to make the class name reactive, otherwise it's not updating
const isScrolled = ref(false);

function onChange(waypointState: WaypointState) {
  isScrolled.value = waypointState.going === 'IN';
}

const styles = isSmall ? { backgroundImage: `url(${image})` } : {};
const pointsList = points?.split('|') || null;
const tagList = tags?.split(' ');
</script>

<template>
  <article :class="{ scrolled: isScrolled }">
    <div class="illustration" :style="styles">
      <a v-if="href" :href="href" target="_blank">
        <img :src="image" :alt="imageAlt" />
      </a>
      <img v-else :src="image" :alt="imageAlt" />
    </div>

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
        <span class="highlight-features">
          <template v-for="tag in tagList" :key="tag">
            <a v-if="tagsLinks[tag]" :href="tagsLinks[tag]">{{ tag }}</a>
            <span v-else>{{ tag }}</span>
          </template>
        </span>
      </p>

      <ul v-if="points?.length">
        <li v-for="point in pointsList">
          <font-awesome-icon icon="fa-solid fa-check" />
          {{ point }}
        </li>
      </ul>
      <a v-if="href" :href="href" target="_blank" class="see-more"> {{ buttonLabel }} </a>
    </div>
  </article>
</template>
