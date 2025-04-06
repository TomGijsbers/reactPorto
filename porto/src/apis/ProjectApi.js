import axios from "axios";
// de url die voor jou van toepassing is:
const base_url = "https://my-json-server.typicode.com/TomGijsbers/reactPorto/projects";


// http://192.168.129.35:3000/quotes

export const getProjects = async () => {
    try {
        const response = await fetch(base_url);
        const data = await response.json();
        return { data: data }; // Make sure this matches your API response structure
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
};