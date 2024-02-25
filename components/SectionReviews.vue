<script setup></script>

<template>
  <div id="reviews" class="reviews">
    <div class="container">
      <div class="reviews__container">
        <div class="reviews__title">{{ $t('reviews.title') }}</div>
        <div class="reviews__star-container">
          <img
            loading="lazy"
            class="reviews__telescope"
            src="/images/telescope.png"
            alt=""
          />
          <img
            loading="lazy"
            class="reviews__star-img"
            src="/images/star-blue-big--reviews.svg"
            alt=""
          />
        </div>

        <h3 class="reviews__description">{{ $t('reviews.description') }}</h3>
        <div class="reviews__carousel carousel">
          <v-carousel height="100%" class="carousel__component" hide-delimiters>
            <template v-slot:prev="{ props }">
              <img
                @click="props.onClick"
                class="carousel__arrow carousel__arrow--prev"
                loading="lazy"
                src="/images/arrow.png"
                alt=""
              />
            </template>
            <template v-slot:next="{ props }">
              <img
                @click="props.onClick"
                class="carousel__arrow carousel__arrow--next"
                loading="lazy"
                src="/images/arrow.png"
                alt=""
              />
            </template>
            <v-carousel-item>
              <div class="carousel__item carousel-slide">
                <div class="carousel-slide__text">
                  {{ $t('reviews.items.1.text') }}
                </div>
                <div
                  class="carousel-slide__name"
                  v-html="$t('reviews.items.1.name')"
                ></div>
              </div>
            </v-carousel-item>
            <v-carousel-item>
              <div class="carousel__item carousel-slide">
                <div class="carousel-slide__text pt-[107px] mobile:pt-0">
                  {{ $t('reviews.items.2.text') }}
                </div>
                <div
                  class="carousel-slide__name"
                  v-html="$t('reviews.items.2.name')"
                ></div>
              </div>
            </v-carousel-item>
            <v-carousel-item>
              <div class="carousel__item carousel-slide">
                <div class="carousel-slide__text">
                  {{ $t('reviews.items.3.text') }}
                </div>
                <div
                  class="carousel-slide__name"
                  v-html="$t('reviews.items.3.name')"
                ></div>
              </div>
            </v-carousel-item>
            <v-carousel-item>
              <div class="carousel__item carousel-slide">
                <div class="carousel-slide__text">
                  {{ $t('reviews.items.4.text') }}
                </div>
                <div
                  class="carousel-slide__name"
                  v-html="$t('reviews.items.4.name')"
                ></div>
              </div>
            </v-carousel-item>
            <v-carousel-item>
              <div class="carousel__item carousel-slide">
                <div class="carousel-slide__text">
                  {{ $t('reviews.items.5.text') }}
                </div>
                <div
                  class="carousel-slide__name"
                  v-html="$t('reviews.items.5.name')"
                ></div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
        <img
          loading="lazy"
          class="reviews__double-star"
          src="/images/4-corner-double-white-star.svg"
          alt=""
        />
        <div class="dot dot--1"></div>
        <div class="dot dot--2"></div>
        <div class="dot dot--3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews {
  @apply pt-[116px];
  &__container {
    @apply relative border-b border-solid border-white;
  }
  &__title {
    @apply h1 uppercase text-center relative z-[1];
  }
  &__star-container {
    @apply absolute w-[1165px] h-[842px] top-[130px] left-[133px];
  }
  &__star-img {
    @apply absolute z-[2] inset-0;
  }
  &__double-star {
    @apply -scale-x-100 absolute top-[680px] left-[264px];
  }
  &__telescope {
    @apply w-[43px]  h-[59px] absolute z-[1] top-[417px] left-[1080px];
  }
  &__description {
    @apply uppercase text-center max-w-[1056px] mx-auto mt-4 relative z-[3];
  }
  &__carousel {
    @apply mt-6 mx-auto overflow-hidden;
    @apply bg-white w-[696px] h-[608px] rounded-t-[12000px];
    @apply relative z-[4];
    @apply flex flex-col justify-end text-dark;
  }
}

.dot {
  @apply w-2 h-2 rounded-xl bg-white absolute;
  &--1 {
    @apply top-[300px] left-40;
  }
  &--2 {
    @apply top-[328px] left-[994px];
  }
  &--3 {
    @apply top-[496px] left-[1062px];
  }
}

@screen mobile {
  .reviews {
    @apply pt-20;
    .container {
      max-width: 450px;
    }
    &__description {
      @apply mt-1 max-w-[368px];
    }
    &__carousel {
      @apply w-full h-[407px] mt-3;
    }
    &__star-container {
      @apply z-[2] min-w-[550px] w-[550px] h-[398px] max-h-[398px]  top-4 left-1/2 -translate-x-1/2;
    }
    &__double-star {
      @apply z-[3] w-[25px] h-[29px] top-[172px] left-[64px];
    }
    &__telescope {
      @apply w-[27px] h-[37px] top-[164px] left-[427px];
    }
  }
  .dot {
    @apply w-1 h-1;
    &--1 {
      @apply -top-[14px] left-36;
    }
    &--2 {
      @apply top-[49px] left-auto right-[49px];
    }
    &--3 {
      @apply hidden;
    }
  }
}
</style>

<style lang="scss">
.carousel {
  &__component {
    @apply absolute bottom-0;
  }
  &__arrow {
    @apply w-14 h-10 cursor-pointer;
    &--prev {
      @apply rotate-180;
    }
  }
  .v-window__controls {
    @apply h-10 top-auto bottom-11 px-8;
  }
}

.carousel-slide {
  @apply flex flex-col py-7 h-full;
  &__text {
    @apply h-full max-w-[528px] mx-auto p3-text text-center flex items-center uppercase;
  }
  &__name {
    @apply h-[72px] mt-7 mx-auto max-w-[344px] p3 text-center uppercase;
  }
}

@screen mobile {
  .carousel {
    &__arrow {
      @apply w-7 h-5;
    }
    .v-window__controls {
      @apply h-5 top-auto bottom-8 px-4;
    }
  }
  .carousel-slide {
    @apply py-[22px];
    &__name {
      @apply mt-[22px] h-10;
    }
    &__text {
      @apply max-w-[296px];
    }
  }
}
</style>
