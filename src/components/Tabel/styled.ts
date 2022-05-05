import styled from 'styled-components';

type TabelElementBodyProps = {
  isEven: boolean;
  isPointer?: boolean;
};

type TabelRow = {
  isPointer?: boolean;
};

export const TabelWraper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const TabelContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const TabelStyled = styled.table`
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  padding: 0;
  background-color: gray;
`;

export const TabelElementHeader = styled.th`
  padding: 16px 8px;

  margin: 0;
  color: white;
  height: 100%;
  background-color: gray;
  border: 1px solid black;
`;

export const TabelRow = styled.tr<TabelRow>`
  cursor: ${(props) => (props.isPointer ? 'pointer' : 'default')};
  border: 1px solid black;
  background-color: gray;
  margin: 0;
  padding: 0;
  border: 1px solid black;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const TabelElementBody = styled.th<TabelElementBodyProps>`
  background-color: ${(props) => (props.isEven ? 'palevioletred' : 'white')};
  border: 1px solid black;
  ${(props) => props.isPointer && { cursor: 'pointer' }};
  padding: 16px 8px;

  color: black;
`;
