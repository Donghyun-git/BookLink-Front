import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const BoardsForm = lazy(() =>
  import('../../components/Communities/Boards/BoardsForm')
);

const BoardsPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <BoardsForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default BoardsPage;
