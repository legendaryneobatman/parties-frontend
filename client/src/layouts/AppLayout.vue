<template>
  <v-layout align-center>
    <app-bar/>
    <nav-bar/>
    <v-main class="main">
      <v-container class="main__container">
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AppLayout",
  components: {NavBar, AppBar}
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    min-height: 100vh;

    &__container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
