import axios from "axios"
const mockAxios = axios.create({
    baseURL:'/mock',
    timeout: 10000
})
export default mockAxios;