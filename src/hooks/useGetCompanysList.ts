import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCompanysList } from 'src/services/getCompanysList';
import { SearchCompanyList } from 'src/types/SearchCompanyList';
import { useDebounce } from './useDebounce';

export const useGetCompanysList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SearchCompanyList | undefined>(undefined);
  const [params, setParams] = useSearchParams();
  const search = params.get('search');

  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setParams({ search: event.target.value });
  };

  const debounceSearchValue = useDebounce(search, 500);

  useEffect(() => {
    if (debounceSearchValue !== null) {
      setLoading(true);
      getCompanysList(debounceSearchValue)
        .then((e) => {
          setData(e);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [debounceSearchValue]);

  return {
    loading,
    data,
    handleSetSearch,
    search,
  };
};
