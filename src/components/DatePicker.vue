<script lang="ts" setup>
import {computed, ref} from "vue";
import dayjs from "dayjs";
import 'dayjs/locale/ru'
export interface IDatePickerProps {
  label?: string
  modelValue: string
  hint?: string
  error?: boolean
}

const props = withDefaults(defineProps<IDatePickerProps>(), {
  label: 'default label',
  hint: '',
  error: false
})
const emits = defineEmits(['update:modelValue'])

const isOpen = ref(false);
const date = ref();
const updateDate = (date: string) => {
  emits('update:modelValue', date)
}
const displayDate = computed(() => {
  return dayjs(date.value).locale('ru').format('DD MMMM YYYY');
});

const onFocus = () => {
  isOpen.value = true
}
const onBlur = () => {
  isOpen.value = false
}
</script>

<template>
  <div
    v-click-outside="onBlur"
      class="relative h-full overflow-visible"
  >
    <v-text-field
        :label="label"
        :model-value="displayDate"
        :hint="hint"
        :error="error"
        variant="plain"
        @focus="onFocus"
    />
    <v-date-picker
        v-show="isOpen"
        v-model="date"
        class="absolute top-full left-0 z-10 border-2"
        @update:model-value="updateDate"
    >
      <template #title></template>
      <template #default></template>
      <template #actions>
        <v-btn class="w-full" variant="outlined" @click="onBlur">Сохранить</v-btn>
      </template>
    </v-date-picker>
  </div>
</template>

<style lang="scss">
.v-picker-title {
  @apply p-0;
}
</style>
