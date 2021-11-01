import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    //cancelToken : axiosSource.token
});

 
export default apiClient;