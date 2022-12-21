import routes from '@/routes/router.config';
import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Loading from '@/components/Loading';

const Routes = () => useRoutes(routes);
const RouterView = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterView;
