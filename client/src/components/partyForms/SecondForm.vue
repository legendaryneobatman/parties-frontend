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
                    v-model="secondModel.place.name"
                    label="Название места"
                ></v-text-field>
                <v-text-field
                    v-model="secondModel.place.link"
                    label="Ссылка на место"
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
                <v-btn color="red" variant="outlined">Отмена</v-btn>
            </v-card-actions>
        </v-card-item>
    </v-card>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import CustomCalendar from "@/components/CustomCalendar.vue";

const secondModel = reactive({
    date: '',
    place: {
        name: '',
        link: ''
    },
})

const emit = defineEmits(['submit'])

const onSubmit = () => {
    emit('submit', secondModel)
}
</script>

<style scoped>

</style>
