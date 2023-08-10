import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const BookClubsForm = lazy(() =>
  import('../../components/Communities/BookClubs/BookClubsForm')
);

const BookClubsPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <BookClubsForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default BookClubsPage;
