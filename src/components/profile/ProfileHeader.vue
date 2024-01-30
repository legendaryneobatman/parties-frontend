<script setup lang="ts">
import {computed} from "vue";
import {IUser} from "@/api/user";

interface IPorfilePageProps {
  isEdit?: boolean
  user: Partial<IUser>
}
const props = withDefaults(defineProps<IPorfilePageProps>(), {
  isEdit: false,
  user: () => ({
    firstName: '',
    lastName: '',
    username: '',
  })
})

const emits = defineEmits(['onEdit'])

const buttonLabel = computed(() => props.isEdit ? 'Сохранить изменения' : 'Редактировать профиль')
const buttonIcon = computed(() => props.isEdit ? 'mdi-content-save' : 'mdi-pencil')

const onEdit = () => emits('onEdit')
</script>

<template>
  <div class="flex flex-col items-center justify-center mb-8">
    <h1 class="text-4xl">{{ user.firstName }} {{ user.lastName }}</h1>
    <h2 class="text-2xl text-gray-500">@{{ user.username }}</h2>
    <v-btn
      class="text-white mt-8 rounded-xl"
      :class="isEdit ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-fuchsia-600'"
      :prepend-icon="buttonIcon"
      @click="onEdit"
    >
      {{buttonLabel}}
    </v-btn>
  </div>
</template>

<style scoped lang="scss">

</style>
