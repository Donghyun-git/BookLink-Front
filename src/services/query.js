import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      suspense: true,
      refetchInterval: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});
