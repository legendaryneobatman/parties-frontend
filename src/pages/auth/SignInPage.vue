<template>
  <sign-in-form @on-sign-in="onSignIn"/>
</template>

<script setup lang="ts">

import {ICreateUser} from "@/api/auth";
import {useRouter} from "vue-router";
import {commonPaths} from "@/router/commonPaths";
import {useUserStore} from "@/store/user";
import SignInForm from "@/components/auth/SignInForm.vue";

const router = useRouter();
const userStore = useUserStore();

const onSignIn = async (payload: ICreateUser) => {
  await userStore.onSignIn(payload)
  await router.push({
    path: commonPaths.MAIN,
  })
}
</script>

<style scoped>
</style>
