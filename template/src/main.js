import Vue from 'vue'
import meta from 'vue-meta'
import anime from '@/plugins/anime'
import constants from '@/plugins/constants'
import cookies from '@/plugins/cookies'
import loading from '@/plugins/loading'
import locale from '@/plugins/locale'
import uid from '@/plugins/uid'
import viewport from '@/plugins/viewport'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import componentsFromDir from '@/lib/componentsFromDir'

Vue.config.productionTip = false
Vue.use(anime)
Vue.use(constants)
Vue.use(cookies)
Vue.use(loading)
Vue.use(locale)
Vue.use(uid)
Vue.use(viewport)
Vue.use(meta)

componentsFromDir(
  require.context('./components', true, /[A-Z]\w+\.(vue)$/),
  (a, b) => Vue.component(a, b)
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
