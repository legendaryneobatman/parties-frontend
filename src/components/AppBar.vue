<template>
  <header class="flex items-center">
    <router-link class="text-indigo-600 text-2xl font-bold" to="/">Тусовки</router-link>
    <div class="flex items-end gap-4 ml-16 mr-auto">
      <router-link
          :to="commonPaths.PARTIES_PAGE"
          class="text-gray-500 font-semibold text-base hover:underline underline-offset-4 hover:text-indigo-600 transition-all duration-150 ease-in-out"
          :class="{['underline']: commonPaths.PARTIES_PAGE === $route.path}"
      >
        Список тусовок
      </router-link>
    </div>
    <div class="flex items-center gap-2">
      <v-btn
        variant="outlined"
        class="text-gray-500 hover:text-indigo-600 transition-all duration-150 ease-in-out font-bold"
        :to="createPartyPath"
      >
        Создать тусовку
      </v-btn>
      <v-btn class="text-gray-500 font-semibold text-base" variant="text" @click="onSignOut">Выйти</v-btn>
      <router-link :to="commonPaths.PROFILE" class="flex items-center font-semibold text-black gap-2">
        <span class="text-md">{{userStore.user?.firstName}} {{ userStore.user?.lastName}}</span>
        <v-avatar :image="userStore.getUserAvatar" size="48" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/store/user";
import {commonPaths} from "@/router/commonPaths";
import {useRouter} from "vue-router";
import {computed} from "vue";

const userStore = useUserStore();
const router = useRouter();

const createPartyPath = computed(() => {
  return commonPaths.CREATE_PARTY.split(':')[0]
})
const onSignOut = () => {
  userStore.onSignOut();
  router.push({
    path: commonPaths.SIGN_IN
  })
}
</script>

<style lang="scss" scoped>

</style>
