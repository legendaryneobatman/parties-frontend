<template>
  <v-navigation-drawer
      expand-on-hover
      rail
  >
    <v-list>
      <v-list-item
          v-for="item in menuItems"
          :title="item.label"
          :value="item.label"
          :prepend-icon="item.icon"
          link
          :to="item.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {useAppStore} from "@/store";

const { menuItems } = useAppStore();

</script>

<style scoped>

</style>
