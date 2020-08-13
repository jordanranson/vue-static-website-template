<template>
  <div class="page-loading-bar">
    <div class="page-loading-bar__inner" :style="{ width }" />
  </div>
</template>

<script>
export default {
  computed: {
    width () {
      return '50%'
    }
  }
}
</script>

<style lang="sass" scoped>
.page-loading-bar
  position: fixed
  z-index: $zLevel3
  top: 0
  left: 0
  right: 0
  pointer-events: none

.page-loading-bar__inner
  position: absolute
  top: 0
  left: 0
  bottom: 0
  height: $pageLoadingBarHeight
  background: $pageLoadingBarColor
</style>
