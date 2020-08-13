<template>
  <div class="page-loader">
    <transition name="tsx_pop">
      <div v-if="isLoading" class="page-loader__inner">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    width () {
      return '50%'
    },

    ...mapState([
      'isLoading'
    ])
  }
}
</script>

<style lang="sass" scoped>
.page-loader
  display: flex
  overflow: hidden
  position: fixed
  z-index: $zLevel3
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  pointer-events: none

.page-loader__inner
  margin: auto
</style>
