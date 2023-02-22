<template>
  <div class="main">
    <v-toolbar title="Parties">
      <v-btn icon>
        <v-icon icon="mdi-plus" @click="navigateToForm"/>
      </v-btn>
    </v-toolbar>

    <party-card
        class="ma-1"
        v-for="party in parties"
        :key="party.title"
        :title="party.title"
        :subtitle="party.subtitle"
        :text="party.text"
        :img="party.img"
    />
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import {router} from "@/router";
import {commonPaths} from "@/settings/commonPaths";
import PartyCard from "@/components/posts/PartyCard.vue";
import {models} from "@/components/mocks/partyModels";

const parties = reactive(models)

const navigateToForm = () => {
  router.push(commonPaths.CREATE_PARTY)
};
</script>

<style lang="scss" scoped>
</style>
