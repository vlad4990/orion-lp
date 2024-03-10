<script setup>
const isDialogOpened = useState('isDialogOpened', () => false);
const currentDialog = useState('currentDialog', () => '');

const loading = ref(false);

const authFields = ref({
  mail: '',
  password: '',
});

const authForm = ref();
const advertiserForm = ref();
const affiliateForm = ref();

watch(currentDialog, () => {
  try {
    authForm.value?.reset();
    advertiserForm.value?.reset();
    affiliateForm.value?.reset();
  } catch (error) {
    console.log('error', error);
  }
});

const affiliateFields = ref({
  firstName: '',
  lastName: '',
  mail: '',
  password: '',
  repeatPassword: '',
  company: '',
  telegram: '',
  termsCheckBox: false,
  policyCheckBox: false,
});

const advertiserFields = ref({
  firstName: '',
  lastName: '',
  mail: '',
  password: '',
  repeatPassword: '',
  company: '',
  telegram: '',
  termsCheckBox: false,
  policyCheckBox: false,
});

const goTo = (link) => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  a.href = link;
  a.target = '_blank';
  a.click();
  document.body.removeChild(a);
};

const isSuccess = ref(false);

const isServerError = ref(false);

const { t } = useI18n();

const rules = {
  name: [(value) => value?.length >= 2 || t('dialog.errors.required')],
  mail: [
    (value) => /^\S+@\S+\.\S+$/i.test(value) || t('dialog.errors.required'),
  ],
  message: [(value) => value?.length >= 2 || t('dialog.errors.required')],
  password: [(value) => value?.length >= 8 || t('dialog.errors.required')],
  signUpPassword: [
    (value) => value?.length >= 8 || t('dialog.errors.passwordLength'),
    (value) =>
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/.test(
        value
      ) || t('dialog.errors.passwordSpecial'),
  ],
  repeatAffiliatePassword: [
    (value) =>
      value === affiliateFields.value.password || t('dialog.errors.password'),
  ],
  repeatAdvertiserPassword: [
    (value) =>
      value === advertiserFields.value.password || t('dialog.errors.password'),
  ],
  checkbox: [(value) => value || t('dialog.errors.required')],
};

