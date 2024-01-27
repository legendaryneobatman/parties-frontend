<script setup lang="ts">
interface IPorfilePageProps {
  firstName?: string
  lastName?: string
  username?: string
}
const props = withDefaults(defineProps<IPorfilePageProps>(), {
  firstName: '',
  lastName: '',
  username: '',
})

const emits = defineEmits(['onEdit'])

const onEdit = () => emits('onEdit')
</script>

<template>
  <div class="flex flex-col items-center justify-center mb-8">
    <h1 class="text-4xl">{{ firstName }} {{ lastName }}</h1>
    <h2 class="text-2xl text-gray-500">@{{ username }}</h2>
    <v-btn
      class="bg-gradient-to-r from-indigo-500 to-fuchsia-600 mt-8 rounded-xl"
      color="indigo-darken-2"
      prepend-icon="mdi-pencil"
      @click="onEdit"
    >
      Редактировать профиль
    </v-btn>
  </div>
</template>

<style scoped lang="scss">

</style>
