import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        "Content-Type": "application/json",
        "Accept-Enconding": "gzip, deflate, br"
    }
})

export default api;