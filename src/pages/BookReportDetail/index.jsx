import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const BookReportDetailForm = lazy(() =>
  import(
    '../../components/Communities/Boards/BookReportDetail/BookReportDetailForm'
  )
);

const BookReportDetailPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <BookReportDetailForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default BookReportDetailPage;
