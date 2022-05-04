import { useGetCompanysList } from 'src/hooks';
import { CompanyElement } from '../CompanyElement';
import { Spinner } from '../Spinner';

export const SearchList = () => {
  const { data, loading, search, handleSetSearch } = useGetCompanysList();

  return (
    <div>
      <span>Company Name</span>
      <input type="text" value={search || undefined} onChange={handleSetSearch} />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <ul>
            {data?.bestMatches?.map((element, index) => (
              <CompanyElement key={index} element={element} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
