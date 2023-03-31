<template>
  <div class="main">
    <add-card
      @click="goToPartyCreatePage"
    >+</add-card>
    <party-card
      class="ma-1"
      v-for="party in parties"
      :key="party.id"
      :title="party.title"
      :id="party.id"
      :date="party.date"
      :text="party.text"
      :img="party.img"
      @on-card-click="toCard"
    />
  </div>

</template>

<script lang="ts" setup>
import { ref } from "vue";
import {router} from "@/router";
import PartyCard from "@/components/PartyCard.vue";
import { getAllParties } from "@/api";
import { PartyResponse } from "@/dto/PartyResponse";
import { goToPartyCreatePage } from"@/utils/routeFunctions"
import AddCard from "@/components/UI/AddCard.vue";

const parties = ref<PartyResponse[]>([])

async function getAll() {
  const response = await getAllParties()
  parties.value = [...response]
}
getAll()

function toCard(id: number) {
  router.push(`/party/${id}`)
}

</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

</style>
