<template>
  <div class="main">
    <parties-grid :parties="parties" @on-card-click="onCardClick"/>
  </div>

</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {router} from "@/router";
import {getAllParties} from "@/api/party";
import {IParty} from "@/dto/IParty";
import PartiesGrid from "@/components/parties/PartiesGrid.vue";

const parties = ref<IParty[]>([])

onBeforeMount(async () => {
  parties.value = await getAllParties();
})

const onCardClick = (id: number) => {
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
