import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://laravel-api-abel291.herokuapp.com/api",
    //withCredentials: true,
})



export default apiClient
