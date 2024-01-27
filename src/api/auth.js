import { axiosInstance } from "@/api/index";
export async function signUp(payload) {
    return (await axiosInstance.post(`/auth/sign-up`, payload))?.data;
}
export async function signIn(payload) {
    return (await axiosInstance.post(`/auth/sign-in`, payload))?.data;
}
//# sourceMappingURL=auth.js.map