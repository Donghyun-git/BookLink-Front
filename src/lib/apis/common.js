import axios from 'axios';

const getAxiosInstance = (contentType) => {
  const config = {
    baseURL: '/api/v1',
    headers: {
      'Content-Type': contentType,
    },
    withCredentials: true,
  };

  const instance = axios.create(config);
  instance.defaults.timeout = 12000;

  return instance;
};

export const axiosJsonInstance = getAxiosInstance('application/json');
export const axiosFormInstance = getAxiosInstance('multipart/form-data');
export const axiosAuthInstance = getAxiosInstance(
  'application/x-www-form-urlencoded'
);
