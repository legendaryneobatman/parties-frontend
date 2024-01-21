<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="flex justify-between">
      <h1 class="inline-block text-2xl sm:text-3xl font-extrabold text-indigo-800 tracking-tight">{{party.id}}</h1>
      <div class="flex gap-2">
        <v-btn prepend-icon="mdi-trash-can" variant="outlined" class="text-indigo-600 font-bold" @click="toEdit">
          Изменить
        </v-btn>
        <v-btn prepend-icon="mdi-pencil" variant="outlined" class="text-red-700 font-bold" @click="toDelete(party.id)">
          Удалить
        </v-btn>
      </div>
    </div>
    <div>{{party.title}}</div>
    <p class="mt-2 text-lg text-slate-700 break-words">{{party.description}}</p>
    <div>{{party.address}}</div>
    <div>{{displayDate}}</div>
  </div>
</template>

<script lang="ts" setup>
import {computed, onBeforeMount, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

import {deleteParty, getOnePartyById, IPartyReturn} from "@/api/party";
import dayjs from "dayjs";
import {commonPaths} from "@/router/commonPaths";

const party = ref<IPartyReturn>({
  id: 0,
  title: '',
  description: '',
  address: '',
  date: '',
});
const route = useRoute();
const router = useRouter();

const displayDate = computed(() => dayjs(party.value.date).locale('ru').format('DD MMMM YYYY'));

const toEdit = () => {
  router.push(`/party/create/${route.params.id}`)
}
const toDelete = async (id: string | number) => {
  await deleteParty(id)
  await router.push(commonPaths.PARTIES_PAGE)
}

onBeforeMount(async () => {
  party.value = await getOnePartyById(route.params.id as string)
})
</script>

<style lang="scss" scoped>

</style>
