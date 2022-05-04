import { useNavigate, useParams } from 'react-router-dom';
import { Header, Spinner } from '../../components';
import { useGetCompanyDetails } from '../../hooks';

export const Company = () => {
  const params = useParams();
  const { id } = params;
  const { data, loading } = useGetCompanyDetails(id);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <main>
          <button onClick={() => navigate(-1)}>Go back</button>
          <h1>{data?.Symbol}</h1>
          <h4>Address: {data?.Address}</h4>
          <h4>Market Capitalization: {data?.MarketCapitalization}</h4>
          <span>{data?.Description}</span>
        </main>
      )}
    </>
  );
};
