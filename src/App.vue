<script lang="ts" setup>
import {onBeforeMount} from "vue";
import {useUserStore} from "@/store/user";

const userStore = useUserStore();

onBeforeMount(async () => {
  await userStore.fetchUser()
})

</script>

<template>
  <v-app>
    <component :is="$route.meta.layoutComponent"/>
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
