import axios from "axios";

export const baseURL = process.env.URL_BASE

const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        "Content-Type": "application/json",
        "Accept-Enconding": "gzip, deflate, br"
    }
})

export default api;