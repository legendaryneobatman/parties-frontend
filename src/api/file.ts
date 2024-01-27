import {axiosInstance} from "@/api/index";

export async function uploadFile(imageFile: File) {
  const bodyFormData = new FormData();
  bodyFormData.append('image', imageFile);
  const response = await axiosInstance({
    method: "post",
    url: `/files`,
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
    }})
  return response.data
}
