<script lang="ts" setup>
import {reactive} from "vue";

import {ICreateUser} from "@/api/auth";
import useVuelidate from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";

const emit = defineEmits(['onSignIn']);
const onSignUp = () => emit('onSignIn', form);

const form = reactive<ICreateUser>({
  username: "",
  email: "",
  password: "",
})

const v$ = useVuelidate({
  username: {
    required: required && minLength(8),
  },
  email: {
    required: required && email,
  },
  password: {
    required: required && minLength(8),
  }
}, form)
</script>

<template>
  <v-card class="pt-16 pb-8 px-10 rounded-lg w-[420px]">
    <v-card-title class="font-semibold text-center text-4xl pb-16">Регистрация</v-card-title>
    <v-item-group class="flex flex-col items-end w-100 h-100 mb-4 text-gray-500">
      <v-text-field
          v-model="v$.username.$model"
          :error="v$.username.$error"
          class="w-100"
          hint="Логин не может быть пустым и меньше 8 символов"
          label="Логин"
          prepend-inner-icon="mdi-account-circle-outline"
          type="text"
          variant="underlined"
      />
      <v-text-field
          v-model="v$.email.$model"
          :error="v$.email.$error"
          class="w-100"
          hint="Email не может быть пустым"
          label="Email"
          prepend-inner-icon="mdi-email-outline"
          type="email"
          variant="underlined"
      />
      <v-text-field
          v-model="v$.password.$model"
          :error="v$.password.$error"
          class="w-100"
          hint="Пароль не может быть пустым и меньше 8 символов"
          label="Пароль"
          prepend-inner-icon="mdi-lock-outline"
          type="password"
          variant="underlined"
      />
    </v-item-group>
    <!--      TODO возможность регистрации через соц. сети-->
    <v-item-group class="flex justify-center gap-2 mb-10">
      <span
          class="w-full rounded-xl font-medium text-gray-500"
      >
        Или зарегестрируйтесь через соц. сети
      </span>
      <v-btn class="cursor-not-allowed" density="comfortable" icon="mdi-google"/>
      <v-btn class="cursor-not-allowed" density="comfortable" icon="mdi-instagram"/>
    </v-item-group>

    <v-card-actions class="flex flex-col gap-2 mt-20">
      <v-btn
          class="w-full rounded-xl text-white bg-gradient-to-r from-indigo-500 to-fuchsia-600 font-bold"
          size="large"
          variant="tonal"
          @click="onSignUp"
      >
        Зарегистрироваться
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.login-form {
  max-width: 640px;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.09);
  padding: 20px;

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

</style>
