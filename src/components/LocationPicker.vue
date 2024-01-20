<script setup lang="ts">
const PERM_LOCATION = [58.0105, 56.2502]
</script>

<template>
  <div style="width: 100%; height: 400px;">
    <yandex-map
      style="width: 100%; height: 400px;"
      :coords="PERM_LOCATION"
      :zoom="10"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
