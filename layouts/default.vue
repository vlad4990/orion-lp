<template>
  <div class="default-layout" :class="locale">
    <TheHeader />
    <div class="default-layout__content">
      <slot></slot>
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.default-layout__content {
  transition: opacity 0.3s ease-in-out;
}
.default-layout:has(.header--opened) {
  .default-layout__content {
    opacity: 0.7;
  }
}
@screen mobile {
  .default-layout {
    overflow: hidden;
    &__content {
      padding-top: 56px;
    }
  }
}
</style>
<script setup>
const { locale } = useI18n();
</script>
