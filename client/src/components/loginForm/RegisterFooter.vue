<template>
  <div class="footer">
    <v-btn color="success" @click="register">
      Зарегистрироваться
    </v-btn>
    <span class="footer__text text">
          Есть аккаунт?
        </span>
    <div class="footer__link" @click="goToLoginPage()">
      Войти
    </div>
  </div>
</template>

<script setup lang="ts">
import { goToLoginPage } from "@/utils/routeFunctions";

const emit = defineEmits(['onRegister'])
function register() {
  emit('onRegister')
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
