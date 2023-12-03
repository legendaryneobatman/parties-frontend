import {axiosInstance} from "@/api/index";

export async function createFile(imageFile: File, id: number) {
  const bodyFormData = new FormData();
  bodyFormData.append('image', imageFile);
  bodyFormData.append('partyId', id.toString())
  const response = await axiosInstance({
    method: "post",
    url: `/files`,
    data: bodyFormData,
    headers: { "Content-type": "multipart/form-data" }
  })
  return response.data
}
