

<script setup lang="ts">
export interface IPostCardProps {
  title: string,
  subtitle: string,
  text: string,
}
const {
  title,
  subtitle,
  text,
} = defineProps<IPostCardProps>()
</script>

<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    </v-card-item>
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<style scoped>

</style>
