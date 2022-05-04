import { CompanyDetails, Header, Spinner } from 'src/components';
import { useGetCompanyDetails } from 'src/hooks';

export const Company = () => {
  const { loading } = useGetCompanyDetails();

  return (
    <>
      <Header />
      {loading ? <Spinner /> : <CompanyDetails />}
    </>
  );
};
