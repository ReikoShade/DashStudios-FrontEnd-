import axios from "axios";
import router from "./router";

const api = axios.create();
api.interceptors.request.use(config => {

    if (localStorage.getItem('access_token')){
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    return config

}, error => { console.log(error) })

api.interceptors.response.use(config => {

    if (localStorage.getItem('access_token')){
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    return config

}, error => { 
    if(error.response.status === 401){
        router.push({ name: 'signin' })
    }
    else {
        console.log(error) 
    }
    
})

export default api;