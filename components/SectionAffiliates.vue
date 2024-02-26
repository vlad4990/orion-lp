<script setup></script>

<template>
  <div id="affiliates" class="affiliates">
    <div class="container">
      <div class="affiliates__container">
        <div class="affiliates__title">{{ $t('affiliates.title') }}</div>
        <img
          loading="lazy"
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
        <a
          href="https://dashboard.orionpartners.pro/signup/affiliate"
          target="_blank"
          class="affiliates__link"
          >{{ $t('affiliates.link') }}</a
        >
        <div class="affiliates__description">
          {{ $t('affiliates.description') }}
        </div>
        <img
          loading="lazy"
          src="/images/affiliates-vector.png"
          alt=""
          class="affiliates__vector"
        />
      </div>
    </div>
    <TheTicker class="affiliates__ticker" pink />
  </div>
</template>

<style scoped lang="scss">
.affiliates {
  @apply pt-[128px];
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
  &__vector {
    @apply w-[76px] h-[43px];
    @apply absolute top-[647px] left-[341px];
  }
  &__link {
    @apply w-[312px] h-[312px];
    @apply absolute top-[404px] left-[1088px] bg-contain text-transparent;
    background-image: url('/images/become-a-partner-eng.png');
    transition: all 0.3s ease-in-out;
    &:hover {
      @apply scale-105;
      @screen mobile {
        @apply scale-100;
      }
    }
  }
  &__ticker {
    margin-top: 104px;
  }
  &__description {
    @apply hidden;
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
  @screen mobile {
    @apply grid-cols-1 gap-y-5;
    &__item {
      @apply pt-[14px];
      &:not(:has(.features-grid__number)) {
        display: none;
      }
    }
    &__number {
      @apply h-4 min-w-4 w-4 text-xs;
      span {
        margin-bottom: -2px;
      }
    }
    &__text {
      @apply mt-1.5;
    }
  }
}

.ru {
  .affiliates {
    &__star {
      @apply left-[1205px] top-[-38px];
    }
    &__link {
      background-image: url('/images/become-a-partner-rus.png');
    }
    &__vector {
      top: 685px;
    }
  }
  @screen mobile {
    .affiliates {
      &__star {
        @apply left-[296px] top-[-19px];
      }
      &__link {
        background-image: none;
      }
      &__vector {
        display: none;
      }
    }
  }
}

@screen mobile {
  .affiliates {
    @apply pt-[56px];
    &__grid {
      @apply mt-5;
    }

    &__star {
      transform: scale(-1, 1);
      @apply w-[25px] h-[29px] left-[264px] -top-[15px];
    }
    &__vector {
      display: none;
    }
    &__link {
      @apply mt-8 relative top-auto left-auto block w-full h-[56px] bg-pink rounded-[56px] text-dark flex justify-center items-center button-text uppercase pt-1;
      background-image: none;
      &:after {
        @apply absolute inset-1 rounded-[25px] opacity-30;
        content: '';
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='black' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
      }
      svg {
        display: none;
      }
    }
    &__ticker {
      margin-top: 64px;
    }
    &__description {
      @apply block caption-text uppercase w-[232px] text-center mx-auto mt-3;
    }
  }
}
</style>
