import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/favorite" element={<FavoritePage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
