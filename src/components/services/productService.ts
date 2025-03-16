import axios from 'axios';

const API_URL = '/api'; // Assurez-vous que cela correspond à votre URL d'API

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/getProducts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
