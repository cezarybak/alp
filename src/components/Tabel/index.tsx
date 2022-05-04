import { useNavigate } from 'react-router-dom';
import { useFavoriteContext } from 'src/hooks';

export const Tabel = () => {
  const { favoriteData, setFavoriteData } = useFavoriteContext();
  const navigator = useNavigate();

  return (
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
  );
};
