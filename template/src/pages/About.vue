<template>
  <page class="about-page">
    <hello-world>
      <template v-slot:title><locale path="pages.about.title" /></template>
      <template v-slot:description>Lorem ipsum dolor sit amet.</template>
      <template v-slot:content>Lorem ipsum dolor sit amet.</template>
    </hello-world>
  </page>
</template>

<script>
import page from '@/mixins/page'
import HelloWorld from '@/sections/HelloWorld'

export default {
  meta () {
    return {
      title: this.$locale('pages.about.title')
    }
  },

  mixins: [
    page
  ],

  components: {
    HelloWorld
  }
}
</script>

<style lang="sass" scoped>
.about-page
</style>
