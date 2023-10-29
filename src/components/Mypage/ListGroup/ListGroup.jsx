import { Children, cloneElement } from 'react';
import { Wrapper } from './style';

const ListGroup = ({ name, value, onChange, children }) => (
  <Wrapper value={value}>
    {Children.map(children, (child) => {
      return cloneElement(child, {
        name,
        checked: child.props.value === value,
        onChange,
        ...child.props,
      });
    })}
  </Wrapper>
);

export default ListGroup;
