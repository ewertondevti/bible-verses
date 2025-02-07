import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  timeout: 20000, // 20s
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DEFAULT_USER_TOKEN}`,
  },
});

export default api;
