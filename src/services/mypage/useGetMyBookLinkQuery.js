import { useQuery } from '@tanstack/react-query';

import { getMyBookLinkGetFetch } from '../../lib/apis/mypage/getMyBookLinkGetFetch';

export const useGetMyBookLinkQuery = () =>
  useQuery(['@mypage'], {
    queryFn: async () => {
      const res = await getMyBookLinkGetFetch();

      return res.data.data;
    },
  });
