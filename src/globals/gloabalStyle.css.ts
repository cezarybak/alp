import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background:  ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.fonts};
    margin: 0;
    padding: 0;
}`;
