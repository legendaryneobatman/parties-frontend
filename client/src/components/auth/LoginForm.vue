<template>
  <v-card class="login-form rounded-lg">
    <v-card-title>Вход</v-card-title>
    <v-card-item class="w-100">
      <v-text-field
          v-model="form.name"
          class="w-100"
          label="Логин"
          type="text"
          required
      />
    </v-card-item>
    <v-card-item class="w-100">
      <v-text-field
          v-model="form.password"
          label="Пароль"
          type="password"
          required
          class="w-100"
      />
    </v-card-item>
    <v-card-item class="w-100">
      <v-text-field
        v-model="form.email"
        label="E-mail"
        type="email"
        required
        class="w-100"
      />
    </v-card-item>

    <v-card-actions class="login-form__actions">
      <v-btn
          prepend-icon="mdi-check-circle"
          color="success"
          variant="tonal"
          size="large"
          class="mt-4"
          block
          @click="onLogin"
      >
        <template #prepend>
          <v-icon color="success"></v-icon>
        </template>
        Войти
      </v-btn>
      <v-btn
        prepend-icon="mdi-check-circle"
        variant="tonal"
        size="large"
        color="amber"
        class="mt-4 w-100"
        @click="onSignUp"
      >
        <template #prepend>
          <v-icon color="amber"></v-icon>
        </template>
        Зарегистрироваться
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {ICreateUser} from "@/api/auth";

const emit = defineEmits(['onSignIn', 'onSignUp']);

const form = reactive<ICreateUser>({
  name: "",
  email: "",
  password: "",
})

const onLogin = () => emit('onSignIn', form);
const onSignUp = () => emit('onSignUp');
</script>

<style scoped lang="scss">
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
