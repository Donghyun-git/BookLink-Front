import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { axiosAuthInstance } from '../../apis/config/axios';
import * as env from '../../../env.config';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const urlSearchParams = new URLSearchParams(params);
  const code = urlSearchParams.get('code');

  useEffect(() => {
    (async () => {
      try {
        if (!code) {
          throw new Error('카카오 인증 실패, 로그인 페이지로 돌아갑니다.');
        }
        // 백엔드 서버로 인가 코드 보내서 서버에서 http 요청 보내기.
        //cors.
        const uri = 'https://kauth.kakao.com/oauth/token';

        const payload = {
          grant_type: 'authorization_code',
          client_id: env.VITE_APP_REST_API_KEY,
          redirect_uri: env.VITE_APP_REDIRECT_URL,
          code: code,
          client_secret: env.VITE_APP_CLIENT_SECRET,
        };

        const response = await axiosAuthInstance.post(uri, payload);
        console.log(response);
      } catch (error) {
        alert(error.message);
        navigate('/login');
      }
    })();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoLogin;
