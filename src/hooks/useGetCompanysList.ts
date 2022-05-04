import { useDebounce } from './useDebounce';
import { getCompanysList } from '../services/getCompanysList';
import { useState, useEffect, ChangeEvent } from 'react';
import { SearchCompanyList } from '../types/SearchCompanyList';
import { useSearchParams } from 'react-router-dom';

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
    if (debounceSearchValue) {
      setLoading(true);
      getCompanysList(debounceSearchValue)
        .then((e) => {
          setData(e);
          setLoading(false);
        })
        .catch((e) => {
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
