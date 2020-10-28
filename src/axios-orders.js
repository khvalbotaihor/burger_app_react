import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://burger-application-react-51ed3.firebaseio.com/'
})

export default instance;