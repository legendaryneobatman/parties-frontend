import {defineStore} from "pinia";
import {ICreateUser, ISignInForm, signIn, signUp} from "@/api/auth";
import Cookies from "js-cookie";
import {IUser} from "@/api/user";

export interface IUserState {
  isLogin: boolean,
}

const getDefaultStore = (): IUserState => ({
  isLogin: !!Cookies.get('token'),
})

export const useUserStore = defineStore('user', {
  state: () => getDefaultStore(),
  actions: {
    async onSignUp(payload: ICreateUser) {
      const { token} =  await signUp(payload);
      Cookies.set('token', token);
      this.isLogin = true
    },
    async onSignIn(payload: ISignInForm) {
      const response =  await signIn(payload);
      Cookies.set('token', response.token);
      this.isLogin = true
    },
    onSignOut() {
      Cookies.remove('token');
      this.isLogin = false
    },
  },
})
