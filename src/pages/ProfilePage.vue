<template>
  <div class="w-full">
    <div class="w-full h-[150px] bg- background bg-center relative mb-[150px]">
      <avatar-with-file-upload :avatar="avatar" :model-value="file" @update:model-value="onFileUpload"/>
    </div>
    <profile-header
        :is-edit="isEdit"
        :user="userStore.user"
        @on-edit="onEdit"
        @on-save="onSave"
    />
    <div class="flex gap-8">
      <div class="flex flex-grow flex-col bg-gray-50 elevation-1 p-4">
        <profile-info-table
            :is-edit="isEdit"
            :user="userStore.user"
            :onSave="onSave"
        />
        <profile-info-tiles :statistics="statistics"/>
      </div>
      <div class="flex flex-col  bg-gray-50 elevation-1 p-4">
        <div class="flex gap-4">
          <v-btn
              class="rounded-xl text-indigo-700 text-capitalize"
              prepend-icon="mdi-plus"
              size="large"
              variant="outlined"
          >
            Отслеживать
          </v-btn>
          <v-btn
              :href="mailTo"
              class="text-indigo-700"
              density="default"
              icon="mdi-email"
              variant="outlined"
          />
          <div class="border-b-2 border-solid border-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import ProfileHeader from "@/components/profile/ProfileHeader.vue";
import ProfileInfoTable from "@/components/profile/ProfileInfoTable.vue";
import ProfileInfoTiles from "@/components/profile/ProfileInfoTiles.vue";
import {computed, ref} from "vue";
import {IUser, updateProfile} from "@/api/user";
import AvatarWithFileUpload from "@/components/AvatarWithFileUpload.vue";
import {uploadFile} from "@/api/file";
import {useUserStore} from "@/store/user";

dayjs.locale('ru');

const userStore = useUserStore();

const file = ref<File[]>([]);
const isEdit = ref(false);

const statistics = {
  parties: 0,
  images: 0,
  video: 0,
}

const avatar = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}/files/${userStore.user.avatar}`
})
const mailTo = `mailto:${userStore.user.email}`;

const onFileUpload = async (value: File[]) => {
  file.value = value

  if (file.value) {
    const fileName = await uploadFile(file.value[0]);

    await updateProfile({avatar: fileName});
    await userStore.fetchUser();
  }
}

const onEdit = () => {
  isEdit.value = true
}
const onSave = async (profile: Partial<IUser>) => {
  const newUser = await updateProfile({
    ...profile,
  })
  userStore.user = {
    ...userStore.user,
    ...newUser
  }
};


</script>

<style lang="scss" scoped>
.background {
  background-image: url("@/assets/login-background.png");
}
</style>
