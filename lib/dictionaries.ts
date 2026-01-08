
import type { Locale } from '@/i18n-config'

const dictionaries = {
  id: async () => {
    const [common, home, programDetails] = await Promise.all([
      import('@/locales/id/common.json').then((module) => module.default),
      import('@/locales/id/home.json').then((module) => module.default),
      import('@/locales/id/program-details.json').then((module) => module.default),
    ])
    return { ...common, ...home, programDetails }
  },
  en: async () => {
    const [common, home, programDetails] = await Promise.all([
      import('@/locales/en/common.json').then((module) => module.default),
      import('@/locales/en/home.json').then((module) => module.default),
      import('@/locales/en/program-details.json').then((module) => module.default),
    ])
    return { ...common, ...home, programDetails }
  },
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
