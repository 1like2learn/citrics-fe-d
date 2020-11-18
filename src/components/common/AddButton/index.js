import React from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const AddButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3553f;
  border-radius: 20px;
  width: 50px;
  height: 50px;
  .add-button-icon {
    color: #fff;
    width: 22px;
    height: 22px;
  }
`;

export default function AddButton() {
  return (
    <AddButtonContainer>
      <FaPlus size="22px" className="add-button-icon" />
    </AddButtonContainer>
  );
}
