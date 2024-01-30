import {defineStore} from "pinia";
import {ICreateUser, ISignInForm, signIn, signUp} from "@/api/auth";
import Cookies from "js-cookie";
import {findMe, IUser} from "@/api/user";

export interface IUserState {
  isLogin: boolean,
  user: IUser
}

const getDefaultStore = (): IUserState => ({
  isLogin: !!Cookies.get('token'),
  user: {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
    birthdate: '',
    address: '',
    description: '',
  }
})

export const useUserStore = defineStore('user', {
  state: () => getDefaultStore(),
  getters: {
    getUserAvatar: (state) => {
      return`${import.meta.env.VITE_BASE_URL}/files/${state.user.avatar}`
    }
  },
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
    async fetchUser() {
      if (!this.isLogin) return
      this.user  = await findMe();
    }
  },
})
