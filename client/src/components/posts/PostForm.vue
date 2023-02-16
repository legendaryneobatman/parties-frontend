<template>
  <v-card>
    <v-card-title>Create new post</v-card-title>
    <v-card-subtitle>Fill all fields and then proceed</v-card-subtitle>
    <v-card-item>
      <v-form>
        <v-text-field
            v-model="post.title"
            label="Title"
        ></v-text-field>
        <v-text-field
            v-model="post.subtitle"
            label="Subtitle"
        ></v-text-field>
        <v-text-field
            v-model="post.text"
            label="Text"
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn color="green" variant="tonal">save</v-btn>
        <v-btn color="red" variant="tonal">discard</v-btn>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">

const post = reactive({
  title: '',
  subtitle: '',
  text: '',
})

console.log(post);
</script>
import {reactive} from "vue";

<style scoped>

</style>
