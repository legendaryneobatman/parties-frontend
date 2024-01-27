<template>
  <div class="w-full">
    <div class="w-full h-[150px] background bg-center relative mb-[150px]">
      <v-avatar :image="avatar" class="absolute bottom-[-75px] left-1/2 -translate-x-1/2 elevation-2" size="150"/>
    </div>
    <profile-header
      :first-name="firstName"
      :last-name="lastName"
      :username="username"
    />
    <div class="flex gap-8">
      <div class="flex flex-grow flex-col bg-gray-50 elevation-1 p-4">
        <profile-info-table :info="info"/>
        <profile-info-tiles :statistics="statistics"/>
      </div>
      <div class="flex flex-col bg-gray-50 elevation-1 p-4">
        <div class="flex gap-4">
          <v-btn
            class="bg-gradient-to-r from-indigo-500 to-fuchsia-600 rounded-xl"
            color="indigo-darken-2"
            prepend-icon="mdi-plus"
            size="large"
          >
            Отслеживать
          </v-btn>
          <v-btn
            density="default"
            class="bg-gradient-to-r from-indigo-500 to-fuchsia-600 rounded-xl text-white"
            color="white"
            icon="mdi-email"
          />
          <div class="border-b-2 border-solid border-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from '@/assets/images/diamond.webp'
import dayjs from "dayjs";
import ProfileHeader from "@/components/profile/ProfileHeader.vue";
import ProfileInfoTable from "@/components/profile/ProfileInfoTable.vue";
import ProfileInfoTiles from "@/components/profile/ProfileInfoTiles.vue";

const firstName = 'Иван'
const lastName = 'Иванов'
const username = 'ivaxo'

const info = {
  birthday: dayjs().format('DD MMMM YYYY'),
  city: 'Москва',
  country: 'Россия',
  phone: '+7 999 999 99 99',
  email: 'Xu5uS@example.com',
}

const statistics = {
  parties: 0,
  images: 0,
  video: 0,
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url("@/assets/login-background.png");
}
</style>
