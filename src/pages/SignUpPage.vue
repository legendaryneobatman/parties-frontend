<template>
  <sign-in-form @on-sign-in="onSignIn"/>
</template>

<script setup lang="ts">
import {ICreateUser} from "@/api/auth";
import SignInForm from "@/components/auth/SignInForm.vue";
import {useRouter} from "vue-router";
import {commonPaths} from "@/settings/commonPaths";
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
