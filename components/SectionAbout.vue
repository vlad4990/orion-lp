<script setup></script>

<template>
  <div id="about" class="about-us">
    <div class="container">
      <div class="about-us__container">
        <div class="about-us__tip">{{ $t('about.tip') }}</div>
        <h3 class="about-us__title" v-html="$t('about.title')"></h3>
        <div class="about-us__table about-table">
          <div class="about-table__row">
            <div class="about-table__left">{{ $t('about.rows.one.left') }}</div>
            <div class="about-table__right">
              {{ $t('about.rows.one.right') }}
            </div>
          </div>
          <div class="about-table__row">
            <div class="about-table__left">{{ $t('about.rows.two.left') }}</div>
            <div class="about-table__right">
              {{ $t('about.rows.two.right') }}
            </div>
          </div>
          <div class="about-table__row">
            <div class="about-table__left">
              {{ $t('about.rows.three.left') }}
            </div>
            <div class="about-table__right">
              {{ $t('about.rows.three.right') }}
            </div>
          </div>
          <div class="about-table__row">
            <div class="about-table__left">
              {{ $t('about.rows.four.left') }}
            </div>
            <div class="about-table__right"></div>
          </div>
        </div>
        <div class="about-us__label" v-html="$t('about.label')"></div>
        <img class="about-us__vector" src="/images/about-vector.png" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  @apply pt-[80px] pb-[132px];
  &__container {
    @apply flex flex-col items-center;
  }
  &__tip {
    @apply subtitle text-orange uppercase pt-3 pb-1.5 px-4 box-content;
    @apply border border-solid border-orange rounded-[95px];
  }
  &__title {
    @apply uppercase text-center mt-4;
    span {
      @apply text-pink;
    }
  }
  &__table {
    @apply w-[696px] mt-8;
  }
  &__label {
    background-image: url('/images/about-label.png');
    @apply absolute w-[276px] h-[132px] -rotate-[15deg] bg-contain px-[22px];
    @apply top-[478px] left-[704px];
    @apply flex items-center justify-center;
    @apply uppercase p3 text-dark text-center;
  }
  &__vector {
    @apply w-[181px] h-[100px] absolute top-[432px] left-[99px];
  }
}
.about-table {
  &__row {
    @apply flex justify-between relative;
    @apply uppercase p3 mb-10 last:mb-0;
    &:after {
      content: '';
      @apply absolute inset-x-0 h-[1px] bg-white -bottom-2.5 last:hidden;
    }
  }
  &__left {
  }
  &__right {
  }
}

@screen mobile {
  .about-us {
    @apply pt-10 pb-[120px];
    &__tip {
      @apply caption-text;
    }
    &__title {
      @apply mt-3;
    }
    &__table {
      @apply w-full mt-6;
    }
    &__label {
      @apply w-[231px] h-[109px] left-[110px] top-[461px];
    }
    &__vector {
      display: none;
    }
  }
  .about-table {
    &__row {
      @apply mb-7;
      &:after {
        @apply -bottom-[9px];
      }
    }
  }
  .ru .about-us__label {
    @apply top-[503px];
  }
}
</style>

<style lang="scss">
.about-us__title span {
  @apply text-pink;
}
@screen mobile {
  .about-us__title br {
    display: none;
  }
}
</style>
