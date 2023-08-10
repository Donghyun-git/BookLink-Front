import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const FreeReportDetailForm = lazy(() =>
  import(
    '../../components/Communities/Boards/FreeReportDetail/FreeReportDetailForm'
  )
);
const FreeReportDetailPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <FreeReportDetailForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default FreeReportDetailPage;
