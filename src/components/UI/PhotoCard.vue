<template>
  <div class="card">
    <img :src="props.img" alt="" class="card__img"/>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    width: 300px;
    height: 300px;
    border-radius: 36px;
  }
}
</style>
