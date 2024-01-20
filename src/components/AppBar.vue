<template>
  <header class="flex items-center">
    <router-link class="text-indigo-600 text-2xl font-bold" to="/">Тусовки</router-link>
    <div class="flex items-end ml-16 mr-auto">
      <router-link
          :to="commonPaths.PARTIES_PAGE"
          class="text-gray-500 font-semibold text-base hover:underline underline-offset-4 hover:text-indigo-600 transition-all duration-150 ease-in-out"
          :class="{['underline']: commonPaths.PARTIES_PAGE === $route.path}"
      >
        Список тусовок
      </router-link>
    </div>
    <div class="flex gap-2">
      <v-btn
        variant="outlined"
        class="text-gray-500 hover:text-indigo-600 transition-all duration-150 ease-in-out font-bold"
        :to="commonPaths.CREATE_PARTY"
      >
        Создать тусовку
      </v-btn>
      <v-btn class="text-gray-500 font-semibold text-base" variant="text" @click="onSignOut">Выйти</v-btn>
    </div>
  </header>
</template>

<script lang="ts" setup>
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

<style lang="scss" scoped>

</style>
