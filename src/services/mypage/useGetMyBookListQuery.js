import { useQuery } from '@tanstack/react-query';

import { getMyBookListGetFetch } from '../../lib/apis/mypage/getMyBookListGetFetch';

export const useGetMyBookListQuery = () =>
  useQuery(['@BookList'], {
    queryFn: async () => {
      const res = await getMyBookListGetFetch();

      return res.data.data;
    },
  });
