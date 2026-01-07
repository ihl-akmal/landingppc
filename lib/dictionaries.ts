
import type { Locale } from '@/i18n-config'

type Page = 'home' | 'program'

export async function getDictionary(
  locale: Locale,
  page: Page
) {
  const common = await import(`@/locales/${locale}/common.json`)
  const pageDict = await import(`@/locales/${locale}/${page}.json`)

  return {
    ...common.default,
    ...pageDict.default,
  }
}
