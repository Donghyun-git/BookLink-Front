import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const BookClubsDetailForm = lazy(() =>
  import(
    '../../components/Communities/BookClubs/BookClubsDetail/BookClubsDetailForm'
  )
);
const BookClubsDetailPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <BookClubsDetailForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default BookClubsDetailPage;
