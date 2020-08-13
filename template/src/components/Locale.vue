<template>
  <span :lang="lang" v-html="text" />
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      text: this.$locale(this.$props.path)
    }
  },

  computed: {
    ...mapState([
      'lang'
    ])
  },

  watch: {
    lang () {
      this.text = this.$locale(this.$props.path)
    }
  }
}
</script>
