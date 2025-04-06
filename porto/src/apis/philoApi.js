import axios from "axios";
// de url die voor jou van toepassing is:
const base_url = "https://my-json-server.typicode.com/TomGijsbers/reactPorto/quotes";


// http://192.168.129.35:3000/quotes

export const getQoutes = async () => {
    try {
        const response = await fetch(base_url);
        const data = await response.json();
        return { data: data }; // Make sure this matches your API response structure
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
};
// const base_url =  "https://api.api-ninjas.com/v1/quotes"

// export const getFavorites = async () => {
//     return axios.get(base_url);
// }
