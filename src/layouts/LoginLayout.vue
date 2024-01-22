<script setup lang="ts">
</script>

<template>
  <v-layout full-height class="relative">
    <h1 class="fixed ml-10 mt-10 router-link-active router-link-exact-active text-white text-2xl font-bold">Тусовки</h1>
    <v-main>
      <v-container class="fill-height justify-center">
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.v-main {
  background-image: url("@/assets/login-background.png");
  background-position: center;
  background-size: cover;
}
</style>
