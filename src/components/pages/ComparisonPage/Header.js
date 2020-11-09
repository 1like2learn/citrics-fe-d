import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/Citrics Icon.svg';
import { FaSearchengin, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  background-color: #c4c4c4;

  .left {
    display: flex;
    align-items: center;
    width: 20%;
    margin: 1% 0 1% 2%;

    h1 {
      font-family: 'Norwester', sans serif;
      text-transform: uppercase;
      font-size: 2rem;
      align-items: flex-start;
      letter-spacing: 3px;
      color: #d35540;
    }

    h3 {
      font-size: 0.45rem;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
    }

    div {
      display: flex;
      flex-direction: column;
      margin: 0 2%;
      align-items: flex-start;
    }
  }

  .search {
    text-align: center;
    display: flex;
    width: 55%;
    margin: 2% 2.5% 2% 0;
  }

  .right {
    display: flex;
    align-items: center;
    align-content: flex-end;
    width: 15%;
    margin: 2% 0;

    .profile {
      margin: 0 15%;
    }

    div {
      display: flex;
      font-size: 0.5rem;
      align-items: flex-end;
      margin: 1% 0 1% 5%;
      color: #d35540;
    }
  }
`;

const SearchBar = styled.form`
  width: 60%;
  padding: 20px;

  input {
    position: relative;
    display: flex;
    border-radius: 25px;
    border: 0;
    display: inline-block;
    width: 150%;
    text-align: center;
  }
`;

const searchable = {
  term: '',
};

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState(searchable);
  const searching = useSelector(state => state.isSearching);

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <HeaderBar>
      <div className="left">
        <img src={logo} alt="Citrics Logo" height="40px" />

        <div>
          <h1>CITRICS</h1>
          <h3>A nomad's guide to the city</h3>
        </div>
      </div>

      <div className="search">
        {searching ? null : (
          <SearchBar className="sb-dis">
            <label name="term" htmlFor="term">
              <input
                name="term"
                value={searchTerm.term}
                onChange={handleChanges}
                placeholder="Start your search..."
                type="text"
              />
            </label>
          </SearchBar>
        )}
      </div>

      <div className="right">
        <div>
          <p>
            Advanced <br /> Search
          </p>{' '}
          &nbsp;
          <FaSearchengin size="25px" />
        </div>
        <FaUserCircle className="profile" size="30px" />
      </div>
    </HeaderBar>
  );
};
