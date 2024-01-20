import {axiosInstance} from "@/api/index";

export async function getAllParties() {
  const response = await axiosInstance.get(`/parties`);
  return response.data
}

export async function getOnePartyById(id: number) {
  const response = await axiosInstance.get(`/parties/${id}`);
  return response.data
}

export interface ICreatePartyBody {
  title: string,
  subtitle: string,
  description: string,
  date: string,
  address: string,
}

export async function createParty(requestBody: ICreatePartyBody) {
  const response = await axiosInstance.post(`/parties/create`, requestBody);
  return response.data
}

