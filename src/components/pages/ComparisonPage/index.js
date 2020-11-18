import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCities } from '../../../state/actions/searchBarActs';
import Container from './Container';

export default function ComparisonPage(props) {
  const { currentCities } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cityData);
  const searching = useSelector(state => state.isSearching);
  const cityOne = useSelector(state => state.cityOne);
  const cityTwo = useSelector(state => state.cityTwo);

  return (
    <>
      <Container currentCities={currentCities} />
    </>
  );
}
