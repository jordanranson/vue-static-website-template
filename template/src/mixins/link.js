export default {
  props: {
    to: {
      type: [String, Object, undefined],
      default: undefined
    },

    href: {
      type: [String, undefined],
      default: undefined
    },

    target: {
      type: [String, undefined],
      default: ''
    }
  },

  computed: {
    tagName () {
      return this.href ? 'a' : 'router-link'
    }
  }
}
