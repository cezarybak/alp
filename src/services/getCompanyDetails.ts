import { CompanyDetails } from '../types/CompanyDetails';
import { REACT_APP_API_KEY, REACT_APP_ENDPOINT_URL } from './env';

export const getCompanyDetails = async (symbol: string): Promise<CompanyDetails> =>
  await fetch(
    `${REACT_APP_ENDPOINT_URL}/query?function=OVERVIEW&symbol=${symbol}&apikey=${REACT_APP_API_KEY}`,
  )
    .then((e) => e.json())
    .catch((e) => {
      throw new Error(e);
    });
