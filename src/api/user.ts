import {axiosInstance} from "@/api/index";

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export async function getAllUsers(): Promise<IUser[]> {
  const response = await axiosInstance.get(`/user`);
  return response.data
}
