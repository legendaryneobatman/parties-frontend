export {}
import WelcomePage from "@/pages/WelcomePage.vue";
import {createRouter, createWebHashHistory} from 'vue-router';
import MainPage from "@/pages/MainPage.vue";

import {commonPaths} from "@/settings/commonPaths";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: commonPaths.default,
        component: WelcomePage,
        meta:{
          layout: 'WelcomeLayout',
        }
      },
      {
        path: commonPaths.main,
        component: MainPage,
        meta:{
        }
      },
    ]
  }
);

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
  }
}
