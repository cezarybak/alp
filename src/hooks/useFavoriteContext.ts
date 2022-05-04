import { useContext } from 'react';
import { FavoriteContext } from 'src/context/FavoriteContext/favoriteContext';

export const useFavoriteContext = () => {
  const data = useContext(FavoriteContext);
  if (data === undefined) {
    throw new Error('useFavoriteContext must be used within FavoriteProvider');
  }

  return data;
};
