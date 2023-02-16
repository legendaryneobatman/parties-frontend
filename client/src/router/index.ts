import CreatePostPage from "@/pages/CreatePostPage.vue";

export {}
import WelcomePage from "@/pages/WelcomePage.vue";
import {createRouter, createWebHistory} from 'vue-router';
import MainPage from "@/pages/PostsPage.vue";

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
        path: commonPaths.POSTS,
        component: MainPage,
        meta:{}
      },
      {
        path: commonPaths.CREATE_POST,
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
