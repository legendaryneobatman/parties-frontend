<script lang="ts" setup>

import {computed, ref} from "vue";

interface IAvatarWithFileUploadProps {
  avatar: string;
  modelValue: File[];
}

const props = defineProps<IAvatarWithFileUploadProps>()
const emit = defineEmits(['update:modelValue'])

const fileInput = ref<HTMLInputElement | null>(null)

const compValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const onAvatarUpload = () => fileInput.value?.click()

</script>

<template>
  <div class="wrapper absolute bottom-[-75px] left-1/2 -translate-x-1/2">
    <v-avatar
        :image="avatar"
        class="border-4 border-solid border-white elevation-2"
        size="150"
        v-bind="{...$attrs}"
    />
    <v-btn
        class="button opacity-0 absolute bg-white left-0"
        color="text-gray-500"
        density="comfortable"
        icon="mdi-camera"
        @click="onAvatarUpload"
    />
    <v-file-input
        ref="fileInput"
        v-model="compValue"
        accept="image/png, image/jpeg, image/bmp"
        class="hidden"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper:hover > .button {
    @apply opacity-100;
}
</style>
