<template>
  <div>
    <div class="flex items-start gap-8">
      <v-img class="w-[200px] h-full" :src="diamond"/>
      <div class="">
        <h1 class="text-6xl font-bold text-indigo-600 mb-4">Сайт для тусовок</h1>
        <p class="text-2xl text-gray-500 mb-6">
          Здесь вы можете создать свою тусовку, пригласить друзей.
          Никогда больше не пропустишь важное событие
        </p>
        <v-btn
          variant="outlined"
          class="text-gray-500 hover:text-indigo-600 transition-all duration-150 ease-in-out font-bold"
          :to="commonPaths.CREATE_PARTY"
        >
          Создать тусовку
        </v-btn>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import diamond from '@/assets/images/diamond.webp'
import {commonPaths} from "@/settings/commonPaths";
</script>

<style lang="scss" scoped>
</style>
