import { CompnayListElement } from '../../components';
import { Spinner } from '../../components/Spinner';
import { useGetCompanysList } from '../../hooks';

export const Home = () => {
  const { data, loading, search, handleSetSearch } = useGetCompanysList();

  return (
    <>
      <h2>SDH Frontend Homework</h2>
      <div>
        <span>Company Name</span>
        <input type="text" value={search || undefined} onChange={handleSetSearch} />
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <ul>
              {data?.bestMatches.map((element, index) => (
                <CompnayListElement key={index} element={element} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
