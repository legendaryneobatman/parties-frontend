<template>
    <div class="header">
      <img :src="partyInfo.img" class="img"/>
      <div class="party-info">
        <div class="party-info__header">
          <div class="party-info__title title">
            {{ partyInfo.title }}
          </div>
          <div class="party-info__text subtitle">
            {{ partyInfo.subtitle }}
          </div>
        </div>
        <div class="party-info__address">
          <div class="party-info__address--value text">
            {{ partyInfo.address }}
          </div>
        </div>
        <div class="party-info__guests-count text">
          Количество гостей: 4
        </div>
        <div class="party-info__rating text">
          Оценка тусовки:
          <div class="party-info__stars">
            ★★★★★
          </div>
        </div>
      </div>
      <div class="additional-info text">
        <div class="additional-info__date">
          {{ localeDate }}
        </div>
        <v-btn class="text" variant="outlined">
          Поделиться
        </v-btn>
      </div>
    </div>
  <v-divider></v-divider>
  <div class="grid">
    <add-card
      class="grid__add-card"
      :height="'300px'"
      :width="'300px'"
    >+
    <input class="grid__add-card--mask" @change="saveFile" type="file">
    </add-card>
    <photo-card
      v-for="file in partyInfo.files"
      :key="file.id"
      :img="`http://localhost:9876/files/${file.fileName}`"></photo-card>
  </div>
</template>

<script setup>
import PhotoCard from "@/components/UI/PhotoCard.vue";
import { createFile, getOnePartyById } from "@/api";
import { computed, reactive } from "vue";
import { months } from "@/dicts/monthsDict";
import AddCard from "@/components/UI/AddCard.vue";

const props = defineProps({ id: Number })
const partyInfo = reactive({})
async function getParty(id) {
  const response = await getOnePartyById(id)
  Object.assign(partyInfo, response)
}
getParty(props.id)


async function saveFile(event) {
  const imageFile = event.target.files[0]
  await createFile(imageFile, props.id)
}

const localeDate = computed(() => {
  const currentMonths = (new Date(partyInfo.date)).getMonth()
  const currentDate = (new Date(partyInfo.date)).getDate()
  const currentYear = (new Date(partyInfo.date)).getFullYear()
  return `${ currentDate } ${ months[currentMonths]} ${currentYear} г.`
})

</script>

<style scoped lang="scss">
.header {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  height: 370px;
  .img {
    width: 650px;
    height: 300px;
    border-radius: 36px;
    &__avatar {
      display:block;
      height:100%;
      object-fit: cover;
    }
  }
  .party-info {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    &__text {
      max-width: 300px;
      margin-bottom: 44px;
    }
    &__address {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F0F0F0;
      border-radius: 22px;
      &--value {
        padding: 10px 0;
        font-weight: bold;
      }
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
    justify-content: space-around;
    margin-left: auto;
  }
}
.grid {
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
  &__add-card {
    position: relative;
    &--mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
    }
  }
}

</style>