const SubmitAuth = async (event) => {
  const results = await event;
  if (!results.valid) {
    return;
  }
  loading.value = true;
  isServerError.value = false;
  try {
    const {
      info: { one_time_login_link },
    } = await $fetch(
      'https://orion.scaletrk.com/api/v2/network/get-login-link?api-key=07c3b78d46a294ff7e671a97423c54f2748184bb',
      {
        method: 'POST',
        body: JSON.stringify({
          email: authFields.value.mail,
          password: authFields.value.password,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    goTo(one_time_login_link);
  } catch (error) {
    console.log('error', error);
    loading.value = false;
    isServerError.value = true;
    return;
  }
  isSuccess.value = true;
  loading.value = false;
};

const SubmitAffiliate = async (event) => {
  const results = await event;
  if (!results.valid) {
    return;
  }
  loading.value = true;
  isServerError.value = false;
  try {
    const {
      info: { one_time_login_link },
    } = await $fetch(
      'https://orion.scaletrk.com/api/v2/network/affiliates?api-key=07c3b78d46a294ff7e671a97423c54f2748184bb',
      {
        method: 'POST',
        body: JSON.stringify({
          email: affiliateFields.value.mail,
          firstname: affiliateFields.value.firstName,
          lastname: affiliateFields.value.lastName,
          password: affiliateFields.value.password,
          password_repeat: affiliateFields.value.repeatPassword,
          company_name: affiliateFields.value.company,
          status: 2,
          custom_fields: `{"custom_field_153":"${affiliateFields.value.telegram}"}`,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    goTo(one_time_login_link);
  } catch (error) {
    console.log('error', error);
    loading.value = false;
    isServerError.value = true;
    return;
  }

  isSuccess.value = true;
  loading.value = false;
};

const submitAdvertiser = async (event) => {
  const results = await event;
  if (!results.valid) {
    return;
  }
  loading.value = true;
  isServerError.value = false;
  try {
    const {
      info: { one_time_login_link },
    } = await $fetch(
      'https://orion.scaletrk.com/api/v2/network/advertisers?api-key=07c3b78d46a294ff7e671a97423c54f2748184bb',
      {
        method: 'POST',
        body: JSON.stringify({
          email: advertiserFields.value.mail,
          firstname: advertiserFields.value.firstName,
          lastname: advertiserFields.value.lastName,
          password: advertiserFields.value.password,
          password_repeat: advertiserFields.value.repeatPassword,
          company_name: advertiserFields.value.company,
          status: 2,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    goTo(one_time_login_link);
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
  <v-dialog
    :max-width="currentDialog === 'auth' ? 388 : 468"
    v-model="isDialogOpened"
  >
    <template v-slot:default="{ isActive }">
      <v-card class="dialog">
        <div @click="isActive.value = false" class="dialog__close">&#215;</div>
        <v-form
          @submit.prevent="SubmitAuth"
          validate-on="blur lazy"
          class="dialog__form dialog-form"
          v-if="currentDialog === 'auth'"
          ref="authForm"
        >
          <div class="dialog-form__title">{{ $t('dialog.auth.title') }}</div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.mail') }}
            </div>
            <v-text-field
              v-model="authFields.mail"
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
              v-model="authFields.password"
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
            >{{ $t('dialog.auth.button') }}
          </v-btn>
          <div v-if="isServerError" class="dialog-form__error">
            {{ $t('dialog.placeholders.error') }}
          </div>
          <div class="dialog-form__no-account">
            <span>{{ $t('dialog.auth.no-account') }}</span>
          </div>
          <div class="flex flex-col gap-4">
            <v-btn @click="currentDialog = 'affiliate'" variant="outlined">
              {{ $t('dialog.auth.partner') }}
            </v-btn>
            <v-btn @click="currentDialog = 'advertiser'" variant="outlined">
              {{ $t('dialog.auth.advertiser') }}
            </v-btn>
          </div>
        </v-form>
        <v-form
          v-if="currentDialog === 'affiliate'"
          @submit.prevent="SubmitAffiliate"
          validate-on="blur lazy"
          class="dialog__form dialog-form"
          ref="affiliateForm"
        >
          <div class="dialog-form__title">
            {{ $t('dialog.affiliate.title') }}
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.firstName') }}
            </div>
            <v-text-field
              v-model="affiliateFields.firstName"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :rules="rules.name"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.lastName') }}
            </div>
            <v-text-field
              v-model="affiliateFields.lastName"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :rules="rules.name"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.mail') }}
            </div>
            <v-text-field
              v-model="affiliateFields.mail"
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
              v-model="affiliateFields.password"
              variant="outlined"
              type="password"
              hide-details="auto"
              density="compact"
              :rules="rules.signUpPassword"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.repeatPassword') }}
            </div>
            <v-text-field
              v-model="affiliateFields.repeatPassword"
              variant="outlined"
              type="password"
              hide-details="auto"
              density="compact"
              :rules="rules.repeatAffiliatePassword"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.company') }}
            </div>
            <v-text-field
              v-model="affiliateFields.company"
              variant="outlined"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </div>
          <div class="dialog-form__br"></div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.telegram') }}
            </div>
            <v-textarea
              v-model="affiliateFields.telegram"
              variant="outlined"
              density="compact"
              hide-details="auto"
              rows="2"
              auto-grow
              :rules="rules.name"
            ></v-textarea>
          </div>
          <v-checkbox
            class="dialog-form__checkbox"
            hide-details="auto"
            density="compact"
            :rules="rules.checkbox"
            v-model="affiliateFields.termsCheckBox"
          >
            <template v-slot:label>
              <span v-html="$t('dialog.affiliate.terms')"></span>
            </template>
          </v-checkbox>
          <v-checkbox
            class="dialog-form__checkbox"
            hide-details="auto"
            density="compact"
            :rules="rules.checkbox"
            v-model="affiliateFields.policyCheckBox"
          >
            <template v-slot:label>
              <span v-html="$t('dialog.affiliate.policy')"></span>
            </template>
          </v-checkbox>
          <v-btn
            :loading="loading"
            height="40"
            class="dialog-form__btn"
            variant="flat"
            type="submit"
            >{{ $t('dialog.affiliate.button') }}
          </v-btn>
          <div v-if="isServerError" class="dialog-form__error">
            {{ $t('dialog.placeholders.error') }}
          </div>
          <div
            @click="currentDialog = 'auth'"
            class="dialog-form__already-registered"
          >
            {{ $t('dialog.affiliate.already') }}
          </div>
        </v-form>
        <v-form
          v-if="currentDialog === 'advertiser'"
          @submit.prevent="submitAdvertiser"
          validate-on="blur lazy"
          class="dialog__form dialog-form"
          ref="advertiserForm"
        >
          <div class="dialog-form__title">
            {{ $t('dialog.advertiser.title') }}
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.firstName') }}
            </div>
            <v-text-field
              v-model="advertiserFields.firstName"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :rules="rules.name"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.lastName') }}
            </div>
            <v-text-field
              v-model="advertiserFields.lastName"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :rules="rules.name"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.mail') }}
            </div>
            <v-text-field
              v-model="advertiserFields.mail"
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
              v-model="advertiserFields.password"
              variant="outlined"
              type="password"
              hide-details="auto"
              density="compact"
              :rules="rules.signUpPassword"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.repeatPassword') }}
            </div>
            <v-text-field
              v-model="advertiserFields.repeatPassword"
              variant="outlined"
              type="password"
              hide-details="auto"
              density="compact"
              :rules="rules.repeatAdvertiserPassword"
            ></v-text-field>
          </div>
          <div class="dialog-form__field">
            <div class="dialog-form__label">
              {{ $t('dialog.placeholders.company') }}
            </div>
            <v-text-field
              v-model="advertiserFields.company"
              variant="outlined"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </div>
          <div class="dialog-form__br"></div>
          <v-checkbox
            class="dialog-form__checkbox"
            hide-details="auto"
            density="compact"
            :rules="rules.checkbox"
            v-model="advertiserFields.termsCheckBox"
          >
            <template v-slot:label>
              <span v-html="$t('dialog.advertiser.terms')"></span>
            </template>
          </v-checkbox>
          <v-checkbox
            class="dialog-form__checkbox"
            hide-details="auto"
            density="compact"
            :rules="rules.checkbox"
            v-model="advertiserFields.policyCheckBox"
          >
            <template v-slot:label>
              <span v-html="$t('dialog.advertiser.policy')"></span>
            </template>
          </v-checkbox>
          <v-btn
            :loading="loading"
            height="40"
            class="dialog-form__btn"
            variant="flat"
            type="submit"
            >{{ $t('dialog.advertiser.button') }}
          </v-btn>
          <div v-if="isServerError" class="dialog-form__error">
            {{ $t('dialog.placeholders.error') }}
          </div>
          <div
            @click="currentDialog = 'auth'"
            class="dialog-form__already-registered"
          >
            {{ $t('dialog.advertiser.already') }}
          </div>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">
.dialog {
  @apply rounded bg-[#242123] px-16 pt-[50px] pb-[27px] relative;
  @apply flex flex-col gap-[23px];
  @screen mobile {
    @apply px-3 pt-12 pb-6;
  }
  &__form {
    @apply flex flex-col gap-[23px];
  }
  &__close {
    @apply absolute top-7 right-8 text-[30px] leading-[30px] font-normal mobile:top-5 mobile:right-6 cursor-pointer;
  }
}

.dialog-form {
  &__title {
    @apply text-[24px] leading-[32px] font-bold;
  }

  &__label {
    @apply text-[15px] leading-[24px] mb-[3px];
  }

  &__under {
    @apply flex justify-end;
    a {
      @apply opacity-50 text-[14px] leading-[20px];
    }
  }

  &__btn {
    @apply bg-pink text-black text-[15px] font-medium;
  }

  &__no-account {
    @apply flex justify-center opacity-50 overflow-x-hidden;
    span {
      @apply mx-auto text-[14px] leading-[20px] relative;
      &:before {
        @apply content-[''] absolute top-[52%] right-[calc(100%+8px)] h-[1px] bg-white w-full;
      }

      &:after {
        @apply content-[''] absolute top-[52%] left-[calc(100%+8px)] h-[1px] bg-white w-full;
      }
    }
  }

  &__br {
    @apply h-[1px] bg-white w-full bg-opacity-20;
  }

  &__already-registered {
    @apply mt-5 text-pink text-[14px] leading-[20px] text-center cursor-pointer;
  }
  &__error {
    @apply text-center text-pink font-medium;
  }
}
</style>

<style lang="scss">
.dialog-form {
  .v-field__outline {
    --v-field-border-opacity: 0.2;
  }

  .v-selection-control__input {
    opacity: 0.2;
  }

  .v-selection-control .v-label {
    opacity: 1;
  }

  .v-selection-control--dirty .v-selection-control__input {
    opacity: 1;
  }

  .v-btn {
    @apply normal-case cursor-pointer;
  }

  .v-btn__content {
    @apply mt-0.5;
  }

  .v-checkbox .v-selection-control {
    min-height: 10px;
  }

  &__checkbox {
    @apply text-[15px];
    span {
      @apply pl-3;
    }

    a {
      @apply text-pink;
    }
  }
}
</style>
