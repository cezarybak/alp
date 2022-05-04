import { createContext, Dispatch, SetStateAction, useState } from 'react';

type FavoriteElement = {
  company: string;
  symbol: string;
};

type PortfolioType = {
  favoriteData: FavoriteElement[] | [];
  setFavoriteData: Dispatch<SetStateAction<FavoriteElement[] | []>>;
};

export const useFavoriteData = (): PortfolioType => {
  const [favoriteData, setFavoriteData] = useState<FavoriteElement[] | []>([]);

  return {
    favoriteData,
    setFavoriteData,
  };
};

export const FavoriteContext = createContext<PortfolioType | undefined>(undefined);
