import configFr from './config.fr'
import configEn from './config.en'
import type { ConfigType } from './AllTypes'

function getContents(locale: string): ConfigType {
  switch (locale) {
    case 'en': {
      return configEn as ConfigType
    }
    case 'fr': {
      return configFr as ConfigType
    }
    default: {
      return configEn
    }
  }
}

export default getContents
