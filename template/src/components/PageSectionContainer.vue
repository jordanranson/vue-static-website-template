<template>
  <div class="page-section-container">
    <div class="page-section-container__inner" :style="{ position: relativeContent ? 'relative' : 'static' }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    relativeContent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.page-section-container
  width: 100%
  +padding(0, 'pageMargin')

.page-section-container__inner
  margin: 0 auto
  max-width: 1140px
  +padding(0, 'md')
</style>
