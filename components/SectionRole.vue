<script setup>
</script>

<template>
  <div class="choose-role">
    <div class="container">
      <div class="choose-role__container">
        <h2 class="choose-role__title" v-html="$t('role.title')"></h2>
        <img class="choose-role__double-star" src="/images/4-corner-double-white-star.svg"></img>
        <div class="choose-role__dot"></div>
        <div class="links">
          <a
            target="_blank"
            href="https://dashboard.orionpartners.pro/signup/affiliate"
            class="affilate-link"
          >
            <span class="button-text">I’m <br />Affiliate</span>
            <svg
              width="55"
              height="40"
              viewBox="0 0 55 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.801 2C34.801 20 52.9625 20 52.9625 20M52.9625 20C52.9625 20 34.801 20 34.801 38M52.9625 20H2.03564"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://dashboard.orionpartners.pro/signup/brand"
            class="advertiser-link"
          >
            <span class="button-text">I’m <br />Advertiser</span>
            <svg
              width="55"
              height="40"
              viewBox="0 0 55 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.803 2.00049C34.803 20.0005 52.9644 20.0005 52.9644 20.0005M52.9644 20.0005C52.9644 20.0005 34.803 20.0005 34.803 38.0005M52.9644 20.0005L2.0376 20.0005"
                stroke="#EDDDE6"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choose-role {
  @apply mt-[212px] pb-[100px];
  &__title {
    @apply text-yellow uppercase;
  }
  &__double-star{
    @apply absolute w-12 h-[55px] top-1 left-[560px]
  }
  &__dot{
    @apply absolute w-2 h-2 left-[175px] -bottom-3 bg-white rounded-2xl
  }
}

.links {
  display: flex;
  justify-content: center;
}

.affilate-link {
  @apply flex items-center justify-center flex-col;
  @apply w-[430px] h-[338px] bg-contain text-dark uppercase button-text text-center;
  @apply absolute -top-[137px] left-[729px] rotate-[10deg];
  background-image: url('/assets/images/i-am-affiliate.webp');
  span {
    margin-top: 6px;
  }
  svg {
    margin-top: 7px;
  }
}

.advertiser-link {
  @apply flex items-center justify-center flex-col;
  @apply w-[408px] h-[408px] bg-contain uppercase text-center;
  @apply absolute -top-[7px] left-[954px] -rotate-[14deg];
  background-image: url('/assets/images/i-am-advertiser.webp');
  span {
    margin-top: 6px;
  }
  svg {
    margin-top: 7px;
  }
}

@screen mobile{
  .choose-role {
    @apply mt-[40px] pb-0;
    &__double-star{
      @apply w-[25px] h-[31px] -top-[9px] left-[191px]
    }
    &__dot{
      @apply w-1 h-1 left-[246px] bottom-auto top-20  bg-white rounded-2xl
    }
  }

  .links {
    @apply flex-col mt-4;
  }
  .affilate-link {
    @apply w-full h-14 bg-pink rounded-[56px] static rotate-0;
    br {
      display: none;
    }
    &:after {
      content: '';
      @apply absolute inset-1 rounded-[25px] opacity-30;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='black' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    }
    svg {
      display: none;
    }
  }

  .advertiser-link {
    @apply w-full h-14 bg-blue rounded-[25px] ml-0 mt-2 static rotate-0;
    br {
      display: none;
    }
    svg {
      display: none;
    }
    &:after {
      content: '';
      @apply absolute inset-1 rounded-[25px] opacity-50;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='white' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    }
  }
}
</style>
