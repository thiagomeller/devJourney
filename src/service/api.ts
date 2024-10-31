import axios from "axios";

export const baseURL = import.meta.env.VITE_URL_BASE


const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        "Content-Type": "application/json",
        "Accept-Enconding": "gzip, deflate, br"
    }
})

export const apiAuth = axios.create({
    baseURL: baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        "Content-Type": "application/json",
        "Accept-Enconding": "gzip, deflate, br"
    }
})

apiAuth.interceptors.request.use(
    async (req) => {
        const token = localStorage.getItem("authTOken")

        req.headers.Authorization = `Bearer ${token}`
        return req
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;