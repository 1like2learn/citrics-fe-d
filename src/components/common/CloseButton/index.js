import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const CloseButtonContainer = styled.button`
  display: flex;
  color: #d3553f;
  transform: rotate(45deg);
  background: none;
  border: none;
  outline: none;
  font-size: 1.5rem;
  align-self: center;
`;

export default function CloseButton() {
  const [isClose, setIsClosed] = useState(false);

  const onClick = e => {
    e.preventDefault();
    setIsClosed(!isClose);
  };

  return (
    <CloseButtonContainer onClick={onClick}>
      <FaPlus width="1.375rem" />
    </CloseButtonContainer>
  );
}
