<script setup>
defineProps({
  pink: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a
    target="_blank"
    href="https://dashboard.orionpartners.pro/signup/affiliate"
    class="items-wrap"
    :class="{ pink }"
  >
    <div class="items marquee">
      <template v-for="key in 10" :key="'first-' + key">
        <div class="item">Register now!</div>
        <div class="item item--dot"></div>
      </template>
    </div>
    <div aria-hidden="true" class="items marquee">
      <template v-for="key in 10" :key="'second-' + key">
        <div class="item">Register now!</div>
        <div class="item item--dot"></div>
      </template>
    </div>
  </a>
</template>

<style scoped lang="scss">
.items-wrap {
  @apply relative flex overflow-hidden select-none gap-2 bg-yellow h-10 rounded-[110px] mx-2 subtitle;
  &.pink {
    @apply bg-pink;
  }
}
.items {
  @apply shrink-0 flex gap-10 justify-around items-center min-w-full;
  counter-reset: item;
}
.item {
  @apply text-dark uppercase relative flex justify-center items-center;
  flex: 0 0 auto;
  counter-increment: item;
  transition: all 0.1s ease-in-out;
  &--dot {
    @apply w-1 h-1 bg-dark rounded;
  }
}
.item:hover {
  transform: scale(1.2);
}

.item:before {
  @apply w-1 h-1 absolute bottom-1/2;
  content: '';
  bottom: 50%;
}

.marquee {
  animation: scroll 20s linear infinite;
}
.reverce {
  animation-direction: reverse;
}
.items-wrap:hover .marquee {
  animation-play-state: paused;
}

@screen mobile {
  .items-wrap {
    @apply h-8 caption-text;
  }
  .items {
    @apply gap-2;
  }
  .item {
    &:not(.item--dot) {
      @apply mt-1;
    }
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 40px));
  }
}
</style>
