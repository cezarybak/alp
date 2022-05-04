import { Navigate, Route, Routes } from 'react-router-dom';
import { FavoriteContext, useFavoriteData } from 'src/context';
import { Company, Home } from 'src/pages';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  const favoriteData = useFavoriteData();

  return (
    <Routes>
      <Route
        path={AppRoute.Home}
        element={
          <FavoriteContext.Provider value={favoriteData}>
            <Home />
          </FavoriteContext.Provider>
        }
      />
      <Route path={AppRoute.Company} element={<Company />} />
      <Route path="*" element={<Navigate to={AppRoute.Home} replace />} />
    </Routes>
  );
};
