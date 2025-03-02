import axios from "axios";
// de url die voor jou van toepassing is:
const base_url = "http://localhost:3000/quotes";


export const getQoutes = async () => {
    try {
        const response = await fetch('http://localhost:3000/quotes');
        const data = await response.json();
        return { data: data }; // Make sure this matches your API response structure
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
};