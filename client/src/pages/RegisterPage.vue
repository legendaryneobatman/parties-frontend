<template>
  <login-form :footer-type="registerFooter"></login-form>
</template>

<script setup lang="ts">
import LoginForm from "@/components/loginForm/LoginForm.vue";
import { markRaw, ref } from "vue";
import RegisterFooter from "@/components/loginForm/RegisterFooter.vue";

const registerFooter = ref()
registerFooter.value = markRaw(RegisterFooter)


</script>

<style scoped>

</style>
