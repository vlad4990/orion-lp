<script setup></script>

<template>
  <div class="section-start">
    <div class="container">
      <NuxtImg
        class="section-start__star-1"
        width="1205"
        height="860"
        src="/images/star-blue-big.svg"
      />
      <div class="section-start__label p1" v-html="$t('start.label')"></div>
      <div class="section-start__title-top h1-huge">orion</div>
      <div class="section-start__title-bottom h1-huge">partners</div>
      <p class="section-start__description p1">
        Star Navigation from Direct Offers<br />o Partners Growth
      </p>
      <img class="absolute star-1" src="/images/4-corner-white-star.png" />
      <img class="absolute star-2" src="/images/4-corner-white-star.png" />
      <img class="absolute star-3" src="/images/4-corner-white-star.png" />
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
    </div>
    <TheTicker class="section-start__ticker" />
  </div>
</template>

<style lang="scss" scoped>
.section-start {
  &__label {
    transform: rotate(-12.39deg);
    z-index: 3;
    top: 34px;
    left: 90px;
    &:after {
      content: '';
    }
    @apply uppercase pb-3 pt-5 px-4 bg-pink text-dark text-center rounded-2xl absolute;
  }
  &__title-top,
  &__title-bottom {
    @apply uppercase;
  }
  &__title-top {
    position: relative;
    z-index: 2;
    padding-top: 92px;
  }
  &__title-bottom {
    margin-left: 184px;
    @apply relative;
    &:after {
      position: absolute;
      top: -62px;
      right: 135px;
      width: 93px;
      height: 90px;
      background-image: url('/images/crown.svg');
      content: '';
    }
    &:before {
      position: absolute;
      top: -62px;
      left: 45.2%;
      width: 136px;
      height: 136px;
      background-image: url('/images/face-happy-green.svg');
      content: '';
    }
  }
  &__description {
    position: relative;

    @apply uppercase text-right;
  }
  &__star-1 {
    position: absolute;
    left: 6px;
    top: -80px;
  }
  &__ticker {
    margin-top: 100px;
  }
}

.star {
  &-1 {
    top: 40px;
    right: 607px;
    width: 20px;
    height: 24px;
  }
  &-2 {
    top: 267px;
    right: 431px;
    width: 32px;
    height: 40px;
  }
  &-3 {
    top: 516px;
    left: 108px;
    width: 56px;
    height: 70px;
  }
}

.dot {
  @apply w-2 h-2 bg-white rounded-xl absolute;
  &-1 {
    top: 0;
    right: 427px;
  }
  &-2 {
    top: 340px;
    left: 168px;
  }
  &-3 {
    top: 676px;
    left: 396px;
  }
}
</style>
