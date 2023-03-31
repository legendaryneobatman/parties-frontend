import axios from "axios";
import { PartyResponse } from "@/dto/PartyResponse";
export async function getAllParties(){
  try {
    const response = await axios.get("http://localhost:9876/party/all");
    return response.data
  } catch (e) {
    throw e;
  }
}
export async function getOnePartyById(id: number){
  try {
    const response = await axios.get(`http://localhost:9876/party/${id}`);
    return response.data
  } catch (e) {
    throw e;
  }
}

export async function createParty<T1>(requestBody : T1) {
  try {
    const response = await axios.post(`http://localhost:9876/party/create`, requestBody);
    return response.data
  } catch (e) {
    throw e;
  }
}

export async function createFile(imageFile: File, id: number) {
  const bodyFormData = new FormData();
  bodyFormData.append('image', imageFile);
  bodyFormData.append('partyId', id.toString())
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:9876/files",
      data: bodyFormData,
      headers: { "Content-type": "multipart/form-data" }
    })
    return response.data
  } catch (e) {
    throw e;
  }
}
