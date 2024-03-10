<script setup>
const { locale, setLocale } = useI18n();

const isMenuOpened = ref(false);

const { _route } = useNuxtApp();

const noNavigation = computed(() => {
  return ['/policy', '/terms'].includes(_route.path);
});

const isDialogOpened = useState('isDialogOpened');
const currentDialog = useState('currentDialog', () => 'auth');

const openAuthDialog = () => {
  currentDialog.value = 'auth';
  isDialogOpened.value = true;
};
const openAffiliateDialog = () => {
  currentDialog.value = 'affiliate';
  isDialogOpened.value = true;
};
</script>

<template>
  <div class="header" :class="{ 'header--opened': isMenuOpened }">
    <div class="container header__container">
      <div class="header__left">
        <NuxtLink to="/" class="header__logo--container">
          <NuxtImg src="/images/logo.svg" class="header__logo" alt="" />
        </NuxtLink>
        <div v-if="!noNavigation" class="header__lang-list">
          <div
            :class="{ 'active pointer-events-none': locale == 'en' }"
            class="header__lang-item"
            @click="setLocale('en')"
          >
            EN
          </div>
          <div class="header__lang-dot"></div>
          <div
            :class="{ 'active pointer-events-none': locale == 'ru' }"
            class="header__lang-item"
            @click="setLocale('ru')"
          >
            RU
          </div>
        </div>
      </div>
      <ul v-if="!noNavigation" class="header__list">
        <li class="active">
          <a href="#about">{{ $t('header.links.About') }}</a>
        </li>
        <li>
          <a href="#affiliates">{{ $t('header.links.Affiliates') }}</a>
        </li>
        <li>
          <a href="#advertisers">{{ $t('header.links.Advertisers') }}</a>
        </li>
        <li>
          <a href="#reviews">{{ $t('header.links.Reviews') }}</a>
        </li>
        <li>
          <a href="#partners">{{ $t('header.links.Partners') }}</a>
        </li>
      </ul>
      <div class="header__btns header__btns--desktop">
        <button @click="openAuthDialog" class="header__btn header__btn--auth">
          {{ $t('header.buttons.auth') }}
        </button>
        <button
          @click="openAffiliateDialog"
          class="header__btn header__btn--registration"
        >
          {{ $t('header.buttons.registration') }}
        </button>
        <button
          @click="isMenuOpened = !isMenuOpened"
          class="header__btn header__btn--menu"
        >
          {{
            isMenuOpened
              ? $t('header.buttons.close')
              : $t('header.buttons.account')
          }}
        </button>
      </div>
    </div>
    <ClientOnly />
    <v-expand-transition>
      <div class="header__expand" v-if="isMenuOpened">
        <div class="container">
          <div class="header__btns header__btns--mobile">
            <button
              class="header__btn header__btn--big header__btn--auth"
              @click="openAuthDialog"
            >
              {{ $t('header.buttons.auth') }}
            </button>
            <button
              class="header__btn header__btn--big header__btn--registration"
              @click="openAffiliateDialog"
            >
              {{ $t('header.buttons.registration') }}
            </button>
          </div>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply sticky top-0 inset-x-0 z-20 bg-dark;
  @screen mobile {
    @apply fixed;
  }
  &__container {
    @apply flex justify-between w-full h-[68px];
  }
  &__left {
    @apply flex items-center gap-8;
  }

  &__lang {
    &-list {
      @apply flex items-center gap-1;
    }
    &-item {
      @apply mt-1 opacity-50 cursor-pointer caption-text;
      &.active {
        opacity: 1;
      }
    }
    &-dot {
      width: 7px;
      height: 10px;
      @apply relative caption-text;
      &:after {
        @apply absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1 h-1 bg-white opacity-50 rounded-3xl;
        content: '';
      }
    }
  }
  &__logo {
    width: 182px;
    height: 44px;
    &--container {
      display: contents;
    }
  }
  &__btns {
    @apply flex items-center gap-2;
    .header__btn--menu {
      display: none;
    }
  }
  &__btn {
    padding: 10px 11px 4px;
    @apply uppercase border border-white border-solid rounded-[48px] h-fit caption-text;
    &--big {
      @apply pt-6 pb-4 button-text;
    }
  }
  &__list {
    top: 21px;
    left: 50%;
    transform: translateX(-50%);
    @apply flex gap-4 list-none uppercase absolute h-5;
    a {
      @apply whitespace-nowrap caption-text;
    }
    li {
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
      &.active,
      &:hover {
        opacity: 1;
      }
    }
  }
  &__expand {
    @apply absolute top-full left-0 right-0 bg-dark z-20;
  }
}

@screen mobile {
  .header {
    @apply p-0 flex flex-col gap-4;
    img {
      width: 132px;
      height: 32px;
    }
    &__container {
      gap: 12px;
      height: 56px;
    }
    &__list {
      display: none;
    }
    &__btns {
      &--desktop {
        .header__btn--auth,
        .header__btn--registration {
          display: none;
        }
        .header__btn--menu {
          padding: 7px 9px 3px;
          display: block;
        }
      }
      &--mobile {
        @apply flex-col items-stretch pt-6 pb-10 text-center;
      }
    }
    &__left {
      display: contents;
    }
    &__logo {
      &--container {
        flex: 1 0 auto;
        @apply flex items-center;
      }
    }
  }
}
</style>
