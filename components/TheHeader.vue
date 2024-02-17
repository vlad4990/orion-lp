<script setup>
const { locale, setLocale } = useI18n();
</script>

<template>
  <div class="header">
    <div class="container header__container flex">
      <div class="header__left flex items-center">
        <NuxtImg src="/images/logo.svg" class="header__logo" alt="" />
        <div class="header__lang-list flex items-center">
          <div
            :class="{ 'active pointer-events-none': locale == 'en' }"
            class="header__lang-item caption"
            @click="setLocale('en')"
          >
            EN
          </div>
          <div class="header__lang-dot caption"></div>
          <div
            :class="{ 'active pointer-events-none': locale == 'ru' }"
            class="header__lang-item caption"
            @click="setLocale('ru')"
          >
            RU
          </div>
        </div>
      </div>
      <ul class="header__list">
        <li class="active">
          <a class="caption" href="">{{ $t('header.links.About') }}</a>
        </li>
        <li>
          <a class="caption" href="">{{ $t('header.links.Affiliates') }}</a>
        </li>
        <li>
          <a class="caption" href="">{{ $t('header.links.Advertisers') }}</a>
        </li>
        <li>
          <a class="caption" href="">{{ $t('header.links.Reviews') }}</a>
        </li>
        <li>
          <a class="caption" href="">{{ $t('header.links.Partners') }}</a>
        </li>
      </ul>
      <div class="header__btns flex items-center">
        <button class="header__btn caption">
          {{ $t('header.buttons.auth') }}
        </button>
        <button class="header__btn caption">
          {{ $t('header.buttons.registration') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: $color-dark;
  &__container {
    justify-content: space-between;
    width: 100%;
    height: 68px;
  }
  &__left {
    gap: 32px;
  }

  &__lang {
    &-list {
      gap: 4px;
    }
    &-item {
      margin-top: 4px;
      opacity: 0.5;
      cursor: pointer;
      &.active {
        opacity: 1;
      }
    }
    &-dot {
      width: 7px;
      height: 100%;
      height: 10px;
      position: relative;
      &:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 8px;
      }
    }
  }
  &__logo {
    width: 182px;
    height: 44px;
  }
  &__btns {
    gap: 8px;
  }
  &__btn {
    padding: 9px 12px 5px;
    text-transform: uppercase;
    border: 1px solid $color-white;
    border-radius: 48px;
    height: fit-content;
  }
  &__list {
    display: flex;
    gap: 16px;
    list-style: none;
    text-transform: uppercase;
    position: absolute;
    top: 21px;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    a {
      white-space: nowrap;
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
}

@screen mobile {
  .header {
    padding: 12px 0 0;
    display: flex;
    gap: 16px;
    img {
      width: 132px;
      height: 32px;
    }
  }
}
</style>
