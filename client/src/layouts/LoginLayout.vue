<script setup lang="ts">

import logo from "@/assets/logo.svg";
</script>

<template>
  <v-layout full-height>
    <v-app-bar>
      <v-img class="w-auto h-100" :src="logo"/>
    </v-app-bar>
    <v-main>
      <v-container class="container">
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.v-main {
  background-color: #E8F8F9;
}
.container {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
