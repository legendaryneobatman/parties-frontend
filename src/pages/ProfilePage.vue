<template>
  <div class="w-full">
    <div class="w-full h-[150px] bg- background bg-center relative mb-[150px]">
      <avatar-with-file-upload :model-value="file" :avatar="avatar" @update:model-value="onFileUpload" />
    </div>
    <profile-header
        :first-name="user?.firstName"
        :last-name="user?.lastName"
        :username="user?.username"
    />
    <div class="flex gap-8">
      <div class="flex flex-grow flex-col bg-gray-50 elevation-1 p-4">
        <profile-info-table
          :birthdate="birthDay"
          :address="user?.address"
          :email="user?.email"
          :description="user?.description"
        />
        <profile-info-tiles :statistics="statistics"/>
      </div>
      <div class="flex flex-col  bg-gray-50 elevation-1 p-4">
        <div class="flex gap-4">
          <v-btn
              class="rounded-xl text-indigo-700 text-capitalize"
              prepend-icon="mdi-plus"
              variant="outlined"
              size="large"
          >
            Отслеживать
          </v-btn>
          <v-btn
              class="text-indigo-700"
              density="default"
              icon="mdi-email"
              variant="outlined"
              :href="mailTo"
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
import {computed, onBeforeMount, ref} from "vue";
import {findMe, IUser, updateProfile} from "@/api/user";
import AvatarWithFileUpload from "@/components/AvatarWithFileUpload.vue";
import {uploadFile} from "@/api/file";

dayjs.locale('ru');

const user = ref<Partial<IUser>>({
  firstName: '',
  lastName: '',
  username: '',
  avatar: '',
  email: '',
  birthdate: '',
  address: '',
  description: '',
});

const file = ref<File[]>([]);

const statistics = {
  parties: 0,
  images: 0,
  video: 0,
}

const birthDay = computed(() => {
  return dayjs(user.value.birthdate).format('DD MMMM YYYY')
})
const avatar = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}/files/${user.value.avatar}`
})
const mailTo = `mailto:${user.value.email}`;

const onFileUpload = async (value: File[]) => {
  file.value = value

  if (file.value) {
    const fileName = await uploadFile(file.value[0]);

    await updateProfile({avatar: fileName});
    await fetchUser();
  }
}

const fetchUser = async () => {
  user.value = await findMe();
}

onBeforeMount(async () => {
  await fetchUser();
})
</script>

<style lang="scss" scoped>
.background {
  background-image: url("@/assets/login-background.png");
}
</style>
