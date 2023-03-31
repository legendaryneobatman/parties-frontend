<template>
  <div class="login-form">
      <v-text-field
        v-model="form.userName"
        class="login-form__input"
        label="Имя"
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        class="login-form__input"
        label="Пароль"
      ></v-text-field>
      <component
        :is="footer"
        @on-login="loginHandler"
        @on-register="registerHandler"
      />
    </div>

</template>

<script setup lang="ts">

import { markRaw, reactive, ref } from "vue";

const props = defineProps({
  footerType: {
    type: Object,
    required: true
  }
})

const form = reactive({
  userName: '',
  password: ''
})

const footer = ref()
footer.value = markRaw(props.footerType)

function loginHandler() {


  console.log('login');
}

function registerHandler() {


  console.log('register');
}
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  width: 400px;
  &__input {
    width: inherit;
  }
}
</style>
