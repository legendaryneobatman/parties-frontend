<script setup lang="ts">
interface IProfileInfoTilesProps {
  statistics: Record<string, number>
}
const props = defineProps<IProfileInfoTilesProps>()
</script>

<template>
  <div class="flex w-full">
    <div
      v-for="(value, key) in statistics"
      :key="key"
      class="flex flex-col flex-grow items-center justify-center text-gray-500 capitalize">
      {{ key }}
      <span class="font-semibold text-lg">{{ value }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
