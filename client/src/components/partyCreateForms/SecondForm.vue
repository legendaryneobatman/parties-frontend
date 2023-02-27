<template>
    <v-card class="overflow-visible">
        <v-card-title>Создать вечеринку</v-card-title>
        <v-card-subtitle>Заполните поля</v-card-subtitle>
        <v-card-item>
            <v-form>
                <custom-calendar
                    v-model="secondModel.date"
                    label="Дата и время"
                ></custom-calendar>
                <v-text-field
                    v-model="secondModel.address"
                    label="Адрес"
                ></v-text-field>
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
import CustomCalendar from "@/components/UI/CustomCalendar.vue";
import { goToMainPage } from "@/utils/routeFunctions";

const secondModel = reactive({
    date: '',
    address: ''
})

const emit = defineEmits(['submit'])

const onSubmit = () => {
    emit('submit', secondModel)
}
</script>

<style scoped>

</style>
