<template>
  <div class="card" @click="toCard(id)">
    <img v-lazy="{ src: img, error: 'https://cdn-icons-png.flaticon.com/512/3763/3763189.png'}" class="card__img">
    <div class="card__mask">
      <div class="card__date">
        {{ localeDate }}
      </div>
      <div class="card__title">
        {{ props.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { months } from "@/dicts/monthsDict";
import { computed } from "vue";

export interface IPartyCardProps {
  id: number,
  date: Date,
  text: string,
  img: string,
}
const props = defineProps<IPartyCardProps>()

const localeDate = computed(() => {
  const currentMonths = (new Date(props.date)).getMonth()
  const currentDate = (new Date(props.date)).getDate()
  return `${ currentDate } ${ months[currentMonths] }`
})

const emit = defineEmits(['onCardClick'])
function toCard(id: number) {
  emit('onCardClick', id)
}
</script>


<style scoped lang="scss">
.card {
  display: block;
  position: relative;
  cursor: pointer;


  &__img {
    width: 320px;
    height: 320px;
    border-radius: 36px;
    &[error] {
      background-color: #838383;
      color: #838383;
    }
  }

  &__mask {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    justify-content: center;
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 36px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .4);
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    opacity: 0;
    &:hover {
      transition: 0.2s ease-in-out;
      opacity: 1;
    }
  }
  &__date {
    font-size: 36px;
    font-weight: bold;
  }
}
</style>
