<template>
  <div class="main">
    <v-toolbar title="Posts">
      <v-btn icon>
        <v-icon icon="mdi-plus" @click="navigateToForm"/>
      </v-btn>
    </v-toolbar>

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
import {reactive, ref} from "vue";
import {router} from "@/router";
import {commonPaths} from "@/settings/commonPaths";

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

const navigateToForm = () => {
  router.push(commonPaths.CREATE_POST)
};
</script>

<style lang="scss" scoped>
</style>
