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
                  @on-date-update="onDateUpdate"
              />
            </FormWrapper>
          </template>
        </v-stepper>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import PartyGeneralForm from "@/components/party-creation/forms/PartyGeneralForm.vue";
import PartyAdditionalForm from "@/components/party-creation/forms/PartyAdditionalForm.vue";
import ThirdForm from "@/components/party-creation/forms/ThirdForm.vue";
import {IPartyAdditionalForm, IPartyForm, IPartyGeneralForm} from "@/components/party-creation/@types";
import FormWrapper from "@/components/party-creation/FormWrapper.vue";

const stepsNames = [
  'Название и описание',
  'Место и время',
  'Еще немного',
]

const forms: IPartyForm[] = [
  {
    component: PartyGeneralForm,
    title: 'Название и описание',
  },
  {
    component: PartyAdditionalForm,
    title: 'Место и время',
  },
  {
    component: ThirdForm,
    title: 'Еще немного',
  }
]

const formState = ref<(IPartyGeneralForm | IPartyAdditionalForm)[]>([
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
    }
  },
  {
    date: {
      label: 'Дата',
      value: [],
    },
    address: {
      label: 'Адрес',
      value: '',
    }
  }
])

const onDateUpdate = (value: [Date]) => {
  formState.value[1].date.value = value
}

const itemNumber = (index: number) => String(index + 1)
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
