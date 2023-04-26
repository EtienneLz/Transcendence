import axios from 'axios'
import { accountService } from './account.service'

const port = import.meta.env.VITE_APP_BACKEND_PORT;
const host = import.meta.env.VITE_APP_HOST;

const Axios = axios.create({
    baseURL: `http://${host}:${port}`
})

Axios.interceptors.request.use(request => {
    console.log(request)

    // request.headers.Access_Control_Allow_Origin = 'http://localhost:8080'
    let token = accountService.getToken()

    if (token) {
        request.headers.Authorization = 'Bearer '+ token
    }

    return request
})

export default {Axios}
