import './assets/main.css';
import './assets/media-queries.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createIntl } from 'vue-intl';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faLaptopCode,
  faLanguage,
  faSquare,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import getTranslations from './lang';

/* add icons to the library */
library.add(faLinkedin, faAddressCard, faLaptopCode, faLanguage, faSquare, faCheck);

const languageChoice = window.location.href.includes('/fr') ? 'fr' : 'en';

createApp(App)
  .use(
    createIntl({
      locale: languageChoice,
      defaultLocale: 'en',
      messages: getTranslations(languageChoice)
    })
  )
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
