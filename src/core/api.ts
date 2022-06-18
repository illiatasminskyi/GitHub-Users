import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
	baseURL: 'https://api.github.com/',
	responseType: 'json',
})

export default api
