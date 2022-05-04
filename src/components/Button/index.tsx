import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Button = ({ children }: Props): ReactElement => {
  return (
    <div>
      <h3>Test Button</h3>
      <button>{children}</button>
    </div>
  );
};
