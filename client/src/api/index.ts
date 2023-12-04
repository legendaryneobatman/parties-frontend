import axios, {HttpStatusCode} from "axios";
import {useRouter} from "vue-router";
import Cookies from "js-cookie";

const router = useRouter();
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

axiosInstance.interceptors.request.use(
  config => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    if (error?.response?.status === HttpStatusCode.Unauthorized) {
      router.push({name: 'login'})
      return;
    }

    return Promise.reject(error)
  }
)
