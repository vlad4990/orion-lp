<script setup></script>

<template>
  <div class="affiliates">
    <div class="container">
      <div class="affiliates__container">
        <div class="affiliates__title">{{ $t('affiliates.title') }}</div>
        <img
          class="affiliates__star"
          src="/images/4-corner-double-white-star.svg"
          alt=""
        />
        <div class="affiliates__grid features-grid">
          <div class="features-grid__item">
            <div class="features-grid__number"><span>1</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.1') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>2</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.2') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>3</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.3') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>4</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.4') }}
            </div>
          </div>
          <div class="features-grid__item"></div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>5</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.5') }}
            </div>
          </div>
          <div class="features-grid__item"></div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>6</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.6') }}
            </div>
          </div>
          <div class="features-grid__item"></div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>7</span></div>
            <div class="features-grid__text">
              {{ $t('affiliates.items.7') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheTicker class="affiliates__ticker" pink />
  </div>
</template>

<style scoped lang="scss">
.affiliates {
  &__container {
    @apply mt-[260px];
  }
  &__title {
    @apply h1 uppercase;
  }
  &__star {
    transform: scale(-1, 1);
    @apply w-[48px] h-[55px] absolute left-[1087px] top-[49px];
  }
  &__grid {
    @apply mt-9;
    .features-grid__item {
      &:nth-child(8) {
        @apply col-start-1;
      }
    }
  }
  &__ticker {
    margin-top: 104px;
  }
}

.features-grid {
  @apply grid grid-cols-4 gap-x-2 gap-y-6;
  &__item {
    @apply pt-4 relative;

    &:before {
      content: '';
      @apply absolute inset-x-0 top-0 h-[1px] bg-white;
    }
  }
  &__number {
    @apply text-base min-w-6 w-6 h-6 border border-solid border-white rounded-2xl flex items-center justify-center;
    span {
      margin-bottom: -3px;
    }
  }
  &__text {
    @apply p2 uppercase mt-2;
  }
}
</style>
