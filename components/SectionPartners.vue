<script setup></script>

<template>
  <div id="partners" class="partners">
    <div class="container">
      <div class="partners__container">
        <h2 class="partners__title">{{ $t('partners') }}</h2>
        <div class="partners__grid">
          <div class="partners__grid-item">
            <img
              class="partners-img-1"
              src="/images/partners-1.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-2"
              src="/images/partners-2.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-3"
              src="/images/partners-3.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-4"
              src="/images/partners-4.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-5"
              src="/images/partners-5.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-6"
              src="/images/partners-6.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-7"
              src="/images/partners-7.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-8"
              src="/images/partners-8.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-9"
              src="/images/partners-9.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-10"
              src="/images/partners-10.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-11"
              src="/images/partners-11.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="partners__grid-item">
            <img
              class="partners-img-12"
              src="/images/partners-12.png"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partners {
  @apply pt-32;
  @screen mobile {
    @apply pt-[84px];
  }
  &__title {
    @apply text-yellow uppercase;
  }
  &__grid {
    @apply grid grid-cols-4 gap-2 mt-[52px];
    @screen mobile {
      @apply grid-cols-2 gap-0 mt-5;
    }
  }
  &__grid-item {
    @apply flex items-center justify-center h-[144px];
    @screen mobile {
      @apply h-[88px];
    }
  }
}
.partners-img {
  &-1 {
    @apply w-[167px] h-[65px];
    @screen mobile {
      @apply w-[121px] h-[47px];
    }
  }
  &-2 {
    @apply w-[188px] h-[87px];
    @screen mobile {
      @apply w-[112px] h-[51px];
    }
  }
  &-3 {
    @apply w-[184px] h-[43px];
    @screen mobile {
      @apply w-[133px] h-[31px];
    }
  }
  &-4 {
    @apply w-[161px] h-[63px];
    @screen mobile {
      @apply w-[113px] h-[44px];
    }
  }
  &-5 {
    @apply w-[184px] h-[56px];
    @screen mobile {
      @apply w-[128px] h-[39px];
    }
  }
  &-6 {
    @apply w-[256px] h-[42px];
    @screen mobile {
      @apply w-[147px] h-[24px];
    }
  }
  &-7 {
    @apply w-[206px] h-[43px];
    @screen mobile {
      @apply w-[142px] h-[30px];
    }
  }
  &-8 {
    @apply w-[224px] h-[88px];
    @screen mobile {
      @apply w-[148px] h-[58px];
    }
  }
  &-9 {
    @apply w-[224px] h-[69px];
    @screen mobile {
      @apply w-[150px] h-[47px];
    }
  }
  &-10 {
    @apply w-[128px] h-[93px];
    @screen mobile {
      @apply w-[92px] h-[67px];
    }
  }
  &-11 {
    @apply w-[226px] h-[40px];
    @screen mobile {
      @apply w-[136px] h-[24px];
    }
  }
  &-12 {
    @apply w-[190px] h-[80px];
    @screen mobile {
      @apply w-[136px] h-[56px];
    }
  }
}
</style>
