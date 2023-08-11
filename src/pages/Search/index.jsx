import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const SearchResultForm = lazy(() =>
  import('../../components/SearchResult/SearchResultForm')
);

const SearchPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <SearchResultForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SearchPage;
