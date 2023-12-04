<template>
  <v-date-picker
    @update:model-value="onDateUpdate"
  />
  <v-text-field
    label="Адрес"
  />
</template>

<script setup lang="ts">

import {IPartyAdditionalForm} from "@/components/party-creation/@types";

export interface IPartyAdditionalFormProps {
  modelValue: IPartyAdditionalForm,
}
const emit = defineEmits(['update:modelValue', 'onDateUpdate'])
const props = defineProps<IPartyAdditionalFormProps>()

const onDateUpdate = (value: [Date]) => {
  emit('onDateUpdate', value)
}

</script>

<style scoped>

</style>
