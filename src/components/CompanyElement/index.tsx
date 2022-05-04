import { useFavoriteContext } from '../../hooks';
import { CompanyElement as CompanyElementType } from 'src/types/SearchCompanyList';

type Props = {
  element: CompanyElementType;
};

export const CompanyElement = ({ element }: Props) => {
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
