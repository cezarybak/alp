import styled from 'styled-components';

export const Spinner = styled.div`
  position: fixed;
  z-index: 100;
  top: calc(50vh - (3.5rem / 2));
  left: calc(50vw - (3.5rem / 2));
  top: calc(50vh - (3.5rem / 2));
  left: calc(50vw - (3.5rem / 2));
  border: 0.25rem solid lightgray;
  border-top: 0.25rem solid black;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
