import api from './api.js';


export const generateProducts = async (payload) => {
    try {
        const response = await api.post('/recommendations', payload);
        return response.data;
    } catch (err) {
        throw err.response?.text || err.message;
    }
};