import axios from 'axios';

const api = axios.create({
    base_URL: import.meta.env.VITE_BACKEND_URL
});

export default api;