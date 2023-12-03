import {axiosInstance} from "@/api/index";

export async function getAllParties(){
    const response = await axiosInstance.get(`/party`);
    return response.data
}

export async function getOnePartyById(id: number){
    const response = await axiosInstance.get(`/party/${id}`);
    return response.data
}

export async function createParty<T1>(requestBody : T1) {
    const response = await axiosInstance.post(`/party/create`, requestBody);
    return response.data
}

