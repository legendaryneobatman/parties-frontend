import CreatePostPage from "@/pages/CreatePostPage.vue";

export {}
import {createRouter, createWebHistory} from 'vue-router';
import PartiesPage from "@/pages/PartiesPage.vue";
import {commonPaths} from "@/settings/commonPaths";
import partyPage from "@/pages/PartyPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: commonPaths.MAIN,
        component: PartiesPage,
      },
      {
        path: commonPaths.CREATE_PARTY,
        component: CreatePostPage,
      },
      {
        path: commonPaths.PARTY_PAGE,
        name: 'partyPage',
        component: partyPage,
        props: true
      },
      {
        path: commonPaths.PROFILE,
        component: ProfilePage
      },
      {
        path: commonPaths.LOGIN,
        component: LoginPage
      },
      {
        path: commonPaths.REGISTER,
        component: RegisterPage
      }
    ]
  }
);

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
  }
}
