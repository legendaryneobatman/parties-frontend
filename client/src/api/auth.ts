import {axiosInstance} from "@/api/index";

export interface ICreateUser {
  username: string;
  email: string;
  password: string
}

export interface ISignInForm {
  username: string
  password: string
}

export async function signUp(payload: ICreateUser):Promise<{token: string}>{
  return  (await axiosInstance.post(`/auth/sign-up`, payload))?.data;
}

export async function signIn(payload: ISignInForm):Promise<{token: string}>{
  return  (await axiosInstance.post(`/auth/sign-in`, payload))?.data;
}
