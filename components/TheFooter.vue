<template>
  <div class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__top">
          ORION Partners by
          <a href="https://orionmobile.agency/" target="_blank">ORION Agency</a>
        </div>
        <div class="footer__links">
          <a href="mailto:hello@orionpartners.pro" target="_blank"
            >hello@orionpartners.pro</a
          >
          <div class="footer__links--wrapper">
            <a href="https://t.me/orionpartners" target="_blank">Telegram</a>
            <a
              href="https://cy.linkedin.com/company/orion-mobile-agency"
              target="_blank"
              >LinkedIn</a
            >
          </div>
        </div>
        <div class="footer__local-links">
          <NuxtLink class="footer__policy" to="/policy"
            >Privacy policy</NuxtLink
          >
          <NuxtLink class="footer__terms" to="/terms"
            >Terms and conditions</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply pb-8 uppercase;
  &__container {
    @apply flex flex-col relative items-center gap-3;
  }
  &__policy {
    @apply absolute left-0 bottom-0 opacity-60 caption-text;
  }
  &__terms {
    @apply absolute right-0 bottom-0 opacity-60 caption-text;
  }
  &__top {
    @apply caption-text;
    @screen mobile {
      @apply w-[168px] text-center;
    }
    a {
      @apply underline underline-offset-4;
    }
  }
  &__local-links {
    @apply contents;
    @screen mobile {
      @apply flex mt-6 gap-10;
    }
  }
  &__links {
    @apply p3 flex gap-9;
    &--wrapper {
      @apply contents;
    }
    @screen mobile {
      @apply flex-col gap-1;
      &--wrapper {
        @apply flex gap-9 w-fit mx-auto;
      }
    }
    .footer__links--wrapper {
      a:before {
        content: '';
        @apply absolute h-1 w-1 bg-white rounded top-1/3 -left-[16px];
        @screen mobile {
          &:first-child {
            @apply relative;
          }
        }
      }
    }
    a {
      @apply relative;
    }
  }
}
</style>
<script setup lang="ts"></script>
