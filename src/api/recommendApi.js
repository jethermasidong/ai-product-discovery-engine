import api from './api.js';


export const generateProducts = async (formData) => {
    try {
        const response = await api.post('/recommendations', formData);
        return response.data;
    } catch (err) {
        throw err.response?.text || err.message;
    }
};