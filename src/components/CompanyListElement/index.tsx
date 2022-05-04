type CompnayListElementProps = {
  name: any;
};

export const CompnayListElement = ({ name }: CompnayListElementProps) => {
  return (
    <li>
      <span>{name['1. symbol']}</span>
      <button>+</button>
    </li>
  );
};
