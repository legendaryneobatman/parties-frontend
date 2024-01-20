import {axiosInstance} from "@/api/index";

export async function getAllParties(): Promise<IPartyReturn[]> {
  const response = await axiosInstance.get(`/parties`);
  return response.data
}

export async function getOnePartyById(id: number | string): Promise<IPartyReturn> {
  const response = await axiosInstance.get(`/parties/${id}`);
  return response.data
}

export interface ICreatePartyBody {
  title: string,
  description: string,
  date: string,
  address: string,
}
export interface IPartyReturn {
  id: number,
  title: string,
  description: string,
  date: string,
  address: string,
}


export async function createParty(requestBody: ICreatePartyBody): Promise<IPartyReturn> {
  const response = await axiosInstance.post(`/parties/create`, requestBody);
  return response.data
}

export async function updateParty(id: string, requestBody: ICreatePartyBody): Promise<IPartyReturn> {
  const response = await axiosInstance.put(`/parties/${id}`, requestBody);
  return response.data
}

export async function deleteParty(id: string|number) {
  const response = await axiosInstance.delete(`/parties/${id}`)
  return response.data
}

