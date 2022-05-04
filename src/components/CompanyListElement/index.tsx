import { useFavoriteContext } from '../../hooks';
import { CompanyElement } from '../../types/SearchCompanyList';

type CompnayListElementProps = {
  element: CompanyElement;
};

export const CompnayListElement = ({ element }: CompnayListElementProps) => {
  const { setFavoriteData, favoriteData } = useFavoriteContext();

  return (
    <li>
      <span>{`${element['1. symbol']} - ${element['2. name']}`}</span>
      <button
        disabled={Boolean(
          favoriteData.find((favoriteElement) => favoriteElement.symbol === element['1. symbol']),
        )}
        onClick={() =>
          setFavoriteData((prev) => {
            return [...prev, { company: element['2. name'], symbol: element['1. symbol'] }];
          })
        }
      >
        +
      </button>
    </li>
  );
};
