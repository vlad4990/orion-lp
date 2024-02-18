<script setup>
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="section-start">
    <div class="container">
      <img class="section-start__star-1" src="/images/star-blue-big.svg" />
      <div class="p1 section-start__label" v-html="$t('start.label')"></div>
      <div class="section-start__title-top h1-huge">orion</div>
      <div class="section-start__title-bottom h1-huge">
        partners
        <div class="section-start__title-bottom--smile"></div>
        <div class="section-start__title-bottom--crown"></div>
      </div>

      <p
        class="section-start__description p1"
        v-html="$t('start.description')"
      ></p>
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
    &--crown {
      position: absolute;
      top: -62px;
      right: 135px;
      width: 93px;
      height: 90px;
      background-image: url('/images/crown.svg');
      content: '';
    }
    &--smile {
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
    width: 1205px;
    height: 860px;
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

@screen mobile {
  .section-start {
    &__title {
      &-top {
        padding-top: 63px;
      }
      &-bottom {
        @apply ml-0 w-fit;
        &--smile {
          @apply h-[52px] w-[52px] top-auto bottom-[57px] left-[192px] bg-cover -z-[1];
        }
        &--crown {
          background-image: url('/images/crown-mobile.svg');
          @apply w-[27px] h-[26px] bg-cover right-[32px] top-[-19px];
        }
      }
    }
    &__label {
      @apply top-[244px] rotate-[15deg] top-[263px] left-[192px];
    }
    &__description {
      @apply text-left mt-[7px];
    }
    &__star-1 {
      @apply min-w-[535px] h-[386px] bg-center left-1/2 -translate-x-1/2 -top-[60px] -z-[2];
    }
    &__ticker {
      margin-top: 150px;
    }
  }

  .star {
    &-1 {
      display: none;
    }
    &-2 {
      @apply w-[34px] h-[42px] top-8 right-auto left-[263px];
    }
    &-3 {
      @apply w-5 h-[26px] top-[352px] left-[36px];
    }
  }
  .dot {
    @apply w-1 h-1;
    &-1 {
      display: none;
    }
    &-2 {
      top: 20px;
      left: 109px;
    }
    &-3 {
      top: 307px;
      left: 152px;
    }
  }
}
</style>

<style lang="scss">
@screen mobile {
  .section-start {
    &__description {
      br {
        display: none;
      }
    }
  }
}
</style>
