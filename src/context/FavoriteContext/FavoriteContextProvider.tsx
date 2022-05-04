import { ReactChild } from 'react';
import { FavoriteContext, useFavoriteData } from './FavoriteContext';

type Props = {
  children: ReactChild;
};

export const FavoriteContextProvider = ({ children }: Props) => {
  const favoriteData = useFavoriteData();

  return <FavoriteContext.Provider value={favoriteData}>{children}</FavoriteContext.Provider>;
};
