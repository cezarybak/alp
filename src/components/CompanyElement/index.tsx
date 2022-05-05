import { useFavoriteContext } from '../../hooks';
import { CompanyElement as CompanyElementType } from 'src/types/SearchCompanyList';
import { CompanyElementItem, ElementButton, ElementContent } from './styled';
import { useCallback, useMemo } from 'react';

type Props = {
  element: CompanyElementType;
};

export const CompanyElement = ({ element }: Props) => {
  const { setFavoriteData, favoriteData } = useFavoriteContext();

  const isElementDisabled = useMemo(
    () =>
      Boolean(
        favoriteData.find((favoriteElement) => favoriteElement.symbol === element['1. symbol']),
      ),
    [favoriteData, element],
  );

  const handleAddElement = useCallback(() => {
    return setFavoriteData((prev) => {
      return [...prev, { company: element['2. name'], symbol: element['1. symbol'] }];
    });
  }, [element]);

  return (
    <CompanyElementItem>
      <ElementContent>{`${element['1. symbol']} - ${element['2. name']}`}</ElementContent>
      <ElementButton disabled={isElementDisabled} onClick={handleAddElement}>
        +
      </ElementButton>
    </CompanyElementItem>
  );
};
