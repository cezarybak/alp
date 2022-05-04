import { FavoriteContext } from '../context/FavoriteContext/favoriteContext';
import { useContext } from 'react';

export const useFavoriteContext = () => {
  const data = useContext(FavoriteContext);
  if (data === undefined) {
    throw new Error('useFavoriteContext must be used within FavoriteProvider');
  }

  return data;
};
