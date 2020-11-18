import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from './Container';
import Footer from '../../common/Footer';

const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2% 0;

  div {
    width: 75%;
    margin: 1% auto;
    text-align: center;
    font-size: 0.75rem;
  }
`;

export const ComparisonPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cityData);
  const searching = useSelector(state => state.isSearching);
  const cityOne = useSelector(state => state.cityOne);
  const cityTwo = useSelector(state => state.cityTwo);

  return (
    <>
      <Container />
      {/* <Footer /> */}
    </>
  );
};
