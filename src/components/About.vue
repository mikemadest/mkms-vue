<script setup lang="ts">
import { ref } from 'vue'
import { useIntl } from 'vue-intl'
import { Waypoint, type WaypointState } from 'vue-waypoint'
import getContents from '../config'

// const conversion = chunks => (<strong>{chunks}</strong>);
const { locale } = useIntl()
const { skills } = getContents(locale)
const isScrolled = ref(false)
const asideClassName = ref('')

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
      <aside id="skills" :class="asideClassName">
        <ul>
          <li v-for="[skillTitle, skillDescription] in skills">
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
