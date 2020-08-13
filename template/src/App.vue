<template>
  <div id="app">
    <nav>
      <page-header kind="static">
        <page-link to="/">Home</page-link>
        <page-link to="/about">About</page-link>
      </page-header>
    </nav>
    <main :class="{ [`has-header-${$store.state.headerKind}`]: true }">
      <transition name="tsx__fade" mode="out-in" appear>
        <router-view />
      </transition>
      <page-loader>
        <p>Loading...</p>
      </page-loader>
    </main>
  </div>
</template>

<script>
import resized from '@/mixins/resized'

let loading
const loadingRoutes = {}

export default {
  resized () {
    this.$store.dispatch('updateViewport')
  },

  mixins: [
    resized
  ],

  mounted () {
    this.$loading.finish(loading)
  },

  created () {
    loading = this.$loading.start()

    this.$router.beforeEach((to, from, next) => {
      loadingRoutes[to.name] = this.$loading.start()
      next()
    })

    this.$router.afterEach((to, from) => {
      this.$loading.finish(loadingRoutes[to.name])
      delete loadingRoutes[to.name]
    })

    this.resize(0)
    this.$store.dispatch('setLanguage', this.$store.state.lang)
  }
}
</script>

<style lang="sass">
@import "styles/reset.sass"
@import "styles/app.sass"
@import "styles/transitions.sass"

#app
  main
    &.has-header-fixed,
    &.has-header-float
      margin-top: $pageHeaderHeight
      +isDesktop
        margin-top: $pageHeaderHeightWs
</style>
