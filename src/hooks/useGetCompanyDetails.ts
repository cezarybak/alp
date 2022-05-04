import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanyDetails } from 'src/services/getCompanyDetails';
import { CompanyDetails } from 'src/types/CompanyDetails';

export const useGetCompanyDetails = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CompanyDetails | undefined>();
  const params = useParams();

  const { id } = params;

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
