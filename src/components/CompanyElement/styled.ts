import styled from 'styled-components';

export const CompanyElementItem = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: default;
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
    border-color: gray;
    color: gray;
    opacity: 0.5;
  }
`;
