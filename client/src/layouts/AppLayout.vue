<template>
  <v-layout full-height align-center>
      <v-container>
        <app-bar class="mt-10 mb-8"/>
        <router-view/>
      </v-container>
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
</style>
