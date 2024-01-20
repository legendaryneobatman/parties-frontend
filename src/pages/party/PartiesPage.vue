<script lang="ts" setup>

import PartiesGrid from "@/components/parties/PartiesGrid.vue";
import {onBeforeMount, ref} from "vue";
import {getAllParties, IPartyReturn} from "@/api/party";
import {useRouter} from "vue-router";

const router = useRouter()

const parties = ref<IPartyReturn[]>([])

onBeforeMount(async () => {
  parties.value = await getAllParties();
})

const toParty = (id: number) => {
  router.push(`/party/${id}`)
}
</script>

<template>
  <v-sheet>
    <h1 class="text-4xl text-indigo-600 font-bold mb-4">Список тусей</h1>
    <parties-grid :parties="parties" @on-card-click="toParty"/>
  </v-sheet>
</template>

<style lang="scss" scoped>

</style>
