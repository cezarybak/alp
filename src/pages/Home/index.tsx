import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CompnayListElement } from '../../components';
import { getData } from '../../services/getCompanysList';

export const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useSearchParams();

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch({ search: event.target.value });
  };

  useEffect(() => {
    (async () => {
      const data = await getData(search.get('search') || '');
      setData(data);
    })();
  }, [search]);

  return (
    <>
      <h2>SDH Frontend Homework</h2>
      <div>
        <span>Company Name</span>
        <input type="text" value={search.get('search') || undefined} onChange={handleTitle} />
        <div>
          <ul>
            {data?.map((element, index) => (
              <CompnayListElement key={index} name={element} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
