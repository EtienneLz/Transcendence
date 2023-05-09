import axios from 'axios'
import { accountService } from './account.service'

const { VITE_APP_BACKEND_PORT: port, VITE_APP_HOST: host } = await import.meta.env;

const Axios = axios.create({
    baseURL: `http://${host}:${port}`
})

Axios.interceptors.request.use(request => {
    console.log(request)

    let token = accountService.getToken()

    // request.headers.Access_Control_Allow_Origin = 'http://localhost:8080'
    if (token) {
        request.headers.Authorization = 'Bearer ' + token
    }

    return request
})

export default {Axios}
