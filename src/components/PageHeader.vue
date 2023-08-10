<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useIntl } from 'vue-intl'
import getContents from '../config'
import LanguageSelector from './LanguageSelector.vue'

const { locale } = useIntl()
const { menu } = getContents(locale)

const isScrolled = ref(false)
const headerClassName = ref('notscrolled')

const onScroll = async () => {
  console.log('window.scrollY = ', window.scrollY)
  if (window.scrollY > 40) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
  // await nextTick()
  headerClassName.value = isScrolled.value ? 'scrolled' : 'notscrolled'
  console.log('isScrolled.value = ', isScrolled.value)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

// const headerClassName = isScrolled.value ? 'scrolled' : 'notscrolled'
console.log('headerClassName = ', headerClassName)
</script>

<template>
  <header :class="headerClassName">
    <a href="#" class="basename"> <strong>MkMs</strong> - Mickaël MEAUSOONE </a>

    <nav>
      <ul>
        <li v-for="item in menu" class="menu-item">
          <a href="{{item.link}}">
            <font-awesome-icon :icon="['fa-solid', item.icon]" />
            {{ item.label }}</a
          >
        </li>

        <li className="menu-item">
          <a
            href="https://www.linkedin.com/in/mickael-meausoone-webdeveloper/?locale=en_US"
            target="_blank"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            LinkedIn
          </a>
        </li>

        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  </header>
</template>
