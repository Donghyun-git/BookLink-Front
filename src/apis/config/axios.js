import axios from 'axios';
import { VITE_SERVER_URL } from '../../../env.config';

const getAxiosInstance = (contentType) => {
  const config = {
    baseURL: '/api/v1',
    headers: {
      'content-Type': contentType,
    },
    withCredentials: true,
  };
  console.log(VITE_SERVER_URL);
  const instance = axios.create(config);
  instance.defaults.timeout = 12000;

  return instance;
};

export const axiosJsonInstance = getAxiosInstance('application/json');
export const axiosFormInstance = getAxiosInstance('multipart/form-data');
