import store from '@/store'
import short from 'short-uuid'

class Loading {
  constructor () {
    this.loading = []
  }

  start () {
    if (this.loading.length === 0) {
      store.dispatch('setLoading', true)
    }

    const loadingInstance = { id: short.generate() }
    this.loading.push(loadingInstance)

    return loadingInstance
  }

  finish (loadingInstance) {
    const index = this.loading.indexOf(loadingInstance)
    if (index >= 0) this.loading.splice(index, 1)

    if (this.loading.length === 0) {
      store.dispatch('setLoading', false)
      return false // still loading
    }

    return true // still loading
  }
}

export const loading = new Loading()

function install (Vue) {
  Vue.prototype.$loading = loading
}

export default { install }
