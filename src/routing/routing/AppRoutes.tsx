import { Navigate, Route, Routes } from 'react-router-dom';
import { Company, Home } from '../../pages';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route path={AppRoute.Company} element={<Company />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
