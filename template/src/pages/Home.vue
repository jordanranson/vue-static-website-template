<template>
  <page class="home-page">
    <hello-world>
      <template v-slot:title><locale path="pages.home.title" /></template>
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
      title: this.$locale('pages.home.title')
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
.home-page
</style>
