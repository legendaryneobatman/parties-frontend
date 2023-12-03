import CreatePostPage from "@/pages/CreatePostPage.vue";
import {createRouter, createWebHistory, RouteLocationNormalized} from 'vue-router';
import PartiesPage from "@/pages/PartiesPage.vue";
import {commonPaths} from "@/settings/commonPaths";
import partyPage from "@/pages/PartyPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/SignInPage.vue";
import RegisterPage from "@/pages/SignUpPage.vue";
import {LayoutEnum} from "@/router/@types";
import Cookies from "js-cookie";
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
        props: true,
      },
      {
        path: commonPaths.PROFILE,
        component: ProfilePage,
      },
      {
        path: commonPaths.LOGIN,
        component: LoginPage,
        meta: {
          layout: LayoutEnum.LoginLayout
        }
      },
      {
        path: commonPaths.SIGN_UP,
        component: RegisterPage,
        meta: {
          layout: LayoutEnum.LoginLayout
        }
      }
    ]
  }
);


async function loadLayoutMiddleware(route: RouteLocationNormalized) {
  try {
    const { layout } = route.meta
    route.meta.layoutComponent = (await import(`@/layouts/${layout}.vue`)).default
  } catch (e) {
    const layout = 'AppLayout'
    route.meta.layoutComponent = (await import(`../layouts/${layout}.vue`)).default
  }
}

router.beforeEach(loadLayoutMiddleware)
router.beforeEach((to, from, next) => {
  const tokenExists = Cookies.get('token');

  if (!tokenExists && to.path !== commonPaths.LOGIN && to.path !== commonPaths.SIGN_UP) {
    next(commonPaths.LOGIN);
    return;
  }

  if (tokenExists && (to.path === commonPaths.LOGIN || to.path === commonPaths.SIGN_UP)) {
    next(commonPaths.MAIN);
    return;
  }

  next();
});

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
  }
}
