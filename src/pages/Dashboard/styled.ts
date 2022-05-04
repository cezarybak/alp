import styled from 'styled-components';

export const DashboardWrapper = styled.main`
  display: flex;

  @media screen and (max-width: 36rem) {
    flex-direction: column;
  }
`;

export const Line = styled.hr`
  border: 1px solid black;
  height: 50vh;
  margin-top: 25px;

  @media screen and (max-width: 36rem) {
    height: 0;
    width: 90%;
  }
`;
