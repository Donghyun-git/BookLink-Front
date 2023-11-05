import { useQuery } from '@tanstack/react-query';

import { bestSellerGetFetch } from '../../lib/apis/main/bestSellerGetFetch';

export const useBestSellerQuery = () =>
  useQuery(['@best-seller'], {
    queryFn: async () => {
      const res = await bestSellerGetFetch();

      const { item: data } = res.data.data;

      return [...data].splice(0, 2);
    },
  });
