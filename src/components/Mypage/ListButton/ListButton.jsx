import { useRef } from 'react';
import styled from 'styled-components';

const ListButton = (props) => {
  const { label, value, name, checked, onChange } = props;

  const wrapperRef = useRef();
  const ref = useRef();

  const handleClick = () => {
    ref.current?.click();
  };

  return (
    <Wrapper
      ref={wrapperRef}
      className={checked ? 'checked' : ''}
      onClick={handleClick}
    >
      <input
        ref={ref}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label>{label}</label>
    </Wrapper>
  );
};

export default ListButton;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 25%;
  font-size: 14px;

  background-color: #fff;
  padding: 36px 19px;
  box-sizing: border-box;
  gap: 6px;
  cursor: pointer;

  &.checked {
    background-color: #00e37d;

    & label {
      color: #fff;
    }
  }

  > input:first-child {
    display: none;
  }

  label {
    font-size: 1.2rem;
    color: #d9d9d9;
    font-weight: 500;
    cursor: pointer;
  }
`;
