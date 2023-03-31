<script lang="ts" setup>
import {markRaw, ref, watch} from 'vue'
import {useRoute} from "vue-router";

const layout = ref()
const route = useRoute()

watch(route, async (to) => {
  if (to.meta.layout !== undefined) {
    const component = await import(`./layouts/${to.meta.layout}.vue`)
    layout.value = markRaw(component.default)
  } else {
    const component = await import(`./layouts/AppLayout.vue`)
    layout.value = markRaw( component.default)
  }
})
</script>

<template>
  <v-app>
    <component :is="layout"/>
  </v-app>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
* {
  font-family: 'Inter', sans-serif;
}
.title {
  font-size: 48px;
  font-weight: bold;
  color: #838383;
}
.subtitle {
  font-size: 20px;
  color: #838383;
}
.text {
  font-size: 16px;
  color: #838383;
}
</style>
