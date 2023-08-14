import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '../../components/Loading/Loading';

const MyInfoModifyForm = lazy(() =>
  import('../../components/Mypage/modify/MyInfoModifyForm')
);

const MyInfoModifyPage = () => {
  return (
    <ErrorBoundary fallback={<h2>에러</h2>}>
      <Suspense fallback={<Loading />}>
        <MyInfoModifyForm />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MyInfoModifyPage;
