
export default {
  data () {
    return {
      resizeHandler: undefined,
      resizeDebounce: null
    }
  },

  beforeMount () {
    if (!process.browser) return
    this.resizeHandler = this.resize.bind(this)
    window.addEventListener('resize', this.resizeHandler)
  },

  beforeDestroy () {
    if (!process.browser) return
    window.removeEventListener('resize', this.resizeHandler)
  },

  methods: {
    resize (interval = 100) {
      clearTimeout(this.resizeDebounce)
      this.resizeDebounce = setTimeout(() => {
        this.$options.resized && this.$options.resized.call(this, window.innerWidth)
      }, interval)
    }
  }
}
