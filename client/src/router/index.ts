import CreatePostPage from "@/pages/CreatePostPage.vue";

export {}
import WelcomePage from "@/pages/WelcomePage.vue";
import {createRouter, createWebHistory} from 'vue-router';
import MainPage from "@/pages/PartiesPage.vue";

import {commonPaths} from "@/settings/commonPaths";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: commonPaths.INDEX,
        component: WelcomePage,
        meta:{
          layout: 'WelcomeLayout',
        }
      },
      {
        path: commonPaths.PARTY,
        component: MainPage,
        meta:{},
      },
      {
        path: commonPaths.CREATE_PARTY,
        component: CreatePostPage,
        meta:{}
      },
    ]
  }
);

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
  }
}
