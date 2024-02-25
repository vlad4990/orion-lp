<script setup></script>

<template>
  <div id="advertisers" class="advertisers">
    <div class="container">
      <div class="advertisers__container">
        <div class="advertisers__title">{{ $t('advertisers.title') }}</div>
        <img
          loading="lazy"
          class="advertisers__crown"
          src="/images/crown.svg"
          alt=""
        />
        <img
          loading="lazy"
          class="advertisers__star"
          src="/images/4-corner-double-white-star.svg"
          alt=""
        />
        <div class="advertisers__grid features-grid">
          <div class="features-grid__item">
            <div class="features-grid__number"><span>1</span></div>
            <div class="features-grid__text">
              {{ $t('advertisers.items.1') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>2</span></div>
            <div class="features-grid__text">
              {{ $t('advertisers.items.2') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>3</span></div>
            <div class="features-grid__text">
              {{ $t('advertisers.items.3') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>4</span></div>
            <div class="features-grid__text">
              {{ $t('advertisers.items.4') }}
              <div class="features-grid__text--additional">
                {{ $t('advertisers.items.4-additional') }}
              </div>
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>5</span></div>
            <div class="features-grid__text">
              {{ $t('advertisers.items.5') }}
            </div>
          </div>
          <div class="features-grid__item">
            <div class="features-grid__number"><span>6</span></div>
            <div class="features-grid__text">
              {{ $t('advertisers.items.6') }}
            </div>
          </div>
        </div>
        <a href="/" class="advertisers__link">{{ $t('advertisers.link') }}</a>
        <div class="advertisers__description">
          {{ $t('advertisers.description') }}
        </div>
      </div>
    </div>
    <TheTicker class="advertisers__ticker" pink />
  </div>
</template>

<style scoped lang="scss">
.advertisers {
  @apply pt-[124px];
  &__title {
    @apply h1 uppercase;
  }
  &__crown {
    @apply w-[65px] h-[62px] absolute left-[1232px] -top-[52px];
  }
  &__star {
    transform: scale(-1, 1);
    @apply w-[48px] h-[55px] absolute left-[1000px] top-[665px];
  }
  &__grid {
    @apply mt-9;
  }
  &__vector {
    @apply w-[76px] h-[43px];
    @apply absolute top-[647px] left-[341px];
  }
  &__link {
    @apply w-[312px] h-[312px];
    @apply absolute top-[404px] left-[708px] bg-contain text-transparent;
    background-image: url('/images/become-an-advertiser-eng.png');
  }
  &__ticker {
    margin-top: 300px;
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
    @apply p2 uppercase mt-2 relative;
    &--additional {
      @apply absolute p3-text mt-1;
    }
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
      &--additional {
        @apply relative p3 mt-1;
      }
    }
  }
}

@screen mobile {
  .advertisers {
    @apply pt-[72px];
    &__grid {
      @apply mt-5;
    }
    &__crown {
      @apply hidden;
    }
    &__star {
      display: none;
    }
    &__vector {
      display: none;
    }
    &__link {
      @apply mt-8 relative top-auto left-auto block w-full h-[56px] bg-blue rounded-[56px] text-white flex justify-center items-center button-text uppercase pt-1;
      background-image: none;
      &:after {
        @apply absolute inset-1 rounded-[25px] opacity-30;
        content: '';
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='white' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
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
