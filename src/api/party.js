import { axiosInstance } from "@/api/index";
export async function getAllParties() {
    const response = await axiosInstance.get(`/parties`);
    return response.data;
}
export async function getOnePartyById(id) {
    const response = await axiosInstance.get(`/parties/${id}`);
    return response.data;
}
export async function createParty(requestBody) {
    const response = await axiosInstance.post(`/parties/create`, requestBody);
    return response.data;
}
export async function updateParty(id, requestBody) {
    const response = await axiosInstance.put(`/parties/${id}`, requestBody);
    return response.data;
}
export async function deleteParty(id) {
    const response = await axiosInstance.delete(`/parties/${id}`);
    return response.data;
}
//# sourceMappingURL=party.js.map