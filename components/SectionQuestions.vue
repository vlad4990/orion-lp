<script setup>
const name = ref('');
const mail = ref('');
const message = ref('');
const loading = ref(false);

const isSuccess = ref(false);

const isServerError = ref(false);

const { t } = useI18n();

const submit = async (event) => {
  const results = await event;
  if (!results.valid) {
    return;
  }
  loading.value = true;
  isServerError.value = false;
  try {
    const response = await fetch('http://2.59.36.5:3000/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        email: mail.value,
        name: name.value,
        message: message.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    console.log('error', error);
    loading.value = false;
    isServerError.value = true;
    return;
  }

  isSuccess.value = true;
  loading.value = false;
};

const rules = {
  name: [(value) => value?.length >= 2 || t('questions.placeholders.required')],
  mail: [
    (value) =>
      /^\S+@\S+\.\S+$/i.test(value) || t('questions.placeholders.required'),
  ],
  message: [
    (value) => value?.length >= 2 || t('questions.placeholders.required'),
  ],
};
</script>

<template>
  <div class="questions">
    <div class="container">
      <div class="questions__container">
        <div class="questions__title">
          {{ $t('questions.title') }}
          <div class="questions__dot questions__dot--1"></div>
          <div class="questions__dot questions__dot--2"></div>
          <img
            class="questions__star questions__star--1"
            src="/images/4-corner-pink-star.png"
            loading="lazy"
            alt=""
          />
          <img
            class="questions__star questions__star--2"
            src="/images/4-corner-pink-star.png"
            loading="lazy"
            alt=""
          />
          <img
            class="questions__smile"
            src="/images/face-happy-pink.png"
            loading="lazy"
            alt=""
          />
          <img
            class="questions__figure"
            src="/images/questions-vector.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div class="questions__description">
          {{ $t('questions.description') }}
        </div>
        <v-form
          v-if="!isSuccess"
          @submit.prevent="submit"
          validate-on="submit"
          class="questions__form questions-form"
        >
          <div class="questions-form__row">
            <v-text-field
              v-model="name"
              variant="underlined"
              hide-details="auto"
              :rules="rules.name"
              :placeholder="$t('questions.placeholders.name')"
            ></v-text-field>
            <v-text-field
              v-model="mail"
              variant="underlined"
              hide-details="auto"
              :rules="rules.mail"
              :placeholder="$t('questions.placeholders.mail')"
            ></v-text-field>
          </div>
          <v-textarea
            v-model="message"
            variant="underlined"
            hide-details="auto"
            rows="1"
            auto-grow
            :rules="rules.message"
            row-height="60"
            :placeholder="$t('questions.placeholders.message')"
          ></v-textarea>
          <v-btn
            :loading="loading"
            height="46"
            class="questions-form__btn"
            variant="flat"
            type="submit"
            >{{ $t('questions.placeholders.button') }}</v-btn
          >
          <div v-if="isServerError" class="questions-form__error">
            {{ $t('questions.placeholders.error') }}
          </div>
        </v-form>
        <div v-else class="questions__success">
          <h3>{{ $t('questions.placeholders.thanks') }}</h3>
          <img src="/images/face-happy-yellow.png" alt="" />
        </div>
      </div>
      <img class="questions__planet" src="/images/planet.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.questions {
  padding: 184px 0 172px;
  @screen mobile {
    padding: 52px 0 76px;
  }
  &__title {
    @apply h1 uppercase text-center relative;
  }
  &__dot {
    @apply w-2 h-2 rounded bg-pink absolute;
    @screen mobile {
      @apply w-1 h-1;
    }
    &--1 {
      @apply top-[80px] left-[468px];
      @screen mobile {
        @apply top-[12px] left-[113px];
      }
    }
    &--2 {
      @apply top-[434px] left-[1125px];
      @screen mobile {
        @apply top-[124px] left-[280px];
      }
    }
  }
  &__star {
    @apply absolute;
    &--1 {
      @apply w-[56px] h-[70px] top-[93px] left-[868px];
      @screen mobile {
        @apply w-[18px] h-[22px] top-[10px] left-[224px];
      }
    }
    &--2 {
      @apply w-[32px] h-[40px] top-[163px] left-[204px];
      @screen mobile {
        @apply w-[16px] h-[20px] top-[40px] left-[48px];
      }
    }
  }
  &__smile {
    @apply absolute w-[132px] h-[132px] top-[132px] left-[899px];
    @screen mobile {
      @apply w-[48px] h-[48px] top-[34px] left-[215px];
    }
  }
  &__figure {
    @apply absolute w-[113px] h-[72px] top-[116px] left-[1189px];
    @screen mobile {
      @apply w-[34px] h-[20px] top-[32px] left-[289px];
    }
  }
  &__planet {
    @apply absolute w-[75px] h-[48px] top-[772px] left-[1209px];
    @screen mobile {
      @apply hidden;
    }
  }
  &__description {
    @apply subtitle uppercase text-center mt-4;
    @screen mobile {
      @apply mt-1 caption-text;
    }
  }
  &__form {
    @apply mt-[60px];
    @screen mobile {
      @apply mt-5;
    }
  }
  &__success {
    @apply relative mt-[60px] max-w-[1056px] mx-auto;

    h3 {
      @apply uppercase text-center;
    }
    img {
      @apply absolute w-[135px] h-[135px] top-[80px] left-[269px];
    }
    @screen mobile {
      @apply mb-[120px];
      img {
        @apply w-[52px] h-[52px] top-[101px] left-[204px];
      }
    }
  }
}

.questions-form {
  &__row {
    @apply grid gap-2 grid-cols-2;
    @screen mobile {
      @apply contents;
    }
  }
  &__btn {
    @apply h-11 mt-8 mx-auto bg-white text-dark rounded-[48px] caption-text;
    @screen mobile {
      @apply max-h-10 mt-5;
    }
  }
  &__error {
    @apply text-pink caption-text uppercase text-center max-w-[345px] mx-auto mt-3;
  }
}
</style>

<style class="scss">
.questions-form {
  @apply flex flex-col caption-text;
  &__btn span.v-btn__content {
    margin-top: 4px;
  }
  .v-field__input {
    @apply h-[60px] pt-6 p3 pb-0;
    @screen mobile {
      @apply pt-3 h-12;
    }
    &::placeholder {
      opacity: 1;
    }
  }
  .v-textarea .v-field__input {
    height: inherit;
    line-height: 36px;
  }
  .v-field--variant-underlined .v-field__outline::before {
    opacity: 1;
  }
}

#orion-partners .v-theme--dark {
  --v-theme-error: 255, 100, 143;
}
</style>
