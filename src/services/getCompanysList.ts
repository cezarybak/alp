import { SearchCompanyList } from 'src/types/SearchCompanyList';
import { REACT_APP_API_KEY, REACT_APP_ENDPOINT_URL } from './environmentData';

export const getCompanysList = async (search: string): Promise<SearchCompanyList> =>
  await fetch(
    `${REACT_APP_ENDPOINT_URL}/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${REACT_APP_API_KEY}`,
  )
    .then((e) => e.json())
    .catch((e) => {
      throw new Error(e);
    });
