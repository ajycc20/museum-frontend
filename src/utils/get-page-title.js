import defaultSettings from '@/settings'

const title = defaultSettings.title || 'museum-frontend'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
