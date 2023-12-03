<template>
  <v-app-bar
    :color="`#ffffff`"
    class="app-bar"
  >
    <div class="container">
      <img :src="logo" alt="" class="logo" @click="goToMainPage"/>
      <div class="menu">
        <v-btn class="menu__btn" variant="text" @click="goToPartyCreatePage">
          Создать +
        </v-btn>
        <v-btn class="menu__btn" variant="text">
          Чат
        </v-btn>
        <v-btn class="menu__btn" variant="text">
          Архив
        </v-btn>
        <v-divider vertical class="mr-4"></v-divider>
<!--        <div v-if="store.isLogin" class="account" @click="goToProfilePage()">-->
<!--          <div class="account__name">Максим</div>-->
<!--          <img :src="avatar" class="account__img"/>-->
<!--        </div>-->
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.svg"
import {
  goToPartyCreatePage,
  goToMainPage,
  goToProfilePage,
  goToRegisterPage,
  goToLoginPage
} from "@/utils/routeFunctions";


</script>

<style scoped lang="scss">
.app-bar {
  display: flex;
  .container {
    margin: auto;
    max-width: 1274px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      cursor: pointer;
    }
    .menu {
      display: flex;
      margin-left: auto;
      &__btn {
        color: #838383;
      }
    }
    .account {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__name {
        cursor: pointer;
        color: #838383;
        padding-right: 10px;
      }
      &__img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }
  }
}

</style>
