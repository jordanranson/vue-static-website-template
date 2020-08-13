<template>
  <component :is="tagName" :to="to" :href="href" :target="target" :type="type" class="page-link">
    <slot />
  </component>
</template>

<script>
import link from '@/mixins/link'

export default {
  mixins: [
    link
  ],

  computed: {
    tagName () {
      return this.href
        ? 'a'
        : this.to
          ? 'router-link'
          : 'button'
    },

    type () {
      return (!this.to && !this.href) ? 'button' : undefined
    }
  }
}
</script>

<style lang="sass" scoped>
.page-button
</style>
