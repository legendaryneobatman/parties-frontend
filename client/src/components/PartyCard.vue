<template>
  <v-card :image="props.party.img" class="card rounded-xl ma-2" @click="toCard(props.party.id)">
    <v-card-title>{{ props.party.title }}</v-card-title>
    <v-card-subtitle>{{ props.party.subtitle }}</v-card-subtitle>
    <v-card-text>
      <v-card-item v-for="(key) in restParty" :key="`${key}`">{{ key}}</v-card-item>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

import { computed } from "vue";
import {IParty} from "@/dto/IParty";

export interface IPartyCardProps {
  party: IParty,
}
const props = defineProps<IPartyCardProps>()
const emit = defineEmits(['onCardClick'])

const restParty = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {img, title, subtitle, wishList, id, ...rest} = props.party
  return rest
})

const toCard = (id: number) => {
  emit('onCardClick', id)
}
</script>


<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  aspect-ratio: 1/1;

  border: 2px solid rgba(0, 0, 0, 0.09);
}
</style>
