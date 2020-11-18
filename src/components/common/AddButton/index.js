import React from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3553f;
  border-radius: 20px;
  .add-button-icon {
    color: #fff;
  }
`;

export default function AddButton() {
  return (
    <AddButtonContainer>
      <FaPlus size="50px" className="add-button-icon" />
    </AddButtonContainer>
  );
}
