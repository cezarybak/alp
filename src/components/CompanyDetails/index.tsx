import { useNavigate } from 'react-router-dom';
import { useGetCompanyDetails } from 'src/hooks';

export const CompanyDetails = () => {
  const { data } = useGetCompanyDetails();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{data?.Symbol}</h1>
      <h4>Address: {data?.Address}</h4>
      <h4>Market Capitalization: {data?.MarketCapitalization}</h4>
      <span>{data?.Description}</span>
    </div>
  );
};
