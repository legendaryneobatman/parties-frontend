import {axiosInstance} from "@/api/index";

export interface IUser {
  id: number;
  username: string;
  email: string;

  firstName: string;
  lastName: string;
  avatar: string
  birthdate: string;
  address: string;
  description: string;
}

export async function findMe(): Promise<IUser> {
  const response = await axiosInstance.get(`/user/me`);
  return response.data
}

export async function updateProfile(payload: Omit<Partial<IUser>, 'id'>): Promise<IUser> {
  const response = await axiosInstance.put(`/user`, payload);
  return response.data
}
