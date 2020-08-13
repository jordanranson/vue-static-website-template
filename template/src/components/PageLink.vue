<template>
  <component :is="tagName" :to="to" :href="href" :target="target" class="page-link">
    <slot />
  </component>
</template>

<script>
import link from '@/mixins/link'

export default {
  mixins: [
    link
  ]
}
</script>

<style lang="sass" scoped>
.page-link
</style>
