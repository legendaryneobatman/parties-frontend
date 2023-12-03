import {axiosInstance} from "@/api/index";

export interface ICreateUser {
  name: string;
  email: string;
  password: string
}

export async function signUp(payload: ICreateUser):Promise<{token: string}>{
  return  (await axiosInstance.post(`/auth/sign-up`, payload))?.data;
}

export async function signIn(payload: ICreateUser):Promise<{token: string}>{
  return  (await axiosInstance.post(`/auth/sign-in`, payload))?.data;
}
