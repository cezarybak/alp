import styled from 'styled-components';

export const CompanyElementItem = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: default;
`;

export const ElementContent = styled.span``;

export const ElementButton = styled.button`
  padding: 0 4px;
  height: 16px;
  text-align: center;
  margin-left: 8px;
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
