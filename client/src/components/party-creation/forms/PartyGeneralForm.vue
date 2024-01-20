<template>
  <v-form>
    <v-text-field
        v-for="(form, key) in modelValue"
        :key="form.label"
        :model-value="form.value"
        :label="form.label"
        @update:model-value="onFieldUpdate({key, value: $event})"
    />
  </v-form>
</template>

<script setup lang="ts">
import {IPartyGeneralForm} from "@/components/party-creation/@types";
import {ValueOf} from "@/utils/@types";

export interface IPartyGeneralFormProps {
  modelValue: IPartyGeneralForm,
}

const emit = defineEmits(['update:modelValue'])
const props = defineProps<IPartyGeneralFormProps>()

  const onFieldUpdate = ({key, value}: {key: keyof IPartyGeneralForm, value: ValueOf<IPartyGeneralForm>}) => {
    emit(
      'update:modelValue',
      {
      ...props.modelValue,
      [key]: { ...props.modelValue[key], value }
      }
    )
  };
</script>

<style scoped>
</style>
