import { useGetCompanysList } from 'src/hooks';
import { CompanyElement } from '../CompanyElement';
import { Spinner } from '../Spinner';
import {
  Label,
  Search,
  SearchIcon,
  SearchInputWraper,
  SearchListContainer,
  SearchWraper,
  UnorderedList,
} from './styled';

export const SearchList = () => {
  const { data, loading, search, handleSetSearch } = useGetCompanysList();

  return (
    <SearchListContainer>
      <SearchWraper>
        <Label htmlFor="search">Company Name</Label>
        <SearchInputWraper>
          <Search
            maxLength={50}
            type="text"
            id="search"
            value={search || undefined}
            onChange={handleSetSearch}
          />
          <SearchIcon />
        </SearchInputWraper>
      </SearchWraper>

      <SearchWraper>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {!!(data?.bestMatches?.length || 0 > 0) && (
              <>
                Search List
                <UnorderedList>
                  {data?.bestMatches?.map((element, index) => (
                    <CompanyElement key={index} element={element} />
                  ))}
                </UnorderedList>
              </>
            )}
          </>
        )}
      </SearchWraper>
    </SearchListContainer>
  );
};
