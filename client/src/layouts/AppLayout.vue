<template>
  <v-layout align-center>
    <app-bar/>
    <v-main class="main">
      <v-container class="main__container">
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import AppBar from "@/components/AppBar.vue";

export default {
  name: "AppLayout",
  components: {AppBar}
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    min-height: 100vh;
    background-color: #F5F5F5;

    &__container {
      margin-top: 100px;
      max-width: 1274px;
      height: 100%;
    }
  }
</style>
