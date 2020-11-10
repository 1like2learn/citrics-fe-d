import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearchengin } from 'react-icons/fa';

const HeaderBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 15vh;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background-color: rgba(00, 00, 00, 0.7);

  .search {
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 60%;
    align-items: center;
    align-content: center;
  }

  .aside {
    display: flex;
    font-size: 0.6rem;
    align-items: flex-end;
    color: #ffffff;
  }

  .right {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1rem;
    flex-direction: row;
    width: 35%;
    margin: 1% auto;

    .login {
      background-color: rgba(00, 00, 00, 0);
    }

    button {
      margin: 2%;
      width: 100%;
      background-color: #d35540;
      border: 0;
      border-radius: 25px;
      color: #ffffff;
      height: 20px;
      font-family: 'Norwester', sans serif;
    }
  }
`;

const SearchBar = styled.form`
  margin: 0 5%;
  width: 60%;

  input {
    position: relative;
    display: flex;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    text-align: center;
    margin: 0 2%;
    height: 20px;
    width: 100%;
  }
`;

export const LandingHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <HeaderBar>
        <div className="search">
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

          <div className="aside">
            <p>
              Advanced <br /> Search
            </p>{' '}
            &nbsp;
            <FaSearchengin size="25px" />
          </div>
        </div>

        <div className="right">
          <button className="login">Login</button>
          <button>Compare Cities</button>
        </div>
      </HeaderBar>

      <div className="spacer"></div>
    </div>
  );
};
