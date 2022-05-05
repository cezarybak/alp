import styled from 'styled-components';

export const CompanyElementItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ElementContent = styled.span``;

export const ElementButton = styled.button`
  height: 20px;
  width: 20px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
`;
