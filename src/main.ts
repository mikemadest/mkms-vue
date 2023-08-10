import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createIntl } from 'vue-intl'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {
  faAddressCard,
  faLaptopCode,
  faLanguage,
  faSquare
} from '@fortawesome/free-solid-svg-icons'
import getTranslations from './lang'

/* add icons to the library */
// library.add(faLinkedin)
library.add(faLinkedin, faAddressCard, faLaptopCode, faLanguage, faSquare)

const languageChoice = window.location.href.includes('/fr') ? 'fr' : 'en'

createApp(App)
  .use(
    createIntl({
      locale: languageChoice,
      defaultLocale: 'en',
      messages: getTranslations('en')
    })
  )
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
