<template>
  <login-form @on-sign-in="onSignIn" @on-sign-up="onSignUp"></login-form>
</template>

<script setup lang="ts">

import LoginForm from "@/components/auth/LoginForm.vue";
import {ICreateUser} from "@/api/auth";
import {useRouter} from "vue-router";
import {commonPaths} from "@/settings/commonPaths";
import {useUserStore} from "@/store/user";

const router = useRouter();
const userStore = useUserStore();

const onSignIn = async (payload: ICreateUser) => {
  await userStore.onSignIn(payload)
  await router.push({
    path: commonPaths.MAIN,
  })
}
const onSignUp = () => {
  router.push({
    path: commonPaths.SIGN_UP,
  })
}
</script>

<style scoped>
</style>
