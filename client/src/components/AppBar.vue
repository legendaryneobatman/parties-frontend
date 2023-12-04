<template>
  <v-app-bar
      :color="`#ffffff`"
  >
    <v-img :src="logo" alt="" @click="goToMainPage"/>
    <v-btn-group v-if="userStore.isLogin">
      <v-btn variant="text" @click="goToPartyCreatePage">
        Создать +
      </v-btn>
      <v-btn variant="text" @click="onSignOut">
        Выйти
      </v-btn>
    </v-btn-group>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.svg"
import {goToMainPage, goToPartyCreatePage,} from "@/utils/routeFunctions";
import {useUserStore} from "@/store/user";
import {commonPaths} from "@/settings/commonPaths";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const onSignOut = () => {
  userStore.onSignOut();
  router.push({
    path: commonPaths.SIGN_IN
  })
}
</script>

<style scoped lang="scss">

</style>
