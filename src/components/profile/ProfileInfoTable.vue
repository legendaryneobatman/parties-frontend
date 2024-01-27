<script setup lang="ts">
interface IProfileInfoProps {
  info: Record<string, string>
}
const props = defineProps<IProfileInfoProps>();
</script>

<template>
  <div class="flex flex-col gap-2 mb-8">
    <div v-for="(value, key) in info" :key="value" class="grid grid-cols-12">
      <div class="col-span-1 capitalize">{{ key }}:</div>
      <div class="col-span-5">{{ value }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
