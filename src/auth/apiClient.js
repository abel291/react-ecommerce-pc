import axios from "axios"
console.log(import.meta.env)
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //withCredentials: true,
})

export default apiClient
