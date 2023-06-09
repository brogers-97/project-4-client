import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    'Access-Control-Allow-Credentials': true,
    crossorigin: true,
})