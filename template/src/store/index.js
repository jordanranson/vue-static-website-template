import Vue from 'vue'
import Vuex from 'vuex'
import { getLangCookie, getPreferredLang, setLangCookie } from '@/lib/lang'
import { checkBreakpoint } from '@/plugins/viewport'
import websiteConfig from '@/website.config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerKind: 'static', // 'static', 'fixed', 'float'
    isMobile: true,
    isLoading: false,
    lang: getLangCookie() || getPreferredLang() || websiteConfig.lang.default,
    locale: {}
  },

  mutations: {
    SET_HEADER_KIND (state, kind) {
      state.headerKind = kind
    },

    SET_MOBILE (state, isMobile) {
      state.isMobile = isMobile
    },

    SET_LOADING (state, isLoading) {
      state.isLoading = isLoading
    },

    SET_LANG (state, lang) {
      state.lang = lang
    },

    SET_LOCALE (state, locale) {
      Vue.set(state, 'locale', locale)
    }
  },

  actions: {
    async setHeaderKind ({ commit }, kind) {
      commit('SET_HEADER_KIND', kind)
    },

    async updateViewport ({ commit }) {
      commit('SET_MOBILE', checkBreakpoint('<=tablet'))
    },

    async setLoading ({ commit }, isLoading) {
      commit('SET_LOADING', isLoading)
    },

    async setLanguage ({ commit }, lang) {
      try {
        const result = await fetch(`/locale/${lang}.json`)
        const locale = await result.json()
        setLangCookie(lang)
        commit('SET_LANG', lang)
        commit('SET_LOCALE', locale)
      } catch (err) {
        console.warn(err)
      }
    }
  }
})
