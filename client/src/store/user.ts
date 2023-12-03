import {defineStore} from "pinia";
import {ICreateUser, signIn, signUp} from "@/api/auth";
import Cookies from "js-cookie";

const getDefaultStore = () => ({
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
    async onSignIn(payload: ICreateUser) {
      const response =  await signIn(payload);
      console.log(response)
      Cookies.set('token', response.token);
      this.isLogin = true
    }
  },
})
