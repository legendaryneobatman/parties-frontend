import { axiosInstance } from "@/api/index";
export async function findMe() {
    const response = await axiosInstance.get(`/user/me`);
    return response.data;
}
export async function updateProfile(payload) {
    const response = await axiosInstance.put(`/user`, payload);
    return response.data;
}
//# sourceMappingURL=user.js.map