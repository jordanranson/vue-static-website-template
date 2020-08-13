<template>
  <header :class="{ 'page-header': true, [`is-kind-${kind}`]: true }">
    <slot />
  </header>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: 'static' // 'static', 'fixed', 'float'
    }
  },

  created () {
    this.$store.dispatch('setHeaderKind', this.$props.kind)
  }
}
</script>

<style lang="sass" scoped>
.page-header
  position: relative
  top: 0
  left: 0
  width: 100%
  height: $pageHeaderHeight
  +isDesktop
    height: $pageHeaderHeightWs
  &.is-kind-float
    z-index: $zLevel1
    position: absolute
  &.is-kind-fixed
    z-index: $zLevel1
    position: fixed
</style>
