import { useNavigate } from 'react-router-dom';
import { CompnayListElement, Header } from '../../components';
import { Spinner } from '../../components/Spinner';
import { useFavoriteContext, useGetCompanysList } from '../../hooks';

export const Home = () => {
  const { data, loading, search, handleSetSearch } = useGetCompanysList();
  const { favoriteData, setFavoriteData } = useFavoriteContext();
  const navigator = useNavigate();

  return (
    <>
      <Header />
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

      <div>
        Your Portfolio
        <table>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
            <th>Actions</th>
          </tr>
          {favoriteData?.map((item, index) => (
            <tr key={index} onClick={() => navigator(`/company/${item.symbol}`)}>
              <td>{item.company}</td>
              <td>{item.symbol}</td>
              <td
                onClick={(e) => {
                  e.stopPropagation();
                  setFavoriteData((prev) =>
                    prev.filter((favoriteItem) => favoriteItem.symbol !== item.symbol),
                  );
                }}
              >
                Remove
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
