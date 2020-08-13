import store from '@/store'
import getItem from 'lodash/get'

function install (Vue) {
  Vue.prototype.$locale = path => getItem(store.state.locale, path)
}

export default { install }
