<template>
    <v-card>
        <v-card-title>Создать вечеринку</v-card-title>
        <v-card-subtitle>Заполните поля</v-card-subtitle>
        <v-card-item>
            <v-form>
                <v-checkbox
                    v-model="thirdModel.wishList"
                    label="Добавить вишлист"
                />
            </v-form>
          <v-text-field
            v-model="thirdModel.img"
            label="Добавьте картинку(url)"
          ></v-text-field>
            <v-card-actions>
                <v-btn
                    color="green"
                    variant="outlined"
                    @click="onSubmit"
                >
                    Далее
                </v-btn>
                <v-btn
                    color="red"
                    variant="outlined"
                    @click="goToMainPage()"
                >
                    Отмена
                </v-btn>
            </v-card-actions>
        </v-card-item>
    </v-card>
</template>

<script setup lang="ts">

import {reactive} from "vue";
import { goToMainPage } from "@/utils/routeFunctions";

const thirdModel = reactive({
    wishList: false,
    img: '',
})

const emit = defineEmits(['submit'])

const onSubmit = () => {
    emit('submit', thirdModel)
}
</script>

<style scoped>

</style>
