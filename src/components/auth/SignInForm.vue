<template>
  <v-card class="pt-16 pb-8 px-10 rounded-lg w-[420px]">
    <v-card-title class="font-semibold text-center text-4xl pb-16">Вход</v-card-title>
    <v-item-group class="flex flex-col items-end w-100 h-100 mb-4 text-gray-500">
      <v-text-field
          v-model="v$.username.$model"
          class="w-100"
          label="Логин"
          prepend-inner-icon="mdi-account-circle-outline"
          required
          type="text"
          variant="underlined"
      />
      <v-text-field
          v-model="v$.password.$model"
          class="w-100"
          label="Пароль"
          prepend-inner-icon="mdi-lock-outline"
          required
          type="password"
          variant="underlined"
      />
      <!--      TODO логика востановления пароля-->
      <a class="text-end cursor-pointer hover:underline">
        Забыли пароль?
      </a>
    </v-item-group>
    <v-item-group class="flex justify-center gap-2 mb-10">
      <v-btn density="comfortable" icon="mdi-google"/>
      <v-btn density="comfortable" icon="mdi-instagram"/>
    </v-item-group>

    <v-card-actions class="flex flex-col gap-2 mb-20">
      <v-btn
          class="w-full rounded-xl text-white bg-gradient-to-r from-indigo-500 to-fuchsia-600 font-bold"
          size="large"
          variant="tonal"
          @click="onSignIn"
      >
        Войти
      </v-btn>
    </v-card-actions>

    <router-link
        :to="commonPaths.SIGN_UP"
        class="w-full rounded-xl font-medium cursor-pointer hover:underline text-gray-500"
    >
      Зарегистрироваться
    </router-link>
  </v-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {commonPaths} from "@/router/commonPaths";

const emit = defineEmits(['onSignIn', 'onSignUp']);

const form = ref({
  username: "",
  password: "",
})

const rules = {
  username: {
    required: minLength(8) && required,
  },
  password: {
    required: minLength(8) && required,
  },
}
const v$ = useVuelidate(rules, form);

const onSignIn = () => emit('onSignIn', {
// @ts-expect-error vuelidate
  username: v$.password.$model,
// @ts-expect-error vuelidate
  password: v$.password.$model
});
</script>

<style lang="scss" scoped>
</style>
