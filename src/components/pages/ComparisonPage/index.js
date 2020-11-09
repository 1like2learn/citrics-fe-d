import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/Citrics Icon.svg';
import {
  FaSearchengin,
  FaUserCircle,
  FaRegPlusSquare,
  FaCity,
  FaTemperatureHigh,
  FaTemperatureLow,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchCities } from '../../../state/actions/searchBarActs';
import { Bar, Line } from 'react-chartjs-2';

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

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return <></>;
};
