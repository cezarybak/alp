import { useState, useEffect } from 'react';
import { getCompanyDetails } from '../services/getCompanyDetails';
import { CompanyDetails } from '../types/CompanyDetails';

export const useGetCompanyDetails = (symbol: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<CompanyDetails | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    getCompanyDetails(symbol)
      .then((e) => {
        setData(e);
        setLoading(true);
      })
      .catch((e) => {
        setError(e);
        setLoading(true);
      });
  }, [symbol]);

  return {
    loading,
    error,
    data,
  };
};
