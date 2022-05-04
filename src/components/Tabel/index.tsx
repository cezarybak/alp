import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavoriteContext } from 'src/hooks';
import {
  TabelContainer,
  TabelElementBody,
  TabelElementHeader,
  TabelRow,
  TabelStyled,
  TabelWraper,
  Title,
} from './styled';

export const Tabel = () => {
  const { favoriteData, setFavoriteData } = useFavoriteContext();
  const navigator = useNavigate();

  const handleRemoveItem = (
    e: MouseEvent<HTMLTableHeaderCellElement, globalThis.MouseEvent>,
    symbol: string,
  ) => {
    e.stopPropagation();
    setFavoriteData((prev) => prev.filter((favoriteItem) => favoriteItem.symbol !== symbol));
  };

  const handleNavigationBack = (symbol: string) => navigator(`/company/${symbol}`);

  return (
    <TabelWraper>
      <TabelContainer>
        <Title>Your Portfolio</Title>
        <TabelStyled>
          <TabelRow>
            <TabelElementHeader>Company Name</TabelElementHeader>
            <TabelElementHeader>Symbol</TabelElementHeader>
            <TabelElementHeader>Actions</TabelElementHeader>
          </TabelRow>
          {favoriteData?.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <TabelRow key={index} onClick={() => handleNavigationBack(item.symbol)}>
                <TabelElementBody isEven={isEven}>{item.company}</TabelElementBody>
                <TabelElementBody isEven={isEven}>{item.symbol}</TabelElementBody>
                <TabelElementBody isEven={isEven} onClick={(e) => handleRemoveItem(e, item.symbol)}>
                  Remove
                </TabelElementBody>
              </TabelRow>
            );
          })}
        </TabelStyled>
      </TabelContainer>
    </TabelWraper>
  );
};
