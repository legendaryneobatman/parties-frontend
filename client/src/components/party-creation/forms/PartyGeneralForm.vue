<template>
  <v-form>
    <v-text-field
        v-for="(form, key) in compValue"
        :key="form.label"
        :model-value="form.value"
        :label="form.label"
        @update:model-value="compValue = ({key, value: $event})"
    />
  </v-form>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {IPartyGeneralForm} from "@/components/party-creation/@types";

export interface IPartyGeneralFormProps {
  modelValue: IPartyGeneralForm,
}

const emit = defineEmits(['update:modelValue'])
const props = defineProps<IPartyGeneralFormProps>()

const compValue = computed({
  get: () => props.modelValue,
  set: ({key, value}) => emit('update:modelValue', {
    ...props.modelValue,
    [key]: {
      ...props.modelValue[key],
      value
    }
  })
})
</script>

<style scoped>
</style>
