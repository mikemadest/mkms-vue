<script setup lang="ts">
import { ref } from 'vue'
import { Waypoint, type WaypointState } from 'vue-waypoint'
import tagsLinks from '../helpers'

const { points, isSmall, image, tags } = defineProps([
  'title',
  'imageAlt',
  'image',
  'href',
  'description',
  'tags',
  'points',
  'buttonLabel',
  'isSmall'
])

const isScrolled = ref(false)
const asideClassName = ref('')

const styles = isSmall ? { backgroundImage: `url(${image})` } : {}
const pointsList = points?.split('|') || null
const tagList = tags.split(' ')

function onChange(waypointState: WaypointState) {
  if (waypointState.going === 'IN') {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
  asideClassName.value = isScrolled.value ? 'scrolled' : ''
}
</script>

<template>
  <article :class="asideClassName">
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
          <template v-for="tag in tagList">
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
