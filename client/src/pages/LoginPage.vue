<template>
  <login-form :footer-type="loginFooter"></login-form>
</template>

<script setup lang="ts">

import LoginForm from "@/components/loginForm/LoginForm.vue";
import { markRaw, ref } from "vue";
import LoginFooter from "@/components/loginForm/LoginFooter.vue";

const loginFooter = ref()
loginFooter.value = markRaw(LoginFooter)
</script>

<style scoped>

</style>
