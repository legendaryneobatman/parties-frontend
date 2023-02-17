<template>
    <date-picker locale="en" :model-value="modelValue" @update:model-value="onChange">
        <template v-slot="{ inputValue, togglePopover }">
            <v-text-field
                :model-value="inputValue"
                @focus="togglePopover"
                :label="label"
                readonly
            />
        </template>
    </date-picker>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import { DatePicker } from "v-calendar";
import 'v-calendar/dist/style.css';

defineProps({
    modelValue: {
        type: [Date, String],
        default: new Date(),
    },
    label: {
        type: String,
        default: '',
    }
})
const date = ref(null)

const emit = defineEmits(['update:modelValue'])
const onChange = (value: Date) => {
    emit('update:modelValue', value)
}




</script>

<style lang="scss">

</style>
