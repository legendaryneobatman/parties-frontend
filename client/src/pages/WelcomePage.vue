<template>
  <div class="welcome">
    <div class="welcome__section welcome__section--image">
      <div class="welcome__title text-h1">Welcome to shop</div>
      <v-btn @click="redirectToMain">Get started</v-btn>
    </div>
    <div class="welcome__section">
    </div>
  </div>
</template>

<script>
import {router} from "@/router";

export default {
  name: "WelcomePage",
  methods: {
    redirectToMain() {
      router.push( 'main' )
    },
  },
}
</script>

<style lang="scss" scoped>
  .welcome {
    width: 100%;
    margin: 0 auto;
    height: 100%;

    &__section {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 400px;

      &--image {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(9,26,121,0.6251750700280112) 53%, rgba(12,0,255,0.5159313725490196) 100%);
        background-size: 100% auto;
      }
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5em;
    }
  }
</style>
