import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Searchbar from '../Searchbar/searchbar';
import { toggleSearch } from '../../../state/actions/cityActs';

const SearchContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: purple;
`;

export const IfSearching = () => {
  const searching = useSelector(state => state.isSearching);
  const dispatch = useDispatch();

  return (
    <SearchContainer>
      {searching ? (
        <div>
          <button onClick={() => dispatch(toggleSearch())}>X</button>
          <Searchbar /> <p>SAJHfoiwhroi</p>
        </div>
      ) : null}
    </SearchContainer>
  );
};
