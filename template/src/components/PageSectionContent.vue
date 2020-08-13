<template>
  <div class="page-section-content">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.page-section-content
  +margin('lg', 0)
  &:first-child
    margin-top: 0
  &:last-child
    margin-bottom: 0
</style>
