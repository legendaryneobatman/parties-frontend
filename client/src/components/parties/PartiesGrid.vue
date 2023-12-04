<script setup lang="ts">

import {goToPartyCreatePage} from "@/utils/routeFunctions";
import {IParty} from "@/dto/IParty";
import PartyCard from "@/components/PartyCard.vue";
import AddCard from "@/components/UI/AddCard.vue";

export interface IPartiesGridProps {
  parties: IParty[]
}

defineProps<IPartiesGridProps>()
const emit = defineEmits(['onCardClick'])

const onCardClick = (id: number) => {
  emit('onCardClick', id)
}
</script>

<template>
  <div class="party-grid">
    <add-card @click="goToPartyCreatePage"/>
    <party-card
      v-for="party in parties"
      :key="party.id"
      class="ma-1"
      :party="party"
      @on-card-click="onCardClick"
    />
  </div>
</template>

<style scoped lang="scss">
.party-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
</style>
