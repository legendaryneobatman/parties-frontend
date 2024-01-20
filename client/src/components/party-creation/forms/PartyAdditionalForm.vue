<template>
  <v-row>
    <v-col>
      <v-date-picker
          @update:model-value="onFieldUpdate({key: 'date', value: $event})"
      />
    </v-col>
    <v-col>
<!--      <v-autocomplete-->
<!--          :items="suggests"-->
<!--          :model-value="modelValue.address.value"-->
<!--          :label="modelValue.address.label"-->
<!--          @update:search="onFieldUpdate({key: 'address', value: $event})"-->
<!--      />-->

<!--      <LocationPicker/>-->
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import {IPartyAdditionalForm} from "@/components/party-creation/@types";
import LocationPicker from "@/components/LocationPicker.vue";
import {ValueOf} from "@/utils/@types";

export interface IPartyAdditionalFormProps {
  modelValue: IPartyAdditionalForm,
  suggests: string[],
}

const emit = defineEmits(['update:modelValue'])
const props = defineProps<IPartyAdditionalFormProps>()

const onFieldUpdate = ({key, value}: { key: keyof IPartyAdditionalForm, value: ValueOf<IPartyAdditionalForm> }) => {
  emit(
      'update:modelValue',
      {
        ...props.modelValue,
        [key]: {...props.modelValue[key], value}
      }
  )
};
</script>

<style scoped>

</style>
