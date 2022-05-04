import { useState, useEffect } from 'react';
import { getCompanyDetails } from '../services/getCompanyDetails';
import { CompanyDetails } from '../types/CompanyDetails';

export const useGetCompanyDetails = (id: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CompanyDetails | undefined>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCompanyDetails(id)
        .then((e) => {
          setData(e);
          setLoading(true);
        })
        .catch((e) => {
          setLoading(true);
        });
    }
  }, []);

  return {
    loading,
    data,
  };
};
