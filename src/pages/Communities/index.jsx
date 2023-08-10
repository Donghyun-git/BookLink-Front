import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const CommunitiesForm = lazy(() =>
  import('../../components/Communities/CommunitiesForm')
);

const CommunitiesPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <CommunitiesForm />
      </Suspense>
    </ErrorBoundary>
  );
};
export default CommunitiesPage;
