import { useQuery } from '@tanstack/react-query';
import { useUserStore } from '../../store/useUserStore';

import { getMyBookLinkGetFetch } from '../../lib/apis/mypage/getMyBookLinkGetFetch';

export const useGetMyBookLinkQuery = () =>
  useQuery(['@mypage'], {
    queryFn: async () => {
      const { isLogin } = useUserStore.getState();

      const res = (isLogin && (await getMyBookLinkGetFetch())) || {
        data: { data: { profile: false } },
      };

      return res.data.data;
    },
  });
