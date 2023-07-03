import axios from "axios";

const apiCheck = axios.create();
apiCheck.interceptors.request.use(config => {

    if (localStorage.getItem('access_token')){
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    return config

}, error => { console.log(error) })

apiCheck.interceptors.response.use(config => {

    if (localStorage.getItem('access_token')){
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    return config

}, error => { 
    console.log(error) 
})

export default apiCheck;