<script setup lang="ts">

export interface IFormWrapperProps {
  title: string,
}
defineProps<IFormWrapperProps>()
</script>

<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>
      <slot/>
    </v-card-item>
  </v-card>
</template>

<style scoped lang="scss">

</style>
