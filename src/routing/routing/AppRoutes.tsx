import { Navigate, Route, Routes } from 'react-router-dom';
import { FavoriteContextProvider } from 'src/context';
import { Company, Dashboard } from 'src/pages';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route
      path={AppRoute.Home}
      element={
        <FavoriteContextProvider>
          <Dashboard />
        </FavoriteContextProvider>
      }
    />
    <Route path={AppRoute.Company} element={<Company />} />
    <Route path="*" element={<Navigate to={AppRoute.Home} replace />} />
  </Routes>
);
