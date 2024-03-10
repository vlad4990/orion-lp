<script setup>
const mail = ref('');
const password = ref('');
const isServerError = ref(false);

const { t } = useI18n();

const rules = {
  mail: [
    (value) => /^\S+@\S+\.\S+$/i.test(value) || t('dialog.errors.required'),
  ],
  password: [(value) => value?.length >= 8 || t('dialog.errors.required')],
};

const SubmitAuth = async (event) => {
  const results = await event;
  if (!results.valid) {
    return;
  }
  loading.value = true;
  isServerError.value = false;
  try {
    const response = await fetch(
      'https://sandbox.scaletrk.com/api/v2/network/get-login-link?api-key=9876672da43110d164412e30a66fed87ac633d5c',
      {
        method: 'POST',
        body: JSON.stringify({
          email: mail.value,
          password: password.value,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
    loading.value = false;
    isServerError.value = true;
    return;
  }

  isSuccess.value = true;
  loading.value = false;
};
</script>

<template>
  <v-form
    @submit.prevent="SubmitAuth"
    validate-on="submit"
    class="dialog__form dialog-form"
  >
    <div class="dialog-form__title">{{ $t('dialog.auth.title') }}</div>
    <div class="dialog-form__field">
      <div class="dialog-form__label">
        {{ $t('dialog.placeholders.mail') }}
      </div>
      <v-text-field
        v-model="mail"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :rules="rules.mail"
      ></v-text-field>
    </div>
    <div class="dialog-form__field">
      <div class="dialog-form__label">
        {{ $t('dialog.placeholders.password') }}
      </div>
      <v-text-field
        v-model="password"
        variant="outlined"
        type="password"
        hide-details="auto"
        density="compact"
        :rules="rules.password"
      ></v-text-field>
      <div class="dialog-form__under">
        <a
          href="https://dashboard.orionpartners.pro/login/password-reset"
          target="_blank"
          >{{ $t('dialog.auth.forgot') }}</a
        >
      </div>
    </div>

    <v-btn
      :loading="loading"
      height="40"
      class="dialog-form__btn"
      variant="flat"
      type="submit"
      >{{ $t('dialog.auth.button') }}</v-btn
    >
    <div v-if="isServerError" class="dialog-form__error">
      {{ $t('dialog.placeholders.error') }}
    </div>
    <div class="dialog-form__no-account">
      <span>{{ $t('dialog.auth.no-account') }}</span>
    </div>
    <div class="flex flex-col gap-4">
      <v-btn variant="outlined"> {{ $t('dialog.auth.partner') }} </v-btn>
      <v-btn variant="outlined">
        {{ $t('dialog.auth.advertiser') }}
      </v-btn>
    </div>
  </v-form>
</template>
