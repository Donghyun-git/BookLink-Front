export const {
  VITE_SERVER_URL,
  VITE_APP_CLIENT_SECRET,
  VITE_APP_REST_API_KEY,
  VITE_APP_REDIRECT_URL,
} = import.meta.env;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_APP_REST_API_KEY}&redirect_uri=${VITE_APP_REDIRECT_URL}&response_type=code`;
