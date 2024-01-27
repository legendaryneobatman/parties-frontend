<script lang="ts" setup>
interface IProfileInfoProps {
  birthdate?: string;
  address?: string;
  email?: string;
  description?: string;
}

const props = defineProps<IProfileInfoProps>();
</script>

<template>
  <div class="flex flex-col gap-2 mb-8">
    <div class="grid grid-cols-2">
      <div class="col-span-1 capitalize font-semibold">День рождения:</div>
      <div class="col-span-1">{{ birthdate }}</div>
    </div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 capitalize font-semibold">Адрес:</div>
      <div class="col-span-1">{{ address }}</div>
    </div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 capitalize font-semibold">Email:</div>
      <div class="col-span-1">{{ email }}</div>
    </div>
    <div class="mt-4">
      <p class="text-pretty">{{description}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
