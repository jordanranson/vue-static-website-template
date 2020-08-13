<template>
  <component :is="headingTag" class="page-section-heading">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 2
    }
  },

  computed: {
    headingTag () {
      return `h${this.level}`
    }
  }
}
</script>

<style lang="sass" scoped>
.page-section-heading
  color: $titleColor
  font-family: $titleFont
  font-weight: $titleFontWeight
  font-size: $titleFontSize
  line-height: 1.1
  +margin(0, 0, 'md')

h1.section-heading
  font-size: $heroTitleFontSize
</style>
