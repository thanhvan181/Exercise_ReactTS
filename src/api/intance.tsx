import axios from "axios";

export const intance = axios.create({
    baseURL: 'http://localhost:3001'
})