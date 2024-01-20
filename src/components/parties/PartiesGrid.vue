<script setup lang="ts">

import PartyCard from "@/components/PartyCard.vue";
import {IPartyReturn} from "@/api/party";

export interface IPartiesGridProps {
  parties: IPartyReturn[]
}

defineProps<IPartiesGridProps>()
const emit = defineEmits(['onCardClick'])

const onCardClick = (id: number) => {
  emit('onCardClick', id)
}
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <party-card
      v-for="party in parties"
      :key="`${party.title}+${party.description}`"
      :party="party"
      @on-card-click="onCardClick(party.id)"
    />
  </div>
</template>

<style scoped lang="scss">
</style>
