<script setup lang="ts">
import { ref } from 'vue';
import { useIntl } from 'vue-intl';
import { Waypoint, type WaypointState } from 'vue-waypoint';
import getContents from '../config';

const { locale } = useIntl();
const { skills } = getContents(locale);
const isScrolled = ref(false);

function onChange(waypointState: WaypointState) {
  if (waypointState.going === 'IN') {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
}
</script>

<template>
  <section id="about">
    <p class="about-content">
      {{
        $formatMessage(
          { id: 'mkms.nav.about.content' },
          {
            b: (chunks) => chunks
          }
        )
      }}
    </p>
    <Waypoint @change="onChange">
      <aside
        id="skills"
        :class="{ scrolled: isScrolled }"
      >
        <ul>
          <li
            v-for="[skillTitle, skillDescription] in skills"
            :key="skillTitle"
          >
            <h4>
              <font-awesome-icon icon="fa-solid fa-square" />
              {{ skillTitle }}
            </h4>
            <p>{{ skillDescription }}</p>
          </li>
        </ul>
      </aside>
    </Waypoint>
  </section>
</template>
