import Cookies from 'js-cookie'
import websiteConfig from '@/website.config'

export const getPreferredLang = () => {
  const { supported } = websiteConfig.lang
  const preferred = navigator.languages

  for (const lang of preferred) {
    if (supported.includes(lang)) return lang
  }

  return undefined
}

export const getLangCookie = () => Cookies.get('lang')

export const setLangCookie = lang => Cookies.set('lang', lang)
