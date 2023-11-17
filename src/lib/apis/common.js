import axios from 'axios';
import { useUserStore } from '../../store/useUserStore';
import { logout } from '../../lib/apis/authService';

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

axiosJsonInstance.interceptors.response.use(async (config) => {
  const { removeUserInfo } = useUserStore.getState();
  if (config.status.toString().startsWith('4')) {
    await logout();
    removeUserInfo();
    useUserStore.persist.clearStorage();
    alert('세션이 만료되어 로그아웃 합니다! 다시 로그인 해주세요!');
    location.href = '/';
  }
  return config;
});
