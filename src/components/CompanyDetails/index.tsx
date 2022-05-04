import { useNavigate } from 'react-router-dom';
import { useGetCompanyDetails } from 'src/hooks';
import {
  ButtonCompany,
  CompanyDescription,
  CompanyDetailsWraper,
  CompanyInfo,
  CompanyTitle,
} from './styled';

export const CompanyDetails = () => {
  const { data } = useGetCompanyDetails();
  const navigate = useNavigate();

  return (
    <CompanyDetailsWraper>
      <ButtonCompany onClick={() => navigate(-1)}>Go back</ButtonCompany>
      <CompanyTitle>{data?.Symbol}</CompanyTitle>
      <CompanyInfo>Address: {data?.Address}</CompanyInfo>
      <CompanyInfo>Market Capitalization: {data?.MarketCapitalization}</CompanyInfo>
      <CompanyDescription>{data?.Description}</CompanyDescription>
    </CompanyDetailsWraper>
  );
};
