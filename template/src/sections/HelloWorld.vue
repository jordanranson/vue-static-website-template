<template>
  <page-section class="hello-world">
      <page-section-container>
        <page-section-content>
          <page-section-heading :level="1">
            <slot name="title" />
          </page-section-heading>
          <p>
            <slot name="description" />
          </p>
        </page-section-content>
        <page-section-content>
          <slot name="content" />
        </page-section-content>
      </page-section-container>
    </page-section>
</template>
