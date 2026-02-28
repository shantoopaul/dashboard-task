import axios from "axios";
import { isTokenExpired } from "../utils/token";

const api = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
});

api.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const user = JSON.parse(storedUser);

    if (user?.token && !isTokenExpired(user.token)) {
      config.headers.Authorization = `Bearer ${user.token}`;
    } else {
      localStorage.removeItem("user");
    }
  }

  return config;
});

export default api;
