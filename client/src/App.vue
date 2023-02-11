<script lang="ts" setup>
import {defineComponent, markRaw, ref, watch} from 'vue'
import AppLayout from "@/layouts/AppLayout.vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import {useRoute} from "vue-router";

const layout = ref()
const route = useRoute()

defineComponent({
  components: {
    AppLayout,
    WelcomeLayout,
  },
})

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
