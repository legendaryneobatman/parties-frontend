<template>
  <div class="container">
    <v-text-field
        v-model="v$.title.$model"
        :error="v$.title.$error"
        hint="Как называется тусе"
        label="Название*"
        variant="plain"
    />
    <v-text-field
        v-model="v$.description.$model"
        :error="v$.description.$error"
        hint="Подробное описание тусе, можно не заполнять"
        label="Описание"
        variant="plain"
    />
    <v-text-field
        v-model="v$.address.$model"
        :error="v$.address.$error"
        hint="Адрес, куда в этот раз, может в чайхану?"
        label="Адрес*"
        variant="plain"
    />
    <date-picker
        v-model="v$.date.$model"
        :error="v$.date.$error"
        hint="Выберите дату, когда сиё действо будет происходить"
        label="Дата"
    />
    <v-btn class="text-indigo-600" variant="outlined" @click="onSubmit">Сохранить</v-btn>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, reactive} from "vue";
import {createParty, getOnePartyById, ICreatePartyBody, updateParty} from "@/api/party";
import DatePicker from "@/components/DatePicker.vue";
import {useRoute, useRouter} from "vue-router";
import {minValue, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import dayjs from "dayjs";
import {notBeforeToday} from "@/utils/validators/time";

const route = useRoute();
const router = useRouter();

onBeforeMount(async () => {
  if (!route.params.id) return

  const response = await getOnePartyById(route.params.id as string)
  form.address = response.address
  form.date = response.date
  form.description = response.description
  form.title = response.title
})

const form = reactive<ICreatePartyBody>({
  title: '',
  description: '',
  address: '',
  date: ''
})


const rules = {
  title: {required},
  description: {required: false},
  address: {required},
  date: {required, notBeforeToday},
}
const v$ = useVuelidate(rules, form);

const onSubmit = async () => {
  v$.value.$touch()
  if (v$.value.$error) return
  if (route.params.id) {
    await updateParty(route.params.id as string, form)
  } else {
    await createParty(form)
  }

  await router.push('/parties')
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
