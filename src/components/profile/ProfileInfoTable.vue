<script lang="ts" setup>
import {computed, ref} from "vue";
import {email as emailValidator} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {IUser} from "@/api/user";
import dayjs from "dayjs";
import DatePicker from "@/components/DatePicker.vue";

interface IProfileInfoProps {
  isEdit?: boolean;

  user: Partial<IUser>
  onSave: (profile: Partial<IUser>) => void
}

const props = withDefaults(defineProps<IProfileInfoProps>(), {
  isEdit: false,

  user: () => ({
    birthdate: '',
    address: '',
    email: '',
    description: '',
  })
});


const form = ref({
  birthdate: props.user.birthdate,
  address: props.user.address,
  email: props.user.email,
  description: props.user.description
})

const rules = {
  birthdate: {required: false},
  address: {required: false},
  email: {required: {email: emailValidator}},
  description: {required: false},
}
const v$ = useVuelidate(rules, form);

const birthdateDisplay = computed(() => dayjs(v$.value.birthdate?.$model).format('DD.MM.YYYY'))

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  props.onSave(form.value)
}

</script>

<template>
  <div class="flex flex-col gap-2 mb-8">
    <div class="grid grid-cols-2">
      <div class="col-span-1 capitalize font-semibold">Дата рождения:</div>
      <date-picker
          v-if="isEdit"
          v-model="v$.birthdate.$model"
          :error="v$.birthdate.$error"
          class="col-span-1"
          label="Дата рождения"
      />
      <div v-else class="col-span-1">{{ birthdateDisplay }}</div>
    </div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 capitalize font-semibold">Адрес:</div>
      <v-text-field
          v-if="isEdit"
          v-model="v$.address.$model"
          :error="v$.address.$error"
          class="col-span-1"
          density="compact"
          label="Адрес"
          type="text"
          variant="underlined"
      />
      <div v-else class="col-span-1">{{ v$.address.$model }}</div>
    </div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 capitalize font-semibold">Email:</div>
      <v-text-field
          v-if="isEdit"
          v-model="v$.email.$model"
          :error="v$.email.$error"
          class="col-span-1"
          density="compact"
          label="Email"
          type="email"
          variant="underlined"
      />
      <div v-else class="col-span-1">{{ v$.email.$model }}</div>
    </div>
    <div class="mt-4">
      <div class="capitalize font-semibold">О себе</div>
      <v-textarea
          v-if="isEdit"
          v-model="v$.description.$model"
          :error="v$.description.$error"
          label="Описание"
          variant="underlined"
          />
      <p v-else class="text-pretty">{{ user.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
