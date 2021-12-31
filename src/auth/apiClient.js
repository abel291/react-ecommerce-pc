import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://laravel-api-ecommerce-pc.herokuapp.com/api",
    //withCredentials: true,
})



export default apiClient
