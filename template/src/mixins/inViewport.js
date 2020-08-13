
import inViewport from 'vue-in-viewport-mixin'

export default {
  mixins: [
    inViewport
  ],

  async mounted () {
    if (process.browser) {
      const {
        beforeVisible,
        becameVisible
      } = this.$options

      if (beforeVisible) {
        await beforeVisible.call(this)
      }
      if (becameVisible && this['inViewport.now']) {
        await becameVisible.call(this)
      }
    }
  },

  watch: {
    async 'inViewport.now' (visible) {
      if (process.browser) {
        const {
          beforeVisible,
          becameVisible
        } = this.$options

        if (visible) {
          if (beforeVisible) {
            await beforeVisible.call(this)
          }
          if (becameVisible) {
            await becameVisible.call(this)
          }
        } else if (beforeVisible) {
          await beforeVisible.call(this)
        }
      }
    }
  }
}
