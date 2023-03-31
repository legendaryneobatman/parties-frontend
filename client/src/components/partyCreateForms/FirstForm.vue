<template>
  <v-card >
    <v-card-title>Создать вечеринку</v-card-title>
    <v-card-subtitle>Заполните поля</v-card-subtitle>
    <v-card-item>
      <v-form>
        <v-text-field
            v-model="firstModel.title"
            label="Название"
        ></v-text-field>
        <v-text-field
            v-model="firstModel.subtitle"
            label="Тема"
        ></v-text-field>
        <v-textarea
            v-model="firstModel.text"
            label="Описание"
        ></v-textarea>
      </v-form>
        <v-card-actions>
            <v-btn
                color="green"
                variant="outlined"
                @click="onSubmit"
            >
                Далее
            </v-btn>
            <v-btn color="red" variant="outlined" @click="goToMainPage()">Отмена</v-btn>
        </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">

import {reactive} from "vue";
import { goToMainPage } from "@/utils/routeFunctions";

const firstModel = reactive({
  title: '',
  subtitle: '',
  text: '',
})


const emit = defineEmits(['submit'])

const onSubmit = () => {
    emit('submit', firstModel)
}



</script>

<style scoped>
</style>
