import axios from 'axios';

const API_URL = '/api'; // Assurez-vous que cela correspond à votre URL d'API

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
