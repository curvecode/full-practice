import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://us-central1-ngfirestore-2a81f.cloudfunctions.net/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosClient;