import defaultSettings from '@/settings'
import i18n from '@/lang'

const title = 'document'

export default function getPageTitle(key) {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName}`
  }
  return `${title}`
}
