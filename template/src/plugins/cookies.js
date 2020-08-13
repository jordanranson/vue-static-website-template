import Cookies from 'js-cookie'

function install (Vue) {
  Vue.prototype.$cookies = Cookies
}

export default { install }
