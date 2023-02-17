<template>
    <v-card>
        <v-card-title>Создать вечеринку</v-card-title>
        <v-card-subtitle>Заполните поля</v-card-subtitle>
        <v-card-item>
            <v-form>
                <v-checkbox label="Добавить вишлист"></v-checkbox>
            </v-form>
            <v-file-input label="Добавьте картинку"/>
            <v-card-actions>
                <v-btn
                    color="green"
                    variant="outlined"
                    @click="onSubmit"
                >
                    Далее
                </v-btn>
                <v-btn color="red" variant="outlined">Отмена</v-btn>
            </v-card-actions>
        </v-card-item>
    </v-card>
</template>

<script setup lang="ts">

import {reactive} from "vue";
import CustomCalendar from "@/components/CustomCalendar.vue";

const party = reactive({
    date: '',
    place: '',
})

const emit = defineEmits(['submit'])

const onSubmit = () => {
    emit('submit', party)
}
</script>

<style scoped>

</style>
