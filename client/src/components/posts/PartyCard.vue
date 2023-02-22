

<script setup lang="ts">
import {ref} from "vue";

export interface IPartyCardProps {
  title: string,
  subtitle: string,
  text: string,
  img: string,
  place: string
}
const {
  title,
  subtitle,
  text,
  img,
} = defineProps<IPartyCardProps>()

const show = ref(false)
</script>

<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-img
            :src="img"
            height="200px"
            cover
        ></v-img>

        <v-card-title>
            {{ title }}
        </v-card-title>

        <v-card-subtitle>
            {{ subtitle }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn
                color="orange-lighten-2"
                variant="text"
            >
                Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
            ></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{ text }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<style scoped>

</style>
