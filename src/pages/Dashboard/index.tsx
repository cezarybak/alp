import { Header, SearchList, Tabel } from 'src/components';
import { DashboardWrapper, Line } from './styled';

export const Dashboard = () => (
  <>
    <Header />
    <DashboardWrapper>
      <SearchList />
      <Line />
      <Tabel />
    </DashboardWrapper>
  </>
);
