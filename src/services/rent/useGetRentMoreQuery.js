import { useQuery } from '@tanstack/react-query';

import { rentMoreGetFetch } from '../../lib/apis/rent/rentMoreGetFetch';

export const useGetRentMoreQuery = (queryParams) =>
  useQuery(['@rent-more'], {
    queryFn: async () => {
      const { title } = queryParams;
      const res = await rentMoreGetFetch(title);

      return res.data.data;
    },
  });
