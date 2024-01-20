<template>
  <v-card class="flex flex-col rounded-md aspect-square p-2 h-full" @click="toCard">
    <v-card-title class="text-indigo-700 text-lg font-semibold">{{ props.party.title }}</v-card-title>
    <v-card-text class="flex flex-col gap-1 text-grey-500">
      <div class="text-pretty">{{ props.party.description }}</div>
      <div class="flex flex-col w-full overflow-hidden justify-between mt-auto text-gray-600 font-medium">
        <span class="truncate">{{ props.party.address }}</span>
        <span class="text-nowrap">{{ displayDate }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

import {IPartyReturn} from "@/api/party";
import {computed} from "vue";
import dayjs from "dayjs";

export interface IPartyCardProps {
  party: IPartyReturn,
}
const props = defineProps<IPartyCardProps>()
const emit = defineEmits(['onCardClick'])

const displayDate = computed(() => dayjs(props.party.date).locale('ru').format('DD MMMM YYYY'));

const toCard = () => {
  emit('onCardClick')
}
</script>


<style scoped lang="scss">
</style>
