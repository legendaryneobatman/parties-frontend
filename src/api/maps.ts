import axios from "axios";
import {GeoObjectCollection} from "yandex-maps";

export const fetchSuggestionsByText = async (text: string): Promise<{ response: GeoObjectCollection }> => {
  return (await axios.get(`https://geocode-maps.yandex.ru/1.x/`,
    {
      params: {
        apikey: import.meta.env.VITE_YMAP_API_KEY,
        format: 'json',
        geocode: text,
        ll: '58.0105,56.2502',
        spn: '3.552069, 2.400552'
      }
    }
  )).data
}
