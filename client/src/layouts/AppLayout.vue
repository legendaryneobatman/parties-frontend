<template>
  <v-layout align-center>
    <app-bar/>
    <nav-bar/>
    <v-main style="min-height: 300px;">
      <v-container>
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

<style scoped>

</style>
