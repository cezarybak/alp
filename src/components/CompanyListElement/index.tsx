import { CompanyElement } from '../../types/SearchCompanyList';

type CompnayListElementProps = {
  element: CompanyElement;
};

export const CompnayListElement = ({ element }: CompnayListElementProps) => {
  return (
    <li>
      <span>{`${element['1. symbol']} - ${element['2. name']}`}</span>
      <button>+</button>
    </li>
  );
};
