const short = require('short-uuid')

function install (Vue) {
  Vue.prototype.$newUid = short.generate()
}

export default { install }
