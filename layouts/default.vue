<template>
  <div class="default-layout">
    <TheHeader />
    <div class="default-layout__content">
      <slot></slot>
    </div>
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
  }
}
</style>
<script setup lang="ts"></script>
