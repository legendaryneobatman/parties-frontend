import axios from "axios";
export const fetchSuggestionsByText = async (text) => {
    return (await axios.get(`https://geocode-maps.yandex.ru/1.x/`, {
        params: {
            apikey: import.meta.env.VITE_YMAP_API_KEY,
            format: 'json',
            geocode: text,
            ll: '58.0105,56.2502',
            spn: '3.552069, 2.400552'
        }
    })).data;
};
//# sourceMappingURL=maps.js.map