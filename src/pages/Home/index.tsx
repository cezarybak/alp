import { Header, SearchList, Spinner, Tabel } from 'src/components';
import { useGetCompanysList } from 'src/hooks';
import { DashboardWrapper } from './styled';

export const Home = () => {
  const { loading } = useGetCompanysList();

  return (
    <>
      <Header />
      <DashboardWrapper>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <SearchList />
            <Tabel />
          </>
        )}
      </DashboardWrapper>
    </>
  );
};
