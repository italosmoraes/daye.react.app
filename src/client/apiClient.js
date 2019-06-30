import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://front-end-test-bvhzjr6b6a-uc.a.run.app/',
    timeout: 1000,
    headers: {}
});

export default instance;
