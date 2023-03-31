<template>
  <div
    class="add-card"
    :style="{ width: props.width, height: props.height }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
export interface ICardProps {
    width: {
      type: string,
      required: false,
    }
    height: {
      type: string,
      required: false,
    }
}

const props = defineProps<ICardProps>()


</script>

<style scoped lang="scss">
.add-card {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 96px;
  width: 320px;
  height: 320px;
  color: #CBCBCB;
  background-color: #F2F2F2;
  border-radius: 36px;
  &:hover {
   background-color: #dfdfdf;
   color: #b5b5b5;
   transition: 0.2s ease;
 }
}
</style>
