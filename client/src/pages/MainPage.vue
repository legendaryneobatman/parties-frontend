<template>
  <div class="main">

    <post-card
        class="ma-1"
        v-for="post in posts"
        :key="post.title"
        :title="post.title"
        :subtitle="post.subtitle"
        :text="post.text"
    />
  </div>
</template>

<script lang="ts" setup>
import PostCard from "@/components/posts/PostCard.vue";
import {reactive} from "vue";

const posts = reactive([
  {
    title: 'title',
    subtitle: 'subtitle',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, incidunt!'
  },
  {
    title: 'title1',
    subtitle: 'subtitle',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, incidunt!'
  },
])
</script>

<style lang="scss" scoped>
</style>
