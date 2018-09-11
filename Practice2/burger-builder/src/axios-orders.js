import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-new-burger-builder.firebaseio.com/'
});

export default instance;