<template>
  <div class="container">
    <v-card>
      <v-card-title>Форма создания формы</v-card-title>
      <v-card-item>
        <v-stepper :items="stepsNames" show-actions>
          <template v-for="(form, index) in forms" :key="index" #[`item.${itemNumber(index)}`]>
            <FormWrapper :title="form.title">
              <component
                  :is="form.component"
                  v-model="formState[index]"
              />
            </FormWrapper>
          </template>
<!--          <v-stepper-actions>-->
<!--            <div>-->
<!--              <v-btn>Далее</v-btn>-->
<!--              <v-btn>Назад</v-btn>-->
<!--            </div>-->
<!--          </v-stepper-actions>-->
                      <v-btn @click="onSubmit">Сохранть</v-btn>
        </v-stepper>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import PartyGeneralForm from "@/components/party-creation/forms/PartyGeneralForm.vue";
import FormWrapper from "@/components/party-creation/FormWrapper.vue";
import {IPartyForm, IPartyGeneralForm} from "@/components/party-creation/@types";
import {ICreatePartyBody, createParty} from "@/api/party";

const stepsNames = [
  'Название и описание',
  'Место и время',
]
const forms: IPartyForm[] = [
  {
    component: PartyGeneralForm,
    title: 'Название и описание',
  },
  {
    component: PartyGeneralForm,
    title: 'Место и время',
  },
]

const formState = ref<IPartyGeneralForm[]>([
  {
    title: {
      label: 'Название тусовки',
      value: '',
    },
    subtitle: {
      label: 'Подназвание тусовки',
      value: '',
    },
    text: {
      label: 'Описание тусовки',
      value: '',
    },
  },
  {
    date: {
      label: 'Дата',
      value: '',
    },
    address: {
      label: 'Адрес',
      value: '',
    }
  },
])

const onSubmit = async () => {
  const form = formState.value.reduce((acc, formStateItem) => ({...acc, ...formStateItem}), {});
  const payload = {
    title: form.title.value,
    subtitle: form.subtitle.value,
    description: form.text.value,
    date: form.date.value,
    address: form.address.value
  }
  console.log(payload)
  await createParty(payload)
}


const itemNumber = (index: number) => String(index + 1)
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
