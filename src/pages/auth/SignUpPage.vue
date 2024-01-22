<template>
  <sign-up-form @on-sign-in="onSignIn"/>
</template>

<script setup lang="ts">
import {ICreateUser} from "@/api/auth";
import SignUpForm from "@/components/auth/SignUpForm.vue";
import {useRouter} from "vue-router";
import {commonPaths} from "@/router/commonPaths";
import {useUserStore} from "@/store/user";

const router = useRouter();
const userStore = useUserStore();
const onSignIn = async (payload: ICreateUser) => {
  await userStore.onSignUp(payload)
  if (userStore.isLogin) {
    await router.push({
      path: commonPaths.MAIN
    })
  }
}

</script>

<style scoped>

</style>
