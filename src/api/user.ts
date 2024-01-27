import {axiosInstance} from "@/api/index";

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export async function findMe(): Promise<IUser> {
  const response = await axiosInstance.get(`/user/me`);
  return response.data
}
