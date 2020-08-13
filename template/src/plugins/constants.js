import websiteConfig from '@/website.config'

function install (Vue) {
  Vue.prototype.$constants = websiteConfig
}

export default { install }
