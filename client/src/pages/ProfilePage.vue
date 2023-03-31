<template>
  <div class="header">
    <div class="img"></div>
    <div class="party-info">
      <div class="party-info__header">
        <div class="party-info__title title">
          Максим челик
        </div>
        <div class="party-info__text subtitle">
          Погоняло:
        </div>
      </div>
      <div class="party-info__alias"></div>
      <div class="party-info__party-count text">
        Количество организованных тусовок: 1
      </div>
      <div class="party-info__party-count text">
        Количество посещенных тусовок: 4
      </div>
      <div class="party-info__rating text">
        Оценка гостя:
        <div class="party-info__stars">
          ★★★★★
        </div>
      </div>
    </div>
    <div class="additional-info text">
      <div class="additional-info__socials">
        <img class="additional-info__socials--svg" :src="instagram" alt=""/>
        <img class="additional-info__socials--svg" :src="telegram" alt=""/>
        <img class="additional-info__socials--svg" :src="vk" alt=""/>
      </div>
      <v-btn class="text" variant="outlined">
        Поделиться
      </v-btn>
    </div>
  </div>
  <v-divider></v-divider>
  <div class="grid">
    <photo-card></photo-card>
    <photo-card></photo-card>
    <photo-card></photo-card>
    <photo-card></photo-card>
    <photo-card></photo-card>
    <photo-card></photo-card>
  </div>
</template>

<script setup>
import vk from "@/assets/vk-logo.svg"
import instagram from "@/assets/instagram-logo.svg"
import telegram from "@/assets/telegram-logo.svg"

import PhotoCard from "@/components/UI/PhotoCard.vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  height: 300px;
  margin-bottom: 60px;
  .img {
    width: 300px;
    height: 300px;
    border-radius: 36px;
    background: url("@/assets/kirill-photo.png");
    &__avatar {
      display:block;
      height:100%;
      object-fit: cover;
    }
  }
  .party-info {
    display: flex;
    flex-direction: column;
    margin-left: 56px;
    &__title {
      font-weight: 400;
    }
    &__text {
      max-width: 300px;
      margin-bottom: 10px;
    }
    &__alias {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 374px;
      height: 116px;
      background: no-repeat url("@/assets/shtrih.png");
    }
    &__guests-count {
      margin-top: 26px;
    }
    &__rating {
      display: flex;
    }
  }
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: auto;
    &__socials {
      margin-bottom: 20px;
      &--svg {
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }
  }
}
.grid {
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
}

</style>
