<template>
  <div class="footer">
    <v-btn color="success" @click="login">
      Войти
    </v-btn>
    <span class="footer__text text">
          Нет аккаунта?
        </span>
    <div class="footer__link" @click="goToRegisterPage()">
      Зарегистрироваться
    </div>
  </div>
</template>

<script setup lang="ts">

import { goToRegisterPage } from "@/utils/routeFunctions";

const emit = defineEmits(['onLogin'])
function login() {
  emit('onLogin')
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  &__text {
    margin-left: 20px;
  }
  &__link {
    cursor: pointer;
    text-decoration: underline;
    color: dodgerblue;
  }
}
</style>
