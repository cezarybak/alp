import styled from 'styled-components';
import { ReactComponent as SearchSVG } from 'src/assets/searchIcon.svg';

export const Search = styled.input`
  width: 50%;
  border-radius: 16px;
  padding: 8px 24px;
  border: 1.5px solid black;

  :focus {
    outline: none;
  }
`;

export const SearchInputWraper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  left: 8px;
  height: 14px;
  width: 14px;
`;

export const SearchListContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  border: 2px solid black;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  cursor: default;
`;

export const SearchWraper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: auto;
  width: 90%;
`;

export const ListWraper = styled.div`
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  margin-top: 50px;
  width: 75%;

  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;

export const ListLabel = styled.label`
  margin: 0;
  padding: 0;
`;
