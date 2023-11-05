import { useQuery } from '@tanstack/react-query';

import { myInfo } from '../../lib/apis/mypage/mypageService';

export const useGetMyInfoQuery = () =>
  useQuery(['@mypage-patch'], {
    queryFn: async () => {
      const res = await myInfo();

      return res;
    },
  });
