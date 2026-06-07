import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://linkedin-clone-nine-sigma.vercel.app/api/v1",
  withCredentials: true,
});